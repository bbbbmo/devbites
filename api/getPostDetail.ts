import { API_ENDPOINTS } from "./endpoint";

export async function getPostDetail(postId: number) {
  const res = await fetch(API_ENDPOINTS.POST_DETAIL(postId));

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}
