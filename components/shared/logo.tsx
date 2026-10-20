import Link from "next/link";

import { siteConfig } from "@/config/site";

// 사이트 로고/브랜드명
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
        <span className="text-sm font-bold text-primary-foreground">M</span>
      </div>
      <span className="hidden font-semibold sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  );
}
