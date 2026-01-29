import { Button } from "@/src/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/src/shared/ui/field";
import { Input } from "@/src/shared/ui/input";
import IntroSection from "@/src/widgets/IntroSection";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { CheckCircle2, UserPlus } from "lucide-react";
import Link from "next/link";

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

      <div className="flex-1 flex items-center justify-center h-full">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-center">회원가입</h3>
                <p className="text-sm text-center text-muted-foreground">
                  계정을 만들고 뉴스레터를 구독하세요.
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-8 max-w-sm mx-auto">
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">이메일</FieldLabel>
                    <Input id="email" type="email" placeholder="이메일" />
                    <FieldDescription>이메일을 입력해주세요.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">비밀번호</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                    />
                    <FieldDescription>
                      비밀번호를 입력해주세요.
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Button type="button" className="w-full">
                회원가입
              </Button>
            </form>

            <Separator className="my-8" />

            <div className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground">
                이미 계정이 있으신가요?{" "}
                <Link
                  className="text-primary underline hover:opacity-80 transition-opacity"
                  href="/login"
                >
                  로그인
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
