"use client";

import { GetPostsResponse, PostSortType } from "../api/getPosts";
import PostCard from "./PostCard";
import { ListFilter } from "lucide-react";
import { useRef } from "react";
import SortOption from "./SortOption";
import { SORT_OPTIONS } from "../config/sort-options.config";

type PostSearchResultProps = {
  posts: GetPostsResponse[];
  sort: PostSortType;
  setSort: (sort: PostSortType) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function PostSearchResult({
  posts,
  sort,
  setSort,
  open,
  setOpen,
}: PostSearchResultProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span>
          총 <span className="font-bold">{posts?.length || 0}</span>개의 글
        </span>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-black cursor-pointer"
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
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
