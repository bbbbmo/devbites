import { API_ENDPOINTS } from "../../../shared/api/endpoint";

export type GetBlogsResponse = {
  id: number;
  name: string;
  rssUrl: string;
  blogUrl: string;
};

export const getBlogs = async (): Promise<GetBlogsResponse[]> => {
  const res = await fetch(API_ENDPOINTS.BLOGS);
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return res.json();
};
