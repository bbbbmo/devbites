import IntroSection from "@/src/widgets/IntroSection";

export default function LoginPage() {
  return (
    <main className="flex h-screen">
      <IntroSection>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-primary-foreground text-balance">
            다시 오신 것을 환영합니다
          </h1>
          <p className="text-primary-foreground/80 text-lg text-pretty">
            로그인하고 최신 IT 기술 트렌드를 확인하세요.
            <br />
            구독 중인 뉴스레터 설정도 관리할 수 있습니다.
          </p>
        </div>
      </IntroSection>

      <div className="flex-1 flex flex-col"></div>
    </main>
  );
}
