import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, Terminal } from "lucide-react";
import { botFetch, useBotSettings } from "@/lib/bot-settings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type Command = {
  name: string;
  description?: string;
  category?: string;
  enabled: boolean;
};

export function CommandsPanel() {
  const { settings, configured } = useBotSettings();
  const qc = useQueryClient();

  const list = useQuery({
    queryKey: ["knightbot", "commands", settings.baseUrl],
    queryFn: () => botFetch<Command[]>(settings, "/api/commands"),
    enabled: configured,
    retry: false,
  });

  const toggle = useMutation({
    mutationFn: ({ name, enabled }: { name: string; enabled: boolean }) =>
      botFetch(settings, `/api/commands/${encodeURIComponent(name)}`, {
        method: "PATCH",
        body: JSON.stringify({ enabled }),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["knightbot", "commands"] });
      toast.success("Command updated");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  if (!configured) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" /> Commands
        </CardTitle>
        <CardDescription>Toggle any command on or off in real time.</CardDescription>
      </CardHeader>
      <CardContent>
        {list.isLoading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading commands…
          </div>
        ) : list.error ? (
          <div className="text-sm text-destructive">{(list.error as Error).message}</div>
        ) : !list.data?.length ? (
          <div className="text-sm text-muted-foreground">
            No commands returned by <code>/api/commands</code>.
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {list.data.map((cmd) => (
              <li key={cmd.name} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-foreground">.{cmd.name}</span>
                    {cmd.category && (
                      <Badge variant="secondary" className="text-[10px]">
                        {cmd.category}
                      </Badge>
                    )}
                  </div>
                  {cmd.description && (
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {cmd.description}
                    </p>
                  )}
                </div>
                <Switch
                  checked={cmd.enabled}
                  disabled={toggle.isPending}
                  onCheckedChange={(v) => toggle.mutate({ name: cmd.name, enabled: v })}
                />
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}