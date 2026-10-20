"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navConfig } from "@/config/site";

// 데스크톱 메인 네비게이션. md 미만에서는 숨김
export function MainNav() {
  const pathname = usePathname();

  // 예제 페이지(/examples/* 포함)에서 활성 표시
  const isActive = (href: string) => {
    if (href === "/examples") {
      return pathname === href || pathname.startsWith("/examples/");
    }
    return pathname === href;
  };

  return (
    <nav className="hidden gap-6 md:flex">
      {navConfig.mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href ?? "#"}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            isActive(item.href ?? "")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
