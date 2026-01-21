"use client";

import { Input } from "@/src/shared/ui/input";
import { Search } from "lucide-react";
import BlogFilter from "./BlogFilter";
import { useQuery } from "@tanstack/react-query";
import { getBlogs, GetBlogsResponse } from "../../blog/api/getBlogs";
import { useState } from "react";
import PostSearchResult from "./PostSearchResult";

export default function PostSearch() {
  const { data: blogs } = useQuery<GetBlogsResponse[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const [searchText, setSearchText] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<GetBlogsResponse | null>(
    null
  );
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col items-center justify-center gap-4">
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

      <PostSearchResult searchText={searchText} selectedBlog={selectedBlog} />
    </div>
  );
}
