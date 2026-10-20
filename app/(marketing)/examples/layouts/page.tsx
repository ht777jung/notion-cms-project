import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// 레이아웃 예제 페이지
export default function LayoutsPage() {
  const layouts = [
    {
      name: '마케팅 레이아웃',
      description: '헤더와 푸터가 있는 마케팅 페이지 레이아웃',
      features: ['헤더', '푸터', '반응형 네비게이션'],
      path: 'app/(marketing)/layout.tsx',
    },
    {
      name: '대시보드 레이아웃',
      description: '사이드바 네비게이션이 있는 대시보드 레이아웃',
      features: ['사이드바', '헤더', '중첩 라우팅'],
      path: 'app/(dashboard)/layout.tsx',
    },
    {
      name: '인증 레이아웃',
      description: '로그인, 회원가입 페이지를 위한 인증 레이아웃',
      features: ['중앙 정렬', '심플 디자인', '반응형'],
      path: 'app/(auth)/layout.tsx',
    },
    {
      name: 'Route Group',
      description: 'URL에 영향을 주지 않는 폴더로 레이아웃 구조화',
      features: ['폴더 그룹핑', '다중 레이아웃', 'URL 정리'],
      path: 'app/(group)/layout.tsx',
    },
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              레이아웃 패턴
            </PageHeaderHeading>
            <PageHeaderDescription>
              Next.js 15의 App Router를 활용한 다양한 레이아웃 구조와 패턴을 소개합니다.
            </PageHeaderDescription>
          </PageHeader>

          {/* 레이아웃 카드 */}
          <div className="grid gap-6 md:grid-cols-2">
            {layouts.map((layout) => (
              <Card key={layout.name}>
                <CardHeader>
                  <CardTitle>{layout.name}</CardTitle>
                  <CardDescription>{layout.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-medium">주요 기능:</p>
                    <div className="flex flex-wrap gap-2">
                      {layout.features.map((feature) => (
                        <Badge key={feature} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">파일 경로:</span> {layout.path}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 개념 설명 */}
          <div className="mt-12 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">Route Group (라우트 그룹)</h2>
              <p className="mb-4 text-muted-foreground">
                Route Group은 괄호 <code className="rounded bg-muted px-2 py-1 font-mono">( )</code>로 폴더명을 감싸서 만듭니다.
                URL에는 영향을 주지 않으면서 레이아웃을 구조화할 수 있습니다.
              </p>
              <div className="rounded bg-muted p-4 font-mono text-sm">
                <div>app/</div>
                <div className="ml-4">
                  (marketing)/
                  <div className="ml-4">layout.tsx</div>
                  <div className="ml-4">page.tsx (/ 경로)</div>
                </div>
                <div className="ml-4">
                  (dashboard)/
                  <div className="ml-4">layout.tsx</div>
                  <div className="ml-4">page.tsx (/dashboard 경로)</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">반응형 디자인</h2>
              <p className="mb-4 text-muted-foreground">
                Tailwind CSS의 반응형 클래스를 활용하여 다양한 화면 크기에 대응합니다.
              </p>
              <div className="space-y-2 rounded bg-muted p-4 font-mono text-sm">
                <div>• <span className="text-yellow-600">md:</span> 768px 이상</div>
                <div>• <span className="text-yellow-600">lg:</span> 1024px 이상</div>
                <div>• <span className="text-yellow-600">xl:</span> 1280px 이상</div>
                <div>• <span className="text-yellow-600">dark:</span> 다크 모드</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
