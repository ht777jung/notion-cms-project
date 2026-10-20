'use client';

import { Container } from '@/components/shared/container';
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

// 폼 데이터 타입 정의
interface FormData {
  name: string;
  email: string;
  message: string;
}

// React Hook Form + Zod 예제 페이지
export default function FormsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // 간단한 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('폼 제출:', formData);
      setSubmitted(true);

      // 2초 후 폼 초기화
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 2000);
    }
  };

  // 입력 필드 변경 처리
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 입력 시 해당 필드의 에러 제거
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <main className="flex-1">
      <Container>
        <div className="py-12 md:py-20">
          {/* 헤더 섹션 */}
          <PageHeader className="mb-12">
            <PageHeaderHeading>
              폼 & 유효성 검사
            </PageHeaderHeading>
            <PageHeaderDescription>
              React Hook Form과 Zod을 활용한 강력하고 효율적인 폼 구현 방법을 배워보세요.
            </PageHeaderDescription>
          </PageHeader>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 폼 예제 */}
            <Card>
              <CardHeader>
                <CardTitle>피드백 폼</CardTitle>
                <CardDescription>
                  실시간 유효성 검사가 적용된 폼입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 이름 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* 이메일 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일 *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* 메시지 필드 */}
                  <div className="space-y-2">
                    <Label htmlFor="message">메시지 *</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="피드백을 입력해주세요."
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-32 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
                        errors.message ? 'border-red-500' : 'border-input'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    {submitted ? '제출 완료!' : '제출하기'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 정보 섹션 */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>React Hook Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="mb-2 font-medium">특징:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 번들 크기가 작음 (~8.3kB)</li>
                      <li>• 성능 최적화 (최소 렌더링)</li>
                      <li>• 간단한 API</li>
                      <li>• TypeScript 완벽 지원</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge>폼</Badge>
                    <Badge>유효성</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Zod</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="mb-2 font-medium">특징:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• TypeScript 스키마 검증</li>
                      <li>• 타입 추론 지원</li>
                      <li>• 커스텀 검증 규칙</li>
                      <li>• 에러 메시지 자동화</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Badge>스키마</Badge>
                    <Badge>검증</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
