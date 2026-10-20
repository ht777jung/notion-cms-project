import { ArrowRight, Code, Zap, Layers, Package } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageHeaderActions,
} from "@/components/shared/page-header";

// 기능 카드 컴포넌트
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6">
      <Icon className="size-8 text-primary mb-3" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

// 랜딩 페이지
export default function HomePage() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <Container>
          <PageHeader>
            <PageHeaderHeading>
              모던 웹 스타터킷
            </PageHeaderHeading>
            <PageHeaderDescription>
              Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui로 구성된
              프로덕션 레디 스타터킷입니다. 어떤 웹 프로젝트도 빠르게 시작할 수 있습니다.
            </PageHeaderDescription>
            <PageHeaderActions>
              <Link href="/about">
                <Button size="lg">
                  시작하기
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Code className="mr-2 size-4" />
                  GitHub
                </Button>
              </a>
            </PageHeaderActions>
          </PageHeader>
        </Container>
      </section>

      {/* 기능 섹션 */}
      <section className="space-y-8 py-8 md:py-12 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              완전히 준비된 기반
            </h2>
            <p className="mt-4 text-muted-foreground">
              필요한 모든 것이 이미 구성되어 있습니다.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Zap}
              title="초고속"
              description="Next.js 16과 React 19의 최신 성능 최적화"
            />
            <FeatureCard
              icon={Code}
              title="TypeScript"
              description="완전한 타입 안전성으로 안정적인 개발"
            />
            <FeatureCard
              icon={Layers}
              title="UI 컴포넌트"
              description="shadcn/ui와 Tailwind CSS로 아름다운 디자인"
            />
            <FeatureCard
              icon={Package}
              title="오픈소스"
              description="모든 의존성은 검증된 오픈소스 라이브러리"
            />
          </div>
        </Container>
      </section>

      {/* CTA 섹션 */}
      <section className="space-y-6 py-8 md:py-12 lg:py-20">
        <Container>
          <div className="rounded-lg border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold">지금 시작하세요</h2>
            <p className="mt-2 text-muted-foreground">
              프로덕션 레디 스타터킷으로 프로젝트를 시작하세요.
            </p>
            <Link href="/about">
              <Button className="mt-6" size="lg">
                자세히 알아보기
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
