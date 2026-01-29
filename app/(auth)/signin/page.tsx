import IntroSection from "@/src/widgets/IntroSection";
import { CheckCircle2 } from "lucide-react";

export default function SignInPage() {
  const features = [
    "매주 월요일 아침 9시 뉴스레터 발송",
    "카카오, 네이버, 토스 등 주요 기술 블로그 큐레이션",
    "관심 분야별 맞춤 콘텐츠 추천",
  ];
  return (
    <main className="flex h-screen">
      <IntroSection>
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4 text-balance">
            DevBites와 함께
            <br />
            최신 개발 트렌드를 만나보세요
          </h1>
          <p className="text-primary-foreground/80 text-lg text-pretty">
            회원가입 후 뉴스레터를 구독하고 매주 새로운 IT 기술 블로그 글을
            받아보세요.
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </IntroSection>

      <div className="flex-1 flex flex-col"></div>
    </main>
  );
}
