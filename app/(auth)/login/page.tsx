"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// 로그인 폼 검증 스키마
const loginSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해주세요"),
  password: z.string().min(6, "비밀번호는 최소 6글자 이상이어야 합니다"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

// 로그인 페이지 (UI 예제, 실제 인증 로직은 없음)
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setIsLoading(true);
    try {
      // 실제 인증 로직 추가 필요
      console.log("로그인 시도:", data);

      // UI 예제용 토스트
      toast.success("로그인 성공! (데모 메시지)");

      // 실제 환경에서는 여기서 인증 요청을 보냅니다
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.info("실제 백엔드 연결이 필요합니다");
    } catch (error) {
      toast.error("로그인 실패했습니다");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="p-8">
      <div className="space-y-2 mb-6">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="text-sm text-muted-foreground">
          계정으로 로그인하세요
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* 이메일 필드 */}
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            disabled={isLoading}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* 비밀번호 필드 */}
        <div className="space-y-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            disabled={isLoading}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-destructive">{errors.password.message}</p>
          )}
        </div>

        {/* 기억하기 체크박스 */}
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" {...register("rememberMe")} />
          <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
            로그인 상태 유지
          </Label>
        </div>

        {/* 제출 버튼 */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
          {isLoading ? "로그인 중..." : "로그인"}
        </Button>
      </form>

      {/* 하단 링크 */}
      <div className="mt-6 space-y-3 text-center text-sm">
        <p>
          계정이 없으신가요?{" "}
          <a href="#" className="font-medium text-primary hover:underline">
            회원가입
          </a>
        </p>
        <p>
          <a href="#" className="text-muted-foreground hover:text-foreground hover:underline">
            비밀번호 찾기
          </a>
        </p>
      </div>
    </Card>
  );
}
