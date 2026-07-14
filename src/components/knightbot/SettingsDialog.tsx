import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBotSettings, type BotSettings } from "@/lib/bot-settings";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsDialog({ open, onOpenChange }: Props) {
  const { settings, save, clear } = useBotSettings();
  const [draft, setDraft] = useState<BotSettings>(settings);

  useEffect(() => {
    if (open) setDraft(settings);
  }, [open, settings]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bot connection</DialogTitle>
          <DialogDescription>
            Point the dashboard at your hosted KnightBot instance. Credentials stay in
            your browser.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="baseUrl">Bot base URL</Label>
            <Input
              id="baseUrl"
              placeholder="https://your-bot.up.railway.app"
              value={draft.baseUrl}
              onChange={(e) => setDraft((d) => ({ ...d, baseUrl: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apiKey">API key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Shared secret sent as Bearer token"
              value={draft.apiKey}
              onChange={(e) => setDraft((d) => ({ ...d, apiKey: e.target.value }))}
            />
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="ghost"
            onClick={() => {
              clear();
              setDraft({ baseUrl: "", apiKey: "" });
              toast.success("Cleared bot connection");
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => {
              save({
                baseUrl: draft.baseUrl.trim(),
                apiKey: draft.apiKey.trim(),
              });
              toast.success("Saved");
              onOpenChange(false);
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}