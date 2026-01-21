import { Check } from "lucide-react";
import { SORT_OPTIONS } from "../config/sort-options.config";
import { PostSortType } from "../api/getPosts";

export type SortOptionProps = {
  sort: PostSortType;
  setSort: (sort: PostSortType) => void;
  setOpen: (open: boolean) => void;
};
export default function SortOption({
  sort,
  setSort,
  setOpen,
}: SortOptionProps) {
  return (
    <ul className="absolute right-0 mt-2 w-32 rounded-md border bg-white shadow-md z-10">
      {SORT_OPTIONS.map((option) => (
        <li
          key={option.value}
          onClick={() => {
            setSort(option.value);
            setOpen(false);
          }}
          className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
        >
          {option.label}
          {sort === option.value && <Check className="w-4 h-4 text-blue-500" />}
        </li>
      ))}
    </ul>
  );
}
