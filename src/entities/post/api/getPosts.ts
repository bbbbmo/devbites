import { buildQueryString } from "@/src/shared/lib/buildQueryString";
import { API_ENDPOINTS } from "@/src/shared/config/endpoint";
import { GetBlogsResponse } from "../../blog/api/getBlogs";

export type GetPostsResponse = {
  id: number;
  rssCategories: {
    id: number;
    name: string;
  }[];
  blog: GetBlogsResponse;
  title: string;
  shortSummary: string;
  detailedSummary: string;
  sourceUrl: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type PostSortType = "latest" | "oldest";

export type GetPostsParams = {
  blogId?: number;
  title?: string;
  shortSummary?: string;
  sort?: PostSortType;
};

export async function getPosts(
  params?: GetPostsParams
): Promise<GetPostsResponse[]> {
  const searchParams = buildQueryString(params || {});

  const res = await fetch(`${API_ENDPOINTS.POSTS}?${searchParams}`);

  if (!res.ok) {
    throw new Error("블로그 글 목록을 불러오는데 실패했습니다.");
  }

  return res.json();
}
