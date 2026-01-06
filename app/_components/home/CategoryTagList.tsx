import { Badge } from "@/components/ui/badge";
import { Tags } from "lucide-react";

export type CategoryTagListProps = {
  categories: {
    id: number;
    name: string;
  }[];
};

export default function CategoryTagList({ categories }: CategoryTagListProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <Badge
          key={category.id}
          className="flex items-center gap-2"
          variant="secondary"
        >
          <Tags className="w-4 h-4" />
          <span className="text-muted-foreground">{category.name}</span>
        </Badge>
      ))}
    </div>
  );
}
