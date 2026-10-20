import { AppSidebar } from "@/components/layout/app-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SidebarProvider } from "@/components/ui/sidebar";

// 대시보드 레이아웃 (사이드바 + 콘텐츠)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader
          title="대시보드"
          breadcrumbs={[{ label: "대시보드", href: "/dashboard" }]}
        />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
