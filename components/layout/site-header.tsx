import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Separator } from "@/components/ui/separator";

// 사이트 상단 헤더. 모바일 및 데스크톱 네비게이션 포함
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Logo />
          <MainNav />
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
      <Separator />
    </header>
  );
}
