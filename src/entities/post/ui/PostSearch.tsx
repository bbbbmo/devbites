"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs, GetBlogsResponse } from "../../blog/api/getBlogs";
import { useState } from "react";
import PostSearchResult from "./PostSearchResult";
import { getPosts, GetPostsResponse, PostSortType } from "../api/getPosts";
import TrendingPostCard from "./TrendingPostCard";
import SearchSection from "./SearchSection";
import { TrendingUp } from "lucide-react";

export default function PostSearch() {
  const [searchText, setSearchText] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<GetBlogsResponse | null>(
    null
  );
  const [sort, setSort] = useState<PostSortType>("latest");
  const [open, setOpen] = useState(false);

  const { data: blogs } = useQuery<GetBlogsResponse[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const { data: posts } = useQuery<GetPostsResponse[]>({
    queryKey: ["posts", sort, selectedBlog?.id],
    queryFn: async () => await getPosts({ sort, blogId: selectedBlog?.id }),
    placeholderData: (previousData) => previousData, // TODO: 뭔지 알아보기
  });

  return (
    <>
      <div className="flex gap-8 lg:flex-row flex-col">
        <section className="flex flex-col gap-4 lg:max-w-2xl w-full">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h5 className="text-xl font-bold text-balance">실시간 트렌드</h5>
          </div>
          <TrendingPostCard />
        </section>
        <SearchSection
          searchText={searchText}
          setSearchText={setSearchText}
          blogs={blogs || []}
          selectedBlog={selectedBlog}
          setSelectedBlog={setSelectedBlog}
        />
      </div>

      <PostSearchResult
        posts={posts || []}
        sort={sort}
        setSort={setSort}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
