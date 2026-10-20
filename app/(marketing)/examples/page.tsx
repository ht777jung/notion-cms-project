import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/container';
import Link from 'next/link';
import {
  Code2,
  FileText,
  LayoutGrid,
  Brackets,
  Database,
  Settings,
} from 'lucide-react';

interface ExampleItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ExamplesPage() {
  const examples: ExampleItem[] = [
    {
      id: 'components',
      icon: <Code2 className="h-6 w-6" />,
      title: '컴포넌트 서비스',
      description: 'shadcn/ui 컴포넌트 라이브러리 및 테마 설정의 코드 예제입니다.',
      tags: ['UI', '테마변경'],
      href: '/examples/components',
    },
    {
      id: 'forms',
      icon: <FileText className="h-6 w-6" />,
      title: '폼 예제',
      description: 'React Hook Form과 Zod을 활용한 입력 양식 구현 예제입니다.',
      tags: ['폼', '유효성'],
      href: '/examples/forms',
    },
    {
      id: 'layouts',
      icon: <LayoutGrid className="h-6 w-6" />,
      title: '레이아웃 예제',
      description: '다양한 레이아웃 패턴과 반응형 디자인 구현 방법입니다.',
      tags: ['레이아웃', '반응형'],
      href: '/examples/layouts',
    },
    {
      id: 'hooks',
      icon: <Brackets className="h-6 w-6" />,
      title: 'usehooks-ts 예제',
      description: 'usehooks-ts 라이브러리의 다양한 커스텀 훅 사용 예제입니다.',
      tags: ['훅', 'React'],
      href: '/examples/hooks',
    },
    {
      id: 'data-fetching',
      icon: <Database className="h-6 w-6" />,
      title: '데이터 페칭',
      description: 'API 호출, 캐싱, 상태 관리 등 데이터 페칭 패턴입니다.',
      tags: ['API', '데이터'],
      href: '/examples/data-fetching',
    },
    {
      id: 'optimization',
      icon: <Settings className="h-6 w-6" />,
      title: '설정 및 최적화',
      description: '성능 최적화, SEO 설정, PWA 구성 등 프로덕션 준비 가이드입니다.',
      tags: ['성능', 'SEO'],
      href: '/examples/optimization',
    },
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <div className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              예제 모음
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              실제 구현되는 예제들을 살펴 기술을 습득해보세요.
            </p>
          </div>

          {/* 카드 그리드 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((example) => (
              <Card key={example.id} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-primary/20">
                      {example.icon}
                    </div>
                  </div>
                  <CardTitle>{example.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <CardDescription className="mb-4">
                    {example.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Link href={example.href} className="w-full">
                    <Button className="w-full">
                      예제 보기
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
