"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";

// 모바일 네비게이션. md 미만에서만 표시
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 예제 페이지(/examples/* 포함)에서 활성 표시
  const isActive = (href: string) => {
    if (href === "/examples") {
      return pathname === href || pathname.startsWith("/examples/");
    }
    return pathname === href;
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">메뉴</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4">
          {navConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href ?? "#"}
              onClick={() => setOpen(false)}
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
      </SheetContent>
    </Sheet>
  );
}
