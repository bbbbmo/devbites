import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Link,
  TrendingUp,
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
import { GetPostsResponse } from "../api/getPosts";
import { Badge } from "@/src/shared/ui/badge";

type TrendingPostSectionProps = {
  trendingPosts: GetPostsResponse[];
};

export default function TrendingPostSection({
  trendingPosts,
}: TrendingPostSectionProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % trendingPosts.length);
  }, [trendingPosts.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + trendingPosts.length) % trendingPosts.length
    );
  };

  const goToCurrentPostDetail = () => {
    router.push(`/post/${trendingPosts[currentSlide]?.id}`);
  };

  useEffect(() => {
    if (trendingPosts?.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [trendingPosts?.length, nextSlide]);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h5 className="text-xl font-bold text-balance">실시간 트렌드</h5>
      </div>
      <div className="w-full max-w-2xl">
        {trendingPosts.length > 0 && (
          <Card
            className="group hover:cursor-pointer overflow-hidden transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur h-70 flex flex-col"
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
                className="hover:text-primary transition-all duration-300 shrink-0"
              >
                <ExternalLink className="w-4 h-4 ml-3" />
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>

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
    </section>
  );
}
