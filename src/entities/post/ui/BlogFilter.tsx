"use client";

import { Badge } from "@/src/shared/ui/badge";
import { getBlogs, GetBlogsResponse } from "../../blog/api/getBlogs";
import { useQuery } from "@tanstack/react-query";
import { BadgeSkeleton } from "@/src/shared/ui/skeleton/badge-skeleton";

type BlogFilterProps = {
  selectedBlog: GetBlogsResponse | null;
  setSelectedBlog: (blog: GetBlogsResponse | null) => void;
};
export default function BlogFilter({
  selectedBlog,
  setSelectedBlog,
}: BlogFilterProps) {
  const { data: blogs, isLoading } = useQuery<GetBlogsResponse[]>({
    queryKey: ["blog"],
    queryFn: getBlogs,
  });

  return (
    <div className="flex flex-wrap gap-2">
      {isLoading || !blogs ? (
        Array.from({ length: 6 }).map((_, index) => (
          <BadgeSkeleton key={index} className="w-20 h-8" />
        ))
      ) : (
        <>
          {/* 전체 선택 옵션 */}
          <Badge
            variant={selectedBlog === null ? "default" : "secondary"}
            className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            onClick={() => setSelectedBlog(null)}
          >
            전체
          </Badge>
          {/* 블로그 목록 */}
          {blogs.map((blog) => (
            <Badge
              key={blog.id}
              variant={selectedBlog?.id === blog.id ? "default" : "secondary"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
              onClick={() => setSelectedBlog(blog)}
            >
              {blog.name}
            </Badge>
          ))}
        </>
      )}
    </div>
  );
}
