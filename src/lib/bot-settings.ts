import { useEffect, useState } from "react";

const STORAGE_KEY = "knightbot.settings.v1";

export type BotSettings = {
  baseUrl: string;
  apiKey: string;
};

const EMPTY: BotSettings = { baseUrl: "", apiKey: "" };

function read(): BotSettings {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<BotSettings>;
    return {
      baseUrl: (parsed.baseUrl ?? "").trim(),
      apiKey: (parsed.apiKey ?? "").trim(),
    };
  } catch {
    return EMPTY;
  }
}

const listeners = new Set<() => void>();

export function useBotSettings() {
  const [settings, setSettings] = useState<BotSettings>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setSettings(read());
    setHydrated(true);
    const onChange = () => setSettings(read());
    listeners.add(onChange);
    return () => {
      listeners.delete(onChange);
    };
  }, []);

  const save = (next: BotSettings) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setSettings(next);
    listeners.forEach((fn) => fn());
  };

  const clear = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setSettings(EMPTY);
    listeners.forEach((fn) => fn());
  };

  return { settings, hydrated, save, clear, configured: Boolean(settings.baseUrl) };
}

export async function botFetch<T = unknown>(
  settings: BotSettings,
  path: string,
  init: RequestInit = {},
): Promise<T> {
  if (!settings.baseUrl) throw new Error("Bot URL is not configured");
  const url = settings.baseUrl.replace(/\/$/, "") + path;
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  if (settings.apiKey) headers.set("Authorization", `Bearer ${settings.apiKey}`);
  const res = await fetch(url, { ...init, headers });
  const text = await res.text();
  const data = text ? safeJson(text) : null;
  if (!res.ok) {
    const msg =
      (data && typeof data === "object" && "error" in data && String((data as { error: unknown }).error)) ||
      `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data as T;
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}