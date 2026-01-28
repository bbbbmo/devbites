import { Input } from "@/src/shared/ui/input";
import { Search } from "lucide-react";

type SearchInputProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export default function SearchInput({
  searchText,
  setSearchText,
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="제목, 내용, 회사명으로 검색..."
        className="pl-10 py-6"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
