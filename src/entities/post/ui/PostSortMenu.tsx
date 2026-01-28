import { Check, ListFilter } from "lucide-react";
import { PostSortType } from "../api/getPosts";
import { SORT_OPTIONS } from "../config/sort-options.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/shared/ui/dropdown-menu";

type PostSortMenuProps = {
  sort: PostSortType;
  setSort: (sort: PostSortType) => void;
};

export default function PostSortMenu({ sort, setSort }: PostSortMenuProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
          <ListFilter className="w-4 h-4" />
          {SORT_OPTIONS.find((option) => option.value === sort)?.label}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => {
              setSort(option.value);
            }}
          >
            {option.label}
            {sort === option.value && (
              <Check className="size-2 text-blue-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
