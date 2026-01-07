import { getPostDetail } from "@/src/entities/post/api/getPostDetail";
import { Button } from "@/src/shared/ui/button";
import Header from "@/src/shared/ui/header";
import { Separator } from "@/src/shared/ui/separator";
import { ArrowLeft, ExternalLink, Share2 } from "lucide-react";
import Link from "next/link";

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
          <p className="text-md text-muted-foreground">{post.shortSummary}</p>
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
            <Button variant="outline" className=" gap-2">
              <Share2 />
              공유하기
            </Button>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">개요</h2>
            <p className="text-md">
              Apollo Federation을 활용하여 여러 마이크로서비스의 GraphQL
              스키마를 효율적으로 통합한 사례를 소개합니다.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">문제 정의</h2>
            <p className="text-md">
              최근 많은 기업들이 이 기술을 도입하고 있지만, 실제로 적용하는
              과정에서 다양한 어려움을 겪게 됩니다. 우리 팀도 초기에는 여러
              시행착오를 겪었고, 이를 통해 얻은 인사이트를 공유하고자 합니다.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">해결 방법</h2>
            <p className="text-md">
              문제를 해결하기 위해 다음과 같은 접근 방법을 시도했습니다.
              <br />
              - 초기 로딩 시간을 50% 개선
              <br />
              - 트래픽 10배 증가에도 안정적인 서비스 제공
              <br />- 개발 생산성 30% 향상
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">결론</h2>
            <p className="text-md">
              실제 프로덕션 환경에서 측정한 결과를 공유합니다
              <br />
              - 초기 로딩 시간을 50% 개선
              <br />
              - 트래픽 10배 증가에도 안정적인 서비스 제공
              <br />- 개발 생산성 30% 향상
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
