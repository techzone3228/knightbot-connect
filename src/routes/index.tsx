import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bot, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatusPanel } from "@/components/knightbot/StatusPanel";
import { CommandsPanel } from "@/components/knightbot/CommandsPanel";
import { GroupsPanel } from "@/components/knightbot/GroupsPanel";
import { LogsPanel } from "@/components/knightbot/LogsPanel";
import { ApiDocs } from "@/components/knightbot/ApiDocs";
import { SettingsDialog } from "@/components/knightbot/SettingsDialog";
import { useBotSettings } from "@/lib/bot-settings";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const { settings, configured, hydrated } = useBotSettings();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-primary)" }}
            >
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">KnightBot Control</h1>
              <p className="text-xs text-muted-foreground">
                {configured
                  ? new URL(settings.baseUrl).host
                  : "Not connected to a bot"}
              </p>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
            <Settings2 className="mr-2 h-4 w-4" /> Settings
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        {hydrated && !configured && (
          <div
            className="rounded-xl border border-border p-6"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--glow-primary)" }}
          >
            <h2 className="text-2xl font-bold text-primary-foreground">
              Welcome to KnightBot Control
            </h2>
            <p className="mt-1 max-w-xl text-sm text-primary-foreground/90">
              Host KnightBot-Mini on Railway, Render, or a VPS, expose the API endpoints
              listed below, then connect this dashboard to manage it from anywhere.
            </p>
            <Button
              className="mt-4"
              variant="secondary"
              onClick={() => setOpen(true)}
            >
              Connect your bot
            </Button>
          </div>
        )}

        <Tabs defaultValue="status" className="space-y-4">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="commands">Commands</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-4">
            <StatusPanel />
          </TabsContent>
          <TabsContent value="commands">
            <CommandsPanel />
          </TabsContent>
          <TabsContent value="groups">
            <GroupsPanel />
          </TabsContent>
          <TabsContent value="logs">
            <LogsPanel />
          </TabsContent>
          <TabsContent value="api">
            <ApiDocs />
          </TabsContent>
        </Tabs>
      </main>

      <SettingsDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
