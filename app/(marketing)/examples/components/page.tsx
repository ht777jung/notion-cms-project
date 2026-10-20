import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// shadcn/ui 컴포넌트 예제 페이지
export default function ComponentsPage() {
  const components = [
    {
      name: 'Button',
      description: '다양한 스타일의 버튼 컴포넌트',
      usage: 'import { Button } from "@/components/ui/button"',
    },
    {
      name: 'Card',
      description: '콘텐츠를 감싸는 카드 컴포넌트',
      usage: 'import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"',
    },
    {
      name: 'Badge',
      description: '라벨 및 상태 표시 뱃지 컴포넌트',
      usage: 'import { Badge } from "@/components/ui/badge"',
    },
    {
      name: 'Input',
      description: '텍스트 입력 필드 컴포넌트',
      usage: 'import { Input } from "@/components/ui/input"',
    },
    {
      name: 'Label',
      description: '입력 필드 라벨 컴포넌트',
      usage: 'import { Label } from "@/components/ui/label"',
    },
    {
      name: 'Checkbox',
      description: '체크박스 선택 컴포넌트',
      usage: 'import { Checkbox } from "@/components/ui/checkbox"',
    },
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              shadcn/ui 컴포넌트
            </PageHeaderHeading>
            <PageHeaderDescription>
              shadcn/ui는 Radix UI와 Tailwind CSS로 구성된 재사용 가능한 컴포넌트 라이브러리입니다.
              모든 컴포넌트는 프로젝트에 복사되어 자유롭게 커스터마이징할 수 있습니다.
            </PageHeaderDescription>
          </PageHeader>

          {/* 컴포넌트 그리드 */}
          <div className="grid gap-6 md:grid-cols-2">
            {components.map((component) => (
              <Card key={component.name}>
                <CardHeader>
                  <CardTitle>{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium">설치 및 사용:</p>
                      <code className="block rounded bg-muted p-3 text-sm text-muted-foreground">
                        {component.usage}
                      </code>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">UI</Badge>
                      <Badge variant="secondary">shadcn</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 정보 섹션 */}
          <div className="mt-12 rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-bold">특징</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• 모든 컴포넌트는 TypeScript로 작성되어 타입 안정성을 제공합니다.</li>
              <li>• Tailwind CSS와 완벽하게 통합되어 스타일 커스터마이징이 쉽습니다.</li>
              <li>• 라이트/다크 테마를 자동으로 지원합니다.</li>
              <li>• 접근성(a11y) 표준을 준수합니다.</li>
              <li>• 모바일 반응형 디자인이 기본으로 적용됩니다.</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
