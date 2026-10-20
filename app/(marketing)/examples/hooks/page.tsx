'use client';

import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCounter, useLocalStorage } from 'usehooks-ts';
import { useState } from 'react';

// usehooks-ts 예제 페이지
export default function HooksPage() {
  // useCounter 훅 사용
  const { count, increment, decrement, reset } = useCounter(0);

  // useLocalStorage 훅 사용
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // useState 훅 (로컬 상태)
  const [isOn, setIsOn] = useState(false);

  const hookExamples = [
    {
      name: 'useCounter',
      description: '증가/감소 기능이 있는 숫자 카운터',
      usage: 'const { count, increment, decrement, reset } = useCounter(0)',
    },
    {
      name: 'useLocalStorage',
      description: 'localStorage에 상태를 저장하는 훅',
      usage: 'const [value, setValue] = useLocalStorage("key", defaultValue)',
    },
    {
      name: 'useWindowSize',
      description: '브라우저 창의 크기를 추적하는 훅',
      usage: 'const { width, height } = useWindowSize()',
    },
    {
      name: 'useMediaQuery',
      description: '미디어 쿼리 상태를 감지하는 훅',
      usage: 'const isSmall = useMediaQuery("(max-width: 768px)")',
    },
  ];

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              usehooks-ts 커스텀 훅
            </PageHeaderHeading>
            <PageHeaderDescription>
              usehooks-ts 라이브러리의 유용한 커스텀 훅들을 실제로 사용해보세요.
            </PageHeaderDescription>
          </PageHeader>

          <div className="space-y-8">
            {/* useCounter 예제 */}
            <Card>
              <CardHeader>
                <CardTitle>useCounter - 카운터 관리</CardTitle>
                <CardDescription>
                  증가, 감소, 리셋 기능이 있는 카운터 훅
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-6 rounded-lg bg-muted p-8">
                    <Button
                      variant="outline"
                      onClick={decrement}
                      className="text-lg"
                    >
                      −
                    </Button>
                    <div className="text-5xl font-bold tabular-nums">
                      {count}
                    </div>
                    <Button
                      variant="outline"
                      onClick={increment}
                      className="text-lg"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="secondary"
                    onClick={reset}
                    className="w-full"
                  >
                    리셋
                  </Button>
                  <div className="rounded bg-muted p-3 font-mono text-sm">
                    <code>{`const { count, increment, decrement, reset } = useCounter(0);`}</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* useLocalStorage 예제 */}
            <Card>
              <CardHeader>
                <CardTitle>useLocalStorage - 로컬 저장소</CardTitle>
                <CardDescription>
                  localStorage에 상태를 자동으로 저장하는 훅
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      onClick={() => setTheme('light')}
                    >
                      라이트
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      onClick={() => setTheme('dark')}
                    >
                      다크
                    </Button>
                    <Button
                      variant={theme === 'auto' ? 'default' : 'outline'}
                      onClick={() => setTheme('auto')}
                    >
                      자동
                    </Button>
                  </div>
                  <div className="rounded-lg bg-muted p-6 text-center">
                    <p className="text-sm text-muted-foreground">현재 테마:</p>
                    <p className="text-2xl font-bold capitalize">{theme}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      ※ localStorage에 자동 저장됩니다
                    </p>
                  </div>
                  <div className="rounded bg-muted p-3 font-mono text-sm">
                    <code>{`const [theme, setTheme] = useLocalStorage('theme', 'light');`}</code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 추가 훅 목록 */}
            <Card>
              <CardHeader>
                <CardTitle>자주 사용되는 usehooks-ts 훅</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {hookExamples.map((example) => (
                    <div key={example.name} className="space-y-3 rounded border p-4">
                      <div>
                        <p className="font-medium">{example.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {example.description}
                        </p>
                      </div>
                      <code className="block rounded bg-muted p-2 text-xs">
                        {example.usage}
                      </code>
                      <Badge variant="secondary">훅</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 정보 섹션 */}
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-xl font-bold">usehooks-ts란?</h2>
              <p className="mb-4 text-muted-foreground">
                usehooks-ts는 React 개발을 더 쉽게 만드는 필수 커스텀 훅들을 모아놓은 라이브러리입니다.
                모든 훅은 TypeScript로 작성되었으며 완벽한 타입 지원을 제공합니다.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 100% TypeScript</li>
                <li>• SSR 지원</li>
                <li>• 번들 크기 최적화</li>
                <li>• 활발한 커뮤니티 지원</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
