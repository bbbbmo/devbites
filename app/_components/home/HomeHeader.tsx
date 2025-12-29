import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { Mail } from "lucide-react";

export default function HomeHeader() {
  return (
    <Header>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-balance">DevBites</h1>
          <p className="text-xs text-muted-foreground">
            매주 월요일 9시, 최신 기술 소식
          </p>
        </div>
      </div>
      <Button size="lg" className="gap-2">
        <>
          <Mail className="w-4 h-4" />
          Subscribe
        </>
      </Button>
    </Header>
  );
}
