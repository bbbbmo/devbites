import { API_ENDPOINTS } from "../../../shared/api/endpoint";
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

export async function getPosts(): Promise<GetPostsResponse[]> {
  const res = await fetch(API_ENDPOINTS.POSTS);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
