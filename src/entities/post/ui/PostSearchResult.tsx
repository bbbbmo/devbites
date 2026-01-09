"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts, GetPostsResponse } from "../api/getPosts";
import PostCard from "./PostCard";

export default function PostSearchResult() {
  const { data: posts } = useQuery<GetPostsResponse[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return (
    <section className="flex flex-col gap-4">
      <span>
        총 <span className="font-bold">{posts?.length || 0}</span>개의 글
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
