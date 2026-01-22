"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs, GetBlogsResponse } from "../../blog/api/getBlogs";
import { useState } from "react";
import PostSearchResult from "./PostSearchResult";
import { getPosts, GetPostsResponse, PostSortType } from "../api/getPosts";
import TrendingPostSection from "./TrendingPostSection";
import SearchSection from "./SearchSection";

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

  const { data: trendingPosts } = useQuery<GetPostsResponse[]>({
    queryKey: ["trending-posts"], // TODO: 추후 백엔드에서 트렌드 게시물 조회 기능 추가 시 수정
    queryFn: () => getPosts(),
  });

  const { data: posts } = useQuery<GetPostsResponse[]>({
    queryKey: ["posts", sort, selectedBlog?.id],
    queryFn: async () => await getPosts({ sort, blogId: selectedBlog?.id }),
    placeholderData: (previousData) => previousData, // TODO: 뭔지 알아보기
  });

  return (
    <>
      <div className="flex gap-8">
        <TrendingPostSection trendingPosts={trendingPosts?.slice(0, 5) || []} />
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
