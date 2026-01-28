import { Badge } from "../badge";
import { cn } from "../../lib/utils";

type BadgeSkeletonProps = {
  className?: string;
  length?: number;
};

function BadgeSkeleton({ className, length = 5 }: BadgeSkeletonProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {Array.from({ length }).map((_, index) => (
        <Badge key={index} className="animate-pulse bg-muted w-20 h-8" />
      ))}
    </div>
  );
}

export { BadgeSkeleton };
