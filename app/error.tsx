"use client";

import { AlertCircle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Card } from "@/components/ui/card";

// 글로벌 에러 바운더리. Next.js 16 v16.3+에서는 retry를 사용 (reset 대신).
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <Container>
        <Card className="p-8 max-w-md mx-auto border-destructive/50 bg-destructive/5">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="size-6 text-destructive" />
            <h1 className="text-lg font-semibold">문제가 발생했습니다</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            요청을 처리하는 중에 예상치 못한 오류가 발생했습니다.
          </p>
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mt-4 p-3 bg-background rounded-md border border-border mb-4">
              <p className="text-xs font-mono text-destructive/80">
                {error.message}
              </p>
            </div>
          )}
          <Button onClick={() => retry()} className="w-full">
            <RotateCcw className="mr-2 size-4" />
            다시 시도
          </Button>
        </Card>
      </Container>
    </div>
  );
}
