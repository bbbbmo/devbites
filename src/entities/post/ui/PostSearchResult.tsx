"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts, GetPostsResponse, PostSortType } from "../api/getPosts";
import PostCard from "./PostCard";
import { ListFilter } from "lucide-react";
import { useRef, useState } from "react";
import SortOption from "./SortOption";
import { SORT_OPTIONS } from "../config/sort-options.config";
import { GetBlogsResponse } from "../../blog/api/getBlogs";

type PostSearchResultProps = {
  selectedBlog: GetBlogsResponse | null;
};

export default function PostSearchResult({
  selectedBlog,
}: PostSearchResultProps) {
  const [sort, setSort] = useState<PostSortType>("latest");
  const [open, setOpen] = useState(false);

  const { data: posts } = useQuery<GetPostsResponse[]>({
    queryKey: ["posts", sort, selectedBlog?.id],
    queryFn: async () => await getPosts({ sort, blogId: selectedBlog?.id }),
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span>
          총 <span className="font-bold">{posts?.length || 0}</span>개의 글
        </span>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-black"
          >
            <ListFilter className="w-4 h-4" />
            {SORT_OPTIONS.find((option) => option.value === sort)?.label}
          </button>

          {open && (
            <SortOption sort={sort} setSort={setSort} setOpen={setOpen} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
