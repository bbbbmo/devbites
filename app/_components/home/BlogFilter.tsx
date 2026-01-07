import { GetBlogsResponse, getBlogs } from "@/api/getBlogs";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Funnel } from "lucide-react";

export default function BlogFilter() {
  const { data: blogs } = useQuery<GetBlogsResponse[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-bold">
        <Funnel className="w-4 h-4" /> 블로그
      </span>
      <div className="flex flex-wrap gap-2">
        {blogs?.map((blog) => (
          <Button key={blog.id}>{blog.name}</Button>
        ))}
      </div>
    </div>
  );
}
