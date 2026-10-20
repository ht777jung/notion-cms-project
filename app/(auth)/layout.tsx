import { Container } from "@/components/shared/container";

// 인증 페이지 레이아웃 (중앙 정렬)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-sm">
        {children}
      </Container>
    </div>
  );
}
