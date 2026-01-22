import { getPostDetail } from "@/src/entities/post/api/getPostDetail";
import { markdownComponents } from "@/src/shared/lib/react-markdown";
import { Button } from "@/src/shared/ui/button";
import Header from "@/src/shared/ui/header";
import { Separator } from "@/src/shared/ui/separator";
import { ArrowLeft, ExternalLink, Share2 } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = await params;
  const post = await getPostDetail(Number(postId));

  return (
    <>
      <Header>
        <Link className="flex items-center gap-3" href="/">
          <ArrowLeft className="w-4 h-4" />
          목록으로
        </Link>
      </Header>
      <main className="flex-1 w-full py-20 px-[10%] lg:px-[20%] xl:px-[30%] flex flex-col gap-10">
        <section className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="text-muted-foreground">
            <ReactMarkdown components={markdownComponents}>
              {post.shortSummary}
            </ReactMarkdown>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                원문 보기
              </Link>
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 />
              공유하기
            </Button>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-4">
          <h5 className="text-2xl font-bold">요약</h5>
          <div className="text-md max-w-none">
            <ReactMarkdown components={markdownComponents}>
              {post.detailedSummary}
            </ReactMarkdown>
          </div>
        </section>
      </main>
    </>
  );
}
