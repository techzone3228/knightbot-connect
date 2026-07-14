import { useQuery } from "@tanstack/react-query";
import { Loader2, ScrollText } from "lucide-react";
import { botFetch, useBotSettings } from "@/lib/bot-settings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LogEntry = {
  ts: string;
  level?: "info" | "warn" | "error" | "debug";
  message: string;
};

const LEVEL_COLOR: Record<string, string> = {
  info: "text-primary",
  warn: "text-warning",
  error: "text-destructive",
  debug: "text-muted-foreground",
};

export function LogsPanel() {
  const { settings, configured } = useBotSettings();
  const logs = useQuery({
    queryKey: ["knightbot", "logs", settings.baseUrl],
    queryFn: () => botFetch<LogEntry[]>(settings, "/api/logs?limit=100"),
    enabled: configured,
    refetchInterval: 4000,
    retry: false,
  });

  if (!configured) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ScrollText className="h-4 w-4 text-primary" /> Live logs
        </CardTitle>
        <CardDescription>Latest 100 entries, refreshed every 4 seconds.</CardDescription>
      </CardHeader>
      <CardContent>
        {logs.isLoading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Streaming…
          </div>
        ) : logs.error ? (
          <div className="text-sm text-destructive">{(logs.error as Error).message}</div>
        ) : !logs.data?.length ? (
          <div className="text-sm text-muted-foreground">No log entries yet.</div>
        ) : (
          <div className="max-h-[420px] overflow-auto rounded-md border border-border bg-background p-3 font-mono text-xs leading-relaxed">
            {logs.data.map((l, i) => (
              <div key={i} className="flex gap-3">
                <span className="shrink-0 text-muted-foreground">
                  {new Date(l.ts).toLocaleTimeString()}
                </span>
                <span className={`shrink-0 uppercase ${LEVEL_COLOR[l.level ?? "info"] ?? ""}`}>
                  {(l.level ?? "info").padEnd(5)}
                </span>
                <span className="whitespace-pre-wrap break-words text-foreground">{l.message}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}