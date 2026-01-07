import { GetBlogsResponse, getBlogs } from "@/src/entities/blog/api/getBlogs";
import { Badge } from "@/src/shared/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { Funnel } from "lucide-react";
import { useState } from "react";

export default function BlogFilter() {
  const { data: blogs } = useQuery<GetBlogsResponse[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const [selectedBlog, setSelectedBlog] = useState<GetBlogsResponse | null>(
    null
  );

  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-bold">
        <Funnel className="w-4 h-4" /> 블로그
      </span>
      <div className="flex flex-wrap gap-2">
        {/* 전체 선택 옵션 */}
        <Badge
          variant={selectedBlog === null ? "default" : "secondary"}
          className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
          onClick={() => setSelectedBlog(null)}
        >
          전체
        </Badge>
        {/* 블로그 목록 */}
        {blogs?.map((blog) => (
          <Badge
            key={blog.id}
            variant={selectedBlog?.id === blog.id ? "default" : "secondary"}
            className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/80 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            onClick={() => setSelectedBlog(blog)}
          >
            {blog.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
