"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { GetBlogsResponse } from "../../blog/api/getBlogs";
import { Suspense, useEffect, useRef, useState } from "react";
import { getPosts, GetPostsResponse, PostSortType } from "../api/getPosts";
import TrendingPostCard from "./TrendingPostCard";
import SearchInput from "./SearchInput";
import { Funnel, Search, TrendingUp } from "lucide-react";
import BlogFilter from "./BlogFilter";
import { BadgeSkeleton } from "@/src/shared/ui/skeleton/badge-skeleton";
import PostCard from "./PostCard";
import PostSortMenu from "./PostSortMenu";
import { CardSkeleton } from "@/src/shared/ui/skeleton/card-skeleton";

export default function PostSearch() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [searchText, setSearchText] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<GetBlogsResponse | null>(
    null
  );
  const [sort, setSort] = useState<PostSortType>("latest");

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<GetPostsResponse>({
    queryKey: ["post", sort, selectedBlog?.id],
    queryFn: async ({ pageParam = 1 }) =>
      await getPosts({
        sort,
        blogId: selectedBlog?.id,
        page: pageParam as number,
        size: 20,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
    placeholderData: (previousData) => previousData,
  });

  const allPosts = posts?.pages.flatMap((page) => page.items) ?? [];

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
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
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-primary" />
            <h5 className="text-xl font-bold text-balance">검색</h5>
          </div>
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 font-bold">
              <Funnel className="w-4 h-4" /> 블로그
            </span>
            <Suspense fallback={<BadgeSkeleton />}>
              <BlogFilter
                selectedBlog={selectedBlog}
                setSelectedBlog={setSelectedBlog}
              />
            </Suspense>
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span>
            총 <span className="font-bold">{posts?.pages[0].total || 0}</span>
            개의 글
          </span>
          <PostSortMenu sort={sort} setSort={setSort} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!allPosts || isLoading
            ? Array.from({ length: 10 }).map((_, index) => (
                <CardSkeleton key={index} className="h-80" />
              ))
            : allPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>

      <div ref={loadMoreRef} className="h-4" />
      {isFetchingNextPage && (
        <div className="text-center text-sm text-muted-foreground">
          불러오는 중...
        </div>
      )}
    </>
  );
}
