// 사이트 전역 설정 및 상수
export const siteConfig = {
  name: "ModernStarter",
  description: "Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui로 구성된 모던 웹 스타터킷",
  url: "https://modernstarter.example.com",
  ogImage: "https://modernstarter.example.com/og.png",
  links: {
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
};

export const navConfig = {
  mainNav: [
    {
      title: "홈",
      href: "/",
    },
    {
      title: "예제",
      href: "/examples",
    },
    {
      title: "소개",
      href: "/about",
    },
  ] as NavItem[],
  sidebarNav: [
    {
      title: "대시보드",
      href: "/dashboard",
      icon: "activity",
    },
    {
      title: "설정",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ] as NavItem[],
};
