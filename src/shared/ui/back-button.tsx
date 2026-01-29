import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "../lib/utils";

type BackButtonProps = {
  className?: string;
  href: string;
  text: string;
};

export default function BackButton({ className, href, text }: BackButtonProps) {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 text-muted-foreground hover:opacity-80 transition-opacity",
        className
      )}
      href={href}
    >
      <ArrowLeft className="w-4 h-4" />
      {text}
    </Link>
  );
}
