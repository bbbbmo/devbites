import { PostSortType } from "../api/getPosts";

export const SORT_OPTIONS: { label: string; value: PostSortType }[] = [
  { label: "최신순", value: "latest" },
  { label: "오래된순", value: "oldest" },
];
