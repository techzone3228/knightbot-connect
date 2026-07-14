import { useQuery } from "@tanstack/react-query";
import { Loader2, Users } from "lucide-react";
import { botFetch, useBotSettings } from "@/lib/bot-settings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Group = {
  id: string;
  name: string;
  participants?: number;
  isAdmin?: boolean;
};

export function GroupsPanel() {
  const { settings, configured } = useBotSettings();
  const groups = useQuery({
    queryKey: ["knightbot", "groups", settings.baseUrl],
    queryFn: () => botFetch<Group[]>(settings, "/api/groups"),
    enabled: configured,
    retry: false,
  });

  if (!configured) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" /> Groups
        </CardTitle>
        <CardDescription>Every WhatsApp group the bot has joined.</CardDescription>
      </CardHeader>
      <CardContent>
        {groups.isLoading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading groups…
          </div>
        ) : groups.error ? (
          <div className="text-sm text-destructive">{(groups.error as Error).message}</div>
        ) : !groups.data?.length ? (
          <div className="text-sm text-muted-foreground">
            No groups returned by <code>/api/groups</code>.
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {groups.data.map((g) => (
              <li key={g.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm text-foreground">{g.name}</div>
                  <div className="truncate font-mono text-[11px] text-muted-foreground">{g.id}</div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {g.isAdmin && <Badge variant="secondary">admin</Badge>}
                  <Badge>{g.participants ?? 0} members</Badge>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}