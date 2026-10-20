import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "소개",
  description: "ModernStarter 스타터킷에 대해 알아보세요.",
};

// 소개 페이지
export default function AboutPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <Container>
          <PageHeader>
            <PageHeaderHeading>소개</PageHeaderHeading>
            <PageHeaderDescription>
              ModernStarter는 최신 기술 스택으로 구성된 프로덕션 레디 웹 스타터킷입니다.
            </PageHeaderDescription>
          </PageHeader>
        </Container>
      </section>

      <section className="space-y-12 py-8 md:py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">왜 ModernStarter인가?</h2>
              <p className="text-muted-foreground mb-4">
                웹 개발을 시작할 때 항상 같은 것들을 반복해야 합니다.
                테마 제공자, 네비게이션, 레이아웃, 기본 컴포넌트...
              </p>
              <p className="text-muted-foreground mb-4">
                ModernStarter는 이 모든 것을 미리 설정하고 최적화하여
                실제 개발에 집중할 수 있게 도와줍니다.
              </p>
              <p className="text-muted-foreground">
                검증된 오픈소스 라이브러리만 사용하고,
                프로덕션 레디 구조로 만들어져 있습니다.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">기술 스택</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Next.js 16 (App Router)</li>
                  <li>• React 19</li>
                  <li>• TypeScript 5</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• shadcn/ui (base-nova)</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">포함된 라이브러리</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• next-themes (다크모드)</li>
                  <li>• sonner (토스트)</li>
                  <li>• react-hook-form (폼)</li>
                  <li>• zod (검증)</li>
                  <li>• lucide-react (아이콘)</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t bg-muted/30 py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">준비 완료</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              모든 기초가 준비되어 있으므로,
              바로 비즈니스 로직과 고유한 기능 개발에 집중할 수 있습니다.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
