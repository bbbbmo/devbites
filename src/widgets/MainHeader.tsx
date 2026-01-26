import { Button } from "@/src/shared/ui/button";
import Header from "@/src/shared/ui/header";
import { Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function MainHeader() {
  return (
    <Header>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-balance">DevBites</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button size="lg" className="gap-2">
          <Mail className="w-4 h-4" />
          Subscribe
        </Button>
      </div>
    </Header>
  );
}
