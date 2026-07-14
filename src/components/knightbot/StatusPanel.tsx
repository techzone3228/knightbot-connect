import { useQuery } from "@tanstack/react-query";
import { Activity, Loader2, QrCode, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { botFetch, useBotSettings } from "@/lib/bot-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Status = {
  connected?: boolean;
  state?: string;
  user?: { id?: string; name?: string; phone?: string };
  uptimeSeconds?: number;
  qr?: string | null;
  pairingCode?: string | null;
  version?: string;
};

function formatUptime(s?: number) {
  if (!s || s < 0) return "—";
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  return [d && `${d}d`, h && `${h}h`, `${m}m`].filter(Boolean).join(" ");
}

export function StatusPanel() {
  const { settings, configured } = useBotSettings();

  const status = useQuery({
    queryKey: ["knightbot", "status", settings.baseUrl],
    queryFn: () => botFetch<Status>(settings, "/api/status"),
    enabled: configured,
    refetchInterval: 5000,
    retry: false,
  });

  if (!configured) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Not connected</CardTitle>
          <CardDescription>
            Add your bot's URL and API key in Settings to see live status.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (status.isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center gap-3 p-6 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Contacting bot…
        </CardContent>
      </Card>
    );
  }

  if (status.error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <WifiOff className="h-4 w-4" /> Unreachable
          </CardTitle>
          <CardDescription>{(status.error as Error).message}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" variant="secondary" onClick={() => status.refetch()}>
            <RefreshCw className="mr-2 h-3.5 w-3.5" /> Retry
          </Button>
        </CardContent>
      </Card>
    );
  }

  const data = status.data ?? {};
  const connected = Boolean(data.connected);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background: connected
              ? "var(--gradient-hero)"
              : "linear-gradient(90deg, var(--destructive), transparent)",
          }}
        />
        <CardHeader>
          <CardDescription>Connection</CardDescription>
          <CardTitle className="flex items-center gap-2 text-2xl">
            {connected ? (
              <>
                <Wifi className="h-5 w-5 text-primary" /> Online
              </>
            ) : (
              <>
                <WifiOff className="h-5 w-5 text-destructive" /> Offline
              </>
            )}
            {data.state && (
              <Badge variant="secondary" className="ml-2 text-xs font-normal">
                {data.state}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm text-muted-foreground">
          <div>
            <span className="text-foreground">Number:</span> {data.user?.phone ?? data.user?.id ?? "—"}
          </div>
          <div>
            <span className="text-foreground">Name:</span> {data.user?.name ?? "—"}
          </div>
          <div>
            <span className="text-foreground">Version:</span> {data.version ?? "—"}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Uptime</CardDescription>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Activity className="h-5 w-5 text-primary" /> {formatUptime(data.uptimeSeconds)}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Polled every 5s from <code className="rounded bg-muted px-1 py-0.5 text-xs">/api/status</code>
        </CardContent>
      </Card>

      {!connected && (data.qr || data.pairingCode) && (
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-primary" /> Pair a device
            </CardTitle>
            <CardDescription>
              Scan this QR from WhatsApp → Linked devices, or enter the pairing code.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {data.qr && (
              <img
                src={
                  data.qr.startsWith("data:")
                    ? data.qr
                    : `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(data.qr)}`
                }
                alt="WhatsApp pairing QR"
                width={240}
                height={240}
                className="rounded-lg border border-border bg-white p-2"
              />
            )}
            {data.pairingCode && (
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  Pairing code
                </div>
                <div className="font-mono text-3xl tracking-widest text-primary">
                  {data.pairingCode}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}