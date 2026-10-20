import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// 성능 최적화 및 SEO 예제 페이지
export default function OptimizationPage() {
  const optimizations = [
    {
      category: '번들 최적화',
      items: [
        {
          name: '코드 스플리팅',
          description: '페이지 라우트별로 필요한 코드만 로드',
        },
        {
          name: '동적 import',
          description: '필요한 시점에 모듈을 동적으로 로드',
        },
        {
          name: '트리 쉐이킹',
          description: '사용하지 않는 코드를 빌드에서 제거',
        },
      ],
    },
    {
      category: '이미지 최적화',
      items: [
        {
          name: 'Next.js Image',
          description: '자동 포맷 변환 및 반응형 이미지 제공',
        },
        {
          name: '레이지 로딩',
          description: '화면에 보이는 이미지만 로드',
        },
        {
          name: 'WebP 포맷',
          description: '작은 파일 크기로 더 빠른 로딩',
        },
      ],
    },
    {
      category: '성능 메트릭',
      items: [
        {
          name: 'LCP (Largest Contentful Paint)',
          description: '가장 큰 콘텐츠 요소의 로드 시간',
        },
        {
          name: 'FID (First Input Delay)',
          description: '첫 사용자 입력까지의 반응 시간',
        },
        {
          name: 'CLS (Cumulative Layout Shift)',
          description: '로드 중 레이아웃 변화량',
        },
      ],
    },
    {
      category: 'SEO 최적화',
      items: [
        {
          name: 'Metadata API',
          description: 'Next.js에서 메타 태그 자동 생성',
        },
        {
          name: 'Open Graph',
          description: '소셜 미디어 공유 최적화',
        },
        {
          name: 'Sitemap & robots.txt',
          description: '검색 엔진 크롤링 가이드',
        },
      ],
    },
  ];

  const seoChecklist = [
    '페이지 제목 및 설명 설정',
    'Meta 태그 최적화',
    'Open Graph 태그 추가',
    'Structured Data (Schema) 추가',
    'Mobile 반응형 디자인',
    'Fast Page Load (Core Web Vitals)',
    '깨끗한 URL 구조',
    'XML Sitemap 생성',
    'robots.txt 설정',
    'Canonical URL 지정',
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              성능 최적화 & SEO
            </PageHeaderHeading>
            <PageHeaderDescription>
              프로덕션 환경에서 필수적인 성능 최적화와 SEO 전략을 알아봅시다.
            </PageHeaderDescription>
          </PageHeader>

          {/* 최적화 전략 */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {optimizations.map((section) => (
              <Card key={section.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.name} className="border-l-2 border-primary pl-4">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Web Vitals */}
          <div className="mb-12 rounded-lg border bg-card p-6">
            <h2 className="mb-6 text-2xl font-bold">Core Web Vitals</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="mb-2 text-sm font-medium text-green-600">좋음</p>
                <div className="rounded bg-green-50 p-4 dark:bg-green-950">
                  <p className="font-mono text-sm">
                    LCP: &lt; 2.5s <br />
                    FID: &lt; 100ms <br />
                    CLS: &lt; 0.1
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-yellow-600">개선 필요</p>
                <div className="rounded bg-yellow-50 p-4 dark:bg-yellow-950">
                  <p className="font-mono text-sm">
                    LCP: 2.5s - 4s <br />
                    FID: 100ms - 300ms <br />
                    CLS: 0.1 - 0.25
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-red-600">나쁨</p>
                <div className="rounded bg-red-50 p-4 dark:bg-red-950">
                  <p className="font-mono text-sm">
                    LCP: &gt; 4s <br />
                    FID: &gt; 300ms <br />
                    CLS: &gt; 0.25
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO 체크리스트 */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="mb-6 text-2xl font-bold">SEO 체크리스트</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {seoChecklist.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 도구 및 리소스 */}
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">도구 및 리소스</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>성능 분석 도구</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-sm">
                      <span className="font-medium">Google PageSpeed Insights</span>
                      <p className="text-xs text-muted-foreground">Core Web Vitals 측정</p>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Lighthouse</span>
                      <p className="text-xs text-muted-foreground">성능, 접근성, SEO 감사</p>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Web Vitals 라이브러리</span>
                      <p className="text-xs text-muted-foreground">실사용자 데이터 수집</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SEO 도구</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-sm">
                      <span className="font-medium">Google Search Console</span>
                      <p className="text-xs text-muted-foreground">검색 성과 모니터링</p>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Google Analytics</span>
                      <p className="text-xs text-muted-foreground">사용자 행동 분석</p>
                    </li>
                    <li className="text-sm">
                      <span className="font-medium">Schema.org Validator</span>
                      <p className="text-xs text-muted-foreground">구조화된 데이터 검증</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 권장사항 */}
          <div className="mt-12 rounded-lg border bg-blue-50 p-6 dark:bg-blue-950">
            <h2 className="mb-4 text-xl font-bold">권장사항</h2>
            <ul className="space-y-2 text-sm">
              <li>
                ✓ Next.js의 자동 최적화 기능을 최대한 활용하세요
                (Image, Font, Script 등)
              </li>
              <li>
                ✓ 정기적으로 성능 메트릭을 모니터링하고 개선하세요
              </li>
              <li>
                ✓ SEO를 초기부터 고려하여 개발하세요
              </li>
              <li>
                ✓ 사용자 경험을 항상 우선으로 생각하세요
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
