import { cn } from "../../lib/utils";
import { Card, CardContent, CardHeader } from "../card";
import { Skeleton } from "./skeleton";

function CardSkeleton({ className }: { className: string }) {
  return (
    <Card className={cn("animate-pulse rounded-md", className)}>
      <CardHeader>
        <Skeleton className="h-4 w-2/3 block" />
        <Skeleton className="h-4 w-1/2 block" />
      </CardHeader>
      <CardContent className="flex-1 w-full overflow-hidden flex flex-col min-h-0">
        <Skeleton className="block w-full h-full" />
      </CardContent>
    </Card>
  );
}

export { CardSkeleton };
