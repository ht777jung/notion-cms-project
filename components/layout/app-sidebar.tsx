"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navConfig } from "@/config/site";
import { Logo } from "@/components/shared/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// 대시보드 사이드바
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-2">
          {navConfig.sidebarNav.map((item) => (
            <Link
              key={item.href}
              href={item.href ?? "#"}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/60 hover:bg-muted hover:text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">사용자</p>
            <p className="text-xs text-muted-foreground truncate">user@example.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
