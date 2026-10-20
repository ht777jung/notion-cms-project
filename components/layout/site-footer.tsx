import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

// 사이트 하단 푸터
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-semibold">{siteConfig.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h4 className="font-medium">제품</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  보안
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">회사</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  문의
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">법률</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-muted-foreground">
                  개인정보보호정책
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. 모든 권리 보유.</p>
          <div className="flex gap-6">
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
