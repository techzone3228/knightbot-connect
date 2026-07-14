import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ENDPOINTS = [
  { method: "GET", path: "/api/status", desc: "Connection state, user, uptime, QR / pairing code" },
  { method: "GET", path: "/api/commands", desc: "List of commands with enabled flags" },
  { method: "PATCH", path: "/api/commands/:name", desc: "Body: { enabled: boolean }" },
  { method: "GET", path: "/api/groups", desc: "Groups the bot has joined" },
  { method: "GET", path: "/api/logs?limit=100", desc: "Recent log entries" },
];

export function ApiDocs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bot API contract</CardTitle>
        <CardDescription>
          Expose these HTTP endpoints on your hosted KnightBot. All requests send
          <code className="mx-1 rounded bg-muted px-1 py-0.5 text-xs">
            Authorization: Bearer &lt;API_KEY&gt;
          </code>
          and expect JSON. Enable CORS for this dashboard's origin.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border">
          {ENDPOINTS.map((e) => (
            <li key={e.path} className="flex items-start gap-3 py-3">
              <Badge
                variant={e.method === "GET" ? "secondary" : "default"}
                className="mt-0.5 shrink-0 font-mono text-[10px]"
              >
                {e.method}
              </Badge>
              <div className="min-w-0">
                <code className="text-sm text-foreground">{e.path}</code>
                <p className="text-xs text-muted-foreground">{e.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}