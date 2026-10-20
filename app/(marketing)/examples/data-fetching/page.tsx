import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// 데이터 페칭 예제 페이지
export default function DataFetchingPage() {
  const fetchPatterns = [
    {
      name: '서버 컴포넌트 fetch',
      description: 'Next.js 서버 컴포넌트에서 직접 데이터 페칭',
      pros: [
        '보안: API 키가 클라이언트에 노출되지 않음',
        '성능: 서버에서 직렬화된 데이터 전송',
        '캐싱: Next.js 자동 캐시 지원',
      ],
      cons: ['비동기 처리만 가능', 'useEffect 사용 불가'],
      code: `export default async function Page() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
  });
  const data = await res.json();
  return <div>{data}</div>;
}`,
    },
    {
      name: 'Route Handler',
      description: '백엔드 API 엔드포인트 생성',
      pros: [
        '자체 API 구현 가능',
        '미들웨어 지원',
        '요청/응답 완전 제어',
      ],
      cons: ['추가 파일 필요', '에러 처리 필요'],
      code: `// app/api/data/route.ts
export async function GET(request: Request) {
  const data = await fetchData();
  return Response.json(data);
}`,
    },
    {
      name: '클라이언트 fetch',
      description: '클라이언트 컴포넌트에서 useEffect와 함께 데이터 페칭',
      pros: [
        '사용자 상호작용에 따른 페칭',
        '실시간 데이터 업데이트',
        '로딩 상태 표시 가능',
      ],
      cons: ['보안: API 키 노출 위험', '성능: 클라이언트에서 데이터 처리'],
      code: `'use client';
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return <div>{data}</div>;
}`,
    },
    {
      name: 'Server Action',
      description: '서버 함수를 클라이언트에서 직접 호출',
      pros: [
        '타입 안전성',
        '자동 직렬화',
        '폼 제출과 통합',
      ],
      cons: ['상대적으로 새로운 패턴', '학습 곡선'],
      code: `'use server';
export async function fetchData() {
  const data = await db.query();
  return data;
}

// 클라이언트에서
const data = await fetchData();`,
    },
  ];

  const strategies = [
    {
      name: '캐싱 전략',
      items: [
        'ISR (Incremental Static Regeneration)',
        'Dynamic Rendering',
        'On-Demand Revalidation',
      ],
    },
    {
      name: '에러 처리',
      items: [
        'try-catch 블록',
        'error.tsx 경계',
        '사용자 피드백 표시',
      ],
    },
    {
      name: '로딩 상태',
      items: [
        'Suspense 바운더리',
        'loading.tsx 파일',
        '스켈레톤 UI',
      ],
    },
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              데이터 페칭
            </PageHeaderHeading>
            <PageHeaderDescription>
              Next.js 15에서 데이터를 효율적으로 로드하고 관리하는 방법들을 알아봅시다.
            </PageHeaderDescription>
          </PageHeader>

          {/* 페칭 패턴 */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">데이터 페칭 패턴</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {fetchPatterns.map((pattern) => (
                <Card key={pattern.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{pattern.name}</CardTitle>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-green-600">장점:</p>
                      <ul className="space-y-1">
                        {pattern.pros.map((pro) => (
                          <li key={pro} className="text-xs text-muted-foreground">
                            • {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-red-600">단점:</p>
                      <ul className="space-y-1">
                        {pattern.cons.map((con) => (
                          <li key={con} className="text-xs text-muted-foreground">
                            • {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded bg-muted p-3 font-mono text-xs">
                      <code>{pattern.code}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 전략 */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">관련 전략</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {strategies.map((strategy) => (
                <Card key={strategy.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 모범 사례 */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-4 text-xl font-bold">모범 사례</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Badge className="mt-1">1</Badge>
                <div>
                  <p className="font-medium">민감한 정보는 서버에서만 처리</p>
                  <p className="text-sm text-muted-foreground">
                    API 키나 토큰은 클라이언트에 노출되지 않도록 주의
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1">2</Badge>
                <div>
                  <p className="font-medium">적절한 캐싱 전략 선택</p>
                  <p className="text-sm text-muted-foreground">
                    정적 데이터는 캐시하고, 실시간 데이터는 동적 렌더링
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1">3</Badge>
                <div>
                  <p className="font-medium">에러 처리와 로딩 상태 구현</p>
                  <p className="text-sm text-muted-foreground">
                    사용자에게 명확한 피드백을 제공하는 것이 중요
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Badge className="mt-1">4</Badge>
                <div>
                  <p className="font-medium">성능 모니터링</p>
                  <p className="text-sm text-muted-foreground">
                    페이지 로드 시간과 API 응답 시간 추적
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
