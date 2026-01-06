"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Calendar, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { Post as PostType } from "./HomeMain";
import dayjs from "dayjs";
import CategoryTagList from "./CategoryTagList";
import Link from "next/link";

export default function Post({ post }: { post: PostType }) {
  const router = useRouter();

  const goToPostDetail = () => {
    router.push(`/${post.id}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-all duration-300"
      onClick={goToPostDetail}
    >
      <CardHeader>
        <div className="flex justify-between mb-3">
          <span className="text-sm ">{post.blog.name}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {dayjs(post.publishedAt).format("YYYY-MM-DD")}
          </span>
        </div>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground ">{post.shortSummary}</p>
      </CardContent>
      <CardFooter className="w-full justify-between items-end">
        <CategoryTagList categories={post.rssCategories} />
        <Link
          href={post.sourceUrl}
          target="_blank"
          className="hover:text-primary transition-all duration-300 shrink-0"
        >
          <ExternalLink className="w-4 h-4 ml-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
