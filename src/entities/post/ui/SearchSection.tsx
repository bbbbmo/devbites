import { Input } from "@/src/shared/ui/input";
import { Search } from "lucide-react";
import BlogFilter from "./BlogFilter";
import { GetBlogsResponse } from "../../blog/api/getBlogs";

type SearchSectionProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  blogs: GetBlogsResponse[];
  selectedBlog: GetBlogsResponse | null;
  setSelectedBlog: (blog: GetBlogsResponse | null) => void;
};

export default function SearchSection({
  searchText,
  setSearchText,
  blogs,
  selectedBlog,
  setSelectedBlog,
}: SearchSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-primary" />
        <h5 className="text-xl font-bold text-balance">검색</h5>
      </div>
      <div className="relative w-full max-w-xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="제목, 내용, 회사명으로 검색..."
          className="pl-10 py-6"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <BlogFilter
        blogs={blogs}
        selectedBlog={selectedBlog}
        setSelectedBlog={setSelectedBlog}
      />
    </section>
  );
}
