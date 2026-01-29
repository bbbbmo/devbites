import { cn } from "../lib/utils";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { CheckCircle2Icon } from "lucide-react";

type AlertDialogProps = {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export function AlertDialog({
  className,
  title,
  description,
  icon = <CheckCircle2Icon />,
}: AlertDialogProps) {
  return (
    <Alert className={cn("max-w-md", className)}>
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
