export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  POSTS: `${API_URL}/post`,
  POST_DETAIL: (postId: number) => `${API_URL}/post/${postId}`,
};
