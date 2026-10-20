import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

// 404 Not Found 화면
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <Container>
        <div className="text-center space-y-6 max-w-md mx-auto">
          <div>
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl font-semibold mt-2">페이지를 찾을 수 없습니다</p>
          </div>
          <p className="text-muted-foreground">
            요청하신 페이지가 존재하지 않습니다.
            홈페이지로 돌아가거나 다시 시도해주세요.
          </p>
          <Link href="/">
            <Button size="lg">홈으로 돌아가기</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
