import BackButton from "../shared/ui/back-button";

type IntroSectionProps = {
  children: React.ReactNode;
};

export default function IntroSection({ children }: IntroSectionProps) {
  return (
    <section className="h-full hidden lg:flex lg:w-1/2 bg-linear-to-br from-primary via-primary/90 to-accent p-12 flex-col justify-between">
      <BackButton
        className="text-primary-foreground"
        href="/"
        text="홈으로 돌아가기"
      />
      {children}
      <p className="text-primary-foreground/60 text-sm">DevBites</p>
    </section>
  );
}
