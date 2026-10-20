import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "설정",
  description: "대시보드 설정 페이지",
};

// 설정 섹션 컴포넌트
function SettingSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
      <Separator className="mt-6" />
    </div>
  );
}

// 설정 페이지
export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold">설정</h1>
        <p className="text-muted-foreground mt-1">
          계정 및 애플리케이션 설정을 관리하세요.
        </p>
      </div>

      {/* 설정 카드 */}
      <Card className="p-6 space-y-6">
        {/* 프로필 설정 */}
        <SettingSection
          title="프로필 설정"
          description="계정 정보를 업데이트하세요"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                type="text"
                placeholder="사용자명"
                className="mt-2"
              />
            </div>
            <Button>프로필 저장</Button>
          </div>
        </SettingSection>

        {/* 알림 설정 */}
        <SettingSection
          title="알림 설정"
          description="알림 수신 방식을 선택하세요"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox id="email-notify" defaultChecked />
              <Label htmlFor="email-notify" className="font-normal">
                이메일 알림 수신
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="push-notify" defaultChecked />
              <Label htmlFor="push-notify" className="font-normal">
                푸시 알림 수신
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="sms-notify" />
              <Label htmlFor="sms-notify" className="font-normal">
                SMS 알림 수신
              </Label>
            </div>
            <Button className="mt-2">알림 저장</Button>
          </div>
        </SettingSection>

        {/* 보안 설정 */}
        <SettingSection
          title="보안 설정"
          description="계정 보안을 강화하세요"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="password">새 비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="password-confirm">비밀번호 확인</Label>
              <Input
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                className="mt-2"
              />
            </div>
            <Button>비밀번호 변경</Button>
          </div>
        </SettingSection>

        {/* 위험 영역 */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-red-600">위험 영역</h2>
            <p className="text-sm text-muted-foreground">
              이 작업은 되돌릴 수 없습니다
            </p>
          </div>
          <Button variant="destructive">계정 삭제</Button>
        </div>
      </Card>
    </div>
  );
}
