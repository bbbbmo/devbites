import BlogFilter from "@/src/entities/post/ui/BlogFilter";
import PostSearchResult from "@/src/entities/post/ui/PostSearchResult";
import { Input } from "@/src/shared/ui/input";
import HomeHeader from "@/src/widgets/home-header/ui/HomeHeader";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-20 flex flex-col gap-12 lg:gap-20">
        <section className="flex flex-col items-center justify-center  gap-4">
          <h1 className="text-4xl font-bold text-balance">
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
                className="pl-10 py-6"
              />
            </div>

            <BlogFilter />
          </section>

          <PostSearchResult />
        </div>
      </main>
    </div>
  );
}
