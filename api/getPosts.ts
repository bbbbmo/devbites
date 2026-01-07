import { API_ENDPOINTS } from "./endpoint";

export async function getPosts() {
  const res = await fetch(API_ENDPOINTS.POSTS);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}
