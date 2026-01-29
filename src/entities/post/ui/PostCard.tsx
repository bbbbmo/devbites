"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";

import { Calendar, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { GetPostsResponseItems } from "@/src/entities/post/api/getPosts";
import dayjs from "dayjs";
import CategoryTagList from "./CategoryTagList";
import Link from "next/link";

export default function PostCard({ post }: { post: GetPostsResponseItems }) {
  const router = useRouter();

  const goToPostDetail = () => {
    router.push(`/post/${post.id}`);
  };

  const summary =
    post.shortSummary.length > 150
      ? post.shortSummary.slice(0, 150).replace(/`/g, "") + "..."
      : post.shortSummary.replace(/`/g, "");

  return (
    <Card
      className="group hover:cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur h-80 flex flex-col"
      onClick={goToPostDetail}
    >
      <CardHeader className="shrink-0">
        <div className="flex justify-between mb-3">
          <span className="text-sm ">{post.blog.name}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {dayjs(post.publishedAt).format("YYYY-MM-DD")}
          </span>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden flex flex-col min-h-0">
        <p className="text-sm text-muted-foreground line-clamp-3">{summary}</p>
      </CardContent>
      <CardFooter className="w-full justify-between items-end shrink-0">
        <CategoryTagList categories={post.rssCategories} />
        <Link
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-primary transition-all duration-300 shrink-0"
        >
          <ExternalLink className="w-4 h-4 ml-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
