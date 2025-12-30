"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Post from "./Post";
import { useQuery } from "@tanstack/react-query";

export type Blog = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  blog: Blog;
  title: string;
  shortSummary: string;
  detailedSummary: string;
  sourceUrl: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export default function HomeMain() {
  const tags = ["FE", "BE", "AI", "DevOps", "ETC"];

  const { data: posts } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => {
      return fetch("http://localhost:3000/post").then((res) => res.json());
    },
  });

  console.log(posts);

  return (
    <main className="flex-1 w-full p-20 flex flex-col gap-20">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">
          최신 IT 기술 블로그를
          <br />
          한곳에서 읽어보세요
        </h1>
        <p className="text-lg text-muted-foreground text-center">
          카카오, 네이버, 우아한형제들 등 주요 IT 기업의 기술 블로그 요약글을
          <br />
          매주 월요일 아침 9시에 메일로 전달해드립니다
        </p>
      </section>

      <div className="flex flex-col gap-10">
        <section className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="제목, 내용, 회사명으로 검색..."
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            {tags.map((tag) => (
              <Button key={tag} size="lg">
                {tag}
              </Button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <span>
            총 <span className="font-bold">10</span>개의 글
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts?.map((post: Post, index: number) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
