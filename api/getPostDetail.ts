export async function getPostDetail(postId: number) {
  const res = await fetch(`http://localhost:3000/post/${postId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}
