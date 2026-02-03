import { Badge } from "../badge";
import { cn } from "../../lib/utils";

type BadgeSkeletonProps = {
  className?: string;
};

function BadgeSkeleton({ className }: BadgeSkeletonProps) {
  return <Badge className={cn("animate-pulse bg-muted w-20 h-8", className)} />;
}

export { BadgeSkeleton };
