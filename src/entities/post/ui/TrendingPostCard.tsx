"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Button } from "@/src/shared/ui/button";
import { useCallback, useEffect, useState } from "react";
import { getPosts, GetPostsResponse } from "../api/getPosts";
import { Badge } from "@/src/shared/ui/badge";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { CardSkeleton } from "@/src/shared/ui/card-skeleton";

export default function TrendingPostCard() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const { data, isLoading } = useQuery<GetPostsResponse>({
    queryKey: ["trending-posts"], // TODO: 추후 백엔드에서 트렌드 게시물 조회 기능 추가 시 수정
    queryFn: async () => await getPosts({ size: 5, sort: "latest" }),
  });

  const trendingPosts = data?.items || [];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % trendingPosts.length);
  }, [trendingPosts.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + trendingPosts.length) % trendingPosts.length
    );
  };

  useEffect(() => {
    if (trendingPosts.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [trendingPosts?.length, nextSlide]);

  const goToCurrentPostDetail = () => {
    router.push(`/post/${trendingPosts[currentSlide].id}`);
  };

  return (
    <>
      {isLoading || trendingPosts.length === 0 ? (
        <CardSkeleton className="h-72" />
      ) : (
        <Card
          className="group hover:cursor-pointer overflow-hidden transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur h-72 flex flex-col"
          onClick={goToCurrentPostDetail}
        >
          <CardHeader className="shrink-0">
            <Badge className="bg-primary/90 mb-3">
              {trendingPosts[currentSlide].blog.name}
            </Badge>
            <CardTitle className="group-hover:text-primary text-xl transition-colors line-clamp-2">
              {trendingPosts[currentSlide].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden flex flex-col min-h-0">
            <p className="text-base text-muted-foreground line-clamp-3">
              {trendingPosts[currentSlide].shortSummary}
            </p>
          </CardContent>
          <CardFooter className="w-full justify-between items-end shrink-0">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {dayjs(trendingPosts[currentSlide].publishedAt).format(
                "YYYY-MM-DD"
              )}
            </span>
            <Link
              href={trendingPosts[currentSlide].sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-primary transition-all duration-300 shrink-0 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5 ml-3" />
            </Link>
          </CardFooter>
        </Card>
      )}

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-8 w-8 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-8 w-8 bg-transparent"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-1.5">
          {trendingPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
