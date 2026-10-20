import type { Metadata } from "next";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "대시보드",
  description: "대시보드 홈 페이지",
};

// 통계 카드 컴포넌트
function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string | number;
  change?: string;
}) {
  return (
    <Card className="p-6">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
      {change && (
        <p className="text-xs text-muted-foreground mt-2">{change}</p>
      )}
    </Card>
  );
}

// 대시보드 메인 페이지
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-1">
          프로덕션 레디 대시보드 레이아웃 예제입니다.
        </p>
      </div>

      {/* 통계 영역 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="총 사용자" value="1,234" change="지난주 +12%" />
        <StatCard label="활성 세션" value="342" change="온라인 중" />
        <StatCard label="총 수익" value="$45,231" change="지난월 +23%" />
        <StatCard label="전환율" value="3.2%" change="↑ 0.5%" />
      </div>

      {/* 최근 활동 */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">최근 활동</h2>
        <div className="space-y-4">
          {[
            { user: "사용자 1", action: "로그인", time: "5분 전" },
            { user: "사용자 2", action: "프로필 업데이트", time: "10분 전" },
            { user: "사용자 3", action: "결제 완료", time: "20분 전" },
            { user: "사용자 4", action: "설정 변경", time: "1시간 전" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between pb-4 border-b last:border-0"
            >
              <div>
                <p className="font-medium">{item.user}</p>
                <p className="text-sm text-muted-foreground">{item.action}</p>
              </div>
              <Badge variant="secondary">{item.time}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
