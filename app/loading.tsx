import { Container } from "@/components/shared/container";
import { Skeleton } from "@/components/ui/skeleton";

// 글로벌 로딩 화면 (Suspense fallback)
export default function Loading() {
  return (
    <div className="min-h-screen py-12">
      <Container>
        <div className="space-y-8">
          {/* 헤더 스켈레톤 */}
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
          </div>

          {/* 카드 그리드 스켈레톤 */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-48" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
