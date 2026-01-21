import IntroSection from "@/src/entities/post/ui/IntroSection";
import PostSearch from "@/src/entities/post/ui/PostSearch";
import HomeHeader from "@/src/widgets/HomeHeader";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-20 flex flex-col gap-12 lg:gap-20">
        <IntroSection />
        <PostSearch />
      </main>
    </div>
  );
}
