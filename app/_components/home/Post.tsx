"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Tags } from "lucide-react";
import { useRouter } from "next/navigation";
import { Post as PostType } from "./HomeMain";
import dayjs from "dayjs";

export default function Post({ post }: { post: PostType }) {
  const router = useRouter();

  const goToPostDetail = () => {
    router.push(`/${post.id}`);
  };

  return (
    <Card onClick={goToPostDetail}>
      <CardHeader>
        <div className="flex justify-between mb-3">
          <span className="text-sm ">{post.blogId}</span>
          <span className="text-sm text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {dayjs(post.publishedAt).format("YYYY-MM-DD")}
          </span>
        </div>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{post.shortSummary}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <div>
            <Badge className="flex items-center gap-2" variant="secondary">
              <Tags className="w-4 h-4" />
              <span className="text-muted-foreground">FE</span>
            </Badge>
          </div>
          <ExternalLink className="w-4 h-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
