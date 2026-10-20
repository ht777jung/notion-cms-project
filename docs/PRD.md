# PRD: 개인 개발 블로그 (Notion CMS)

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | 개인 개발 블로그 |
| 문서 버전 | v0.1 (초안) |
| 작성일 | 2026-10-20 |
| 상태 | MVP 기획 |

---

## 1. 프로젝트 개요

### 1.1 목적
Notion을 CMS로 활용하는 개인 기술 블로그를 구축한다. 별도의 관리자 페이지나 배포 작업 없이 Notion에서 글을 작성하고 발행 상태로 바꾸면 블로그에 자동 반영되는 것이 핵심이다.

### 1.2 CMS로 Notion을 선택한 이유
- 익숙한 에디터(블록 기반, 마크다운 단축키, 코드 블록)로 글을 작성할 수 있다.
- 별도 CMS 서버나 DB를 운영할 필요가 없다.
- 데이터베이스 속성(카테고리, 태그, 상태)으로 콘텐츠를 구조화할 수 있다.
- Notion에서 글 작성 → 블로그 자동 반영(ISR 재검증)으로 발행 워크플로우가 단순하다.

### 1.3 목표 / 비목표

| 구분 | 내용 |
| --- | --- |
| 목표 | Notion 글을 안정적으로 렌더링하는 빠르고 반응형인 블로그 |
| 목표 | 카테고리 필터링과 검색으로 글 탐색 지원 |
| 목표 | Vercel 배포 및 자동 갱신 |
| 비목표 (MVP) | 댓글, 회원가입/로그인, 조회수 통계, 다국어 |

### 1.4 대상 사용자
- **독자**: 기술 글을 찾아 읽는 개발자 (모바일/데스크톱 모두)
- **작성자(운영자)**: Notion에서만 글을 관리하는 블로그 소유자 1인

---

## 2. 주요 기능

| # | 기능 | 설명 | 우선순위 |
| --- | --- | --- | --- |
| F1 | 글 목록 조회 | Notion 데이터베이스에서 발행된 글 목록을 가져와 최신순으로 표시 | P0 (MVP) |
| F2 | 글 상세 페이지 | Notion 페이지 블록을 렌더링해 개별 글 표시 | P0 (MVP) |
| F3 | 카테고리 필터링 | 카테고리별 글 목록 페이지 제공 | P1 |
| F4 | 검색 | 제목(및 태그) 기반 글 검색 | P1 |
| F5 | 반응형 디자인 | 모바일/태블릿/데스크톱 대응 | P0 (MVP) |

### 2.1 F1. 글 목록
- `Status = 발행됨`인 글만 조회한다.
- `Published`(발행일) 내림차순으로 정렬한다.
- 카드에 제목, 카테고리, 태그, 발행일을 표시한다.
- 글이 많을 경우 페이지네이션(Notion `start_cursor` 기반) 또는 "더 보기"를 지원한다.

### 2.2 F2. 글 상세
- 경로: `/posts/[slug]` (slug는 페이지 ID 또는 제목 기반 값, 아래 오픈 이슈 참조)
- 제목, 카테고리, 태그, 발행일 메타 정보와 본문을 표시한다.
- 지원 블록: 문단, 제목(h1~h3), 목록, 체크박스, 인용, 구분선, 코드(구문 강조), 이미지, 콜아웃, 토글, 링크.
- 존재하지 않거나 미발행 글은 404 처리한다.
- 페이지별 SEO 메타데이터(title, description, Open Graph)를 생성한다.

### 2.3 F3. 카테고리 필터링
- 경로: `/categories/[category]`
- 해당 카테고리의 발행된 글 목록을 표시한다.
- 홈과 카테고리 페이지에서 카테고리 목록(탭/칩)으로 이동할 수 있다.

### 2.4 F4. 검색
- 검색 입력창(헤더 또는 목록 상단)에서 키워드를 입력한다.
- Notion `title contains` 필터 또는 서버에서 가져온 목록을 기반으로 필터링한다.
- 검색어는 URL 쿼리(`?q=`)로 유지해 공유/새로고침이 가능하다.
- 입력 디바운스(300ms) 적용, 결과 없음 상태를 안내한다.

### 2.5 F5. 반응형 디자인
- 모바일 우선(Mobile First) 레이아웃.
- 브레이크포인트: Tailwind 기본(`sm` 640, `md` 768, `lg` 1024).
- 목록 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열.
- 본문 가독성을 위해 최대 너비를 제한한다(약 `max-w-3xl`).
- 다크 모드는 후속 단계에서 고려한다.

---

## 3. 기술 스택

| 영역 | 기술 |
| --- | --- |
| Frontend | Next.js 15 (App Router), React 19, TypeScript |
| CMS | Notion API (`@notionhq/client`) |
| 스타일링 | Tailwind CSS, shadcn/ui |
| 아이콘 | Lucide React |
| 배포 | Vercel |

### 3.1 보조 라이브러리 (제안)
- 블록 렌더링: 자체 블록 렌더러 또는 `notion-to-md` + 마크다운 렌더러 (구현 단계에서 선택)
- 코드 하이라이트: `shiki` 또는 `rehype-highlight`
- 검증: Zod (환경 변수 및 Notion 응답 매핑 검증)

### 3.2 코드 규칙
- `any` 타입 사용 금지, 에러 핸들링 필수.
- 컴포넌트는 분리/재사용하고 API 응답 형식은 일관되게 유지한다.
- 들여쓰기 2칸, 변수/함수명은 영어 camelCase, 컴포넌트는 PascalCase.

---

## 4. Notion 데이터베이스 구조

| 속성명 | 표시명 | 타입 | 설명 |
| --- | --- | --- | --- |
| Title | 제목 | `title` | 글 제목 |
| Category | 카테고리 | `select` | 단일 카테고리 |
| Tags | 태그 | `multi_select` | 다중 태그 |
| Published | 발행일 | `date` | 정렬 및 표시 기준 |
| Status | 상태 | `select` | `초안` / `발행됨` |
| Content | 본문 | page content | 페이지 본문 블록 (속성이 아닌 페이지 내용) |

### 4.1 도메인 모델 (TypeScript)

```ts
export type PostStatus = "초안" | "발행됨";

export interface PostSummary {
  id: string;
  title: string;
  category: string | null;
  tags: string[];
  publishedAt: string | null; // ISO 8601
  status: PostStatus;
}

export interface PostDetail extends PostSummary {
  blocks: NotionBlock[]; // 본문 블록
}
```

### 4.2 조회 조건
- 목록: `Status == "발행됨"`, `Published` 내림차순.
- 카테고리: 위 조건 + `Category == {category}`.
- 검색: 위 조건 + `Title contains {q}`.

---

## 5. 화면 구성

| 화면 | 경로 | 설명 |
| --- | --- | --- |
| 홈 | `/` | 최근 글 목록, 카테고리 칩, 검색창 |
| 글 상세 | `/posts/[slug]` | 메타 정보 + 본문 |
| 카테고리 | `/categories/[category]` | 카테고리별 글 목록 |
| 검색 결과 | `/?q=키워드` | 홈 목록에 검색 필터 적용 |
| 404 | - | 존재하지 않는 글/카테고리 |

### 5.1 공통 레이아웃
- 헤더: 로고(블로그명), 카테고리 링크, 검색 진입점
- 푸터: 저작권, 외부 링크(GitHub 등)

### 5.2 와이어프레임 (개념)

```
[홈]
┌──────────────────────────────┐
│ Logo        카테고리  🔍검색 │
├──────────────────────────────┤
│ [전체][React][Next.js][...]  │
│ ┌────┐ ┌────┐ ┌────┐         │
│ │카드│ │카드│ │카드│         │
│ └────┘ └────┘ └────┘         │
└──────────────────────────────┘

[글 상세]
┌──────────────────────────────┐
│ 제목                         │
│ 카테고리 · 발행일 · #태그    │
│ ──────────────────────────── │
│ 본문 블록 렌더링             │
└──────────────────────────────┘
```

---

## 6. 아키텍처

레이어드 구조를 따른다: **Route/Controller → Service → Repository**.

```
src/
├── app/                      # 라우트 (Controller 역할)
│   ├── page.tsx
│   ├── posts/[slug]/page.tsx
│   └── categories/[category]/page.tsx
├── components/               # UI 컴포넌트 (shadcn/ui 포함)
├── services/                 # 비즈니스 로직 (postService)
├── repositories/             # Notion API 접근 (postRepository)
├── lib/notion/               # Notion 클라이언트, 매퍼
├── types/                    # DTO, 도메인 타입
└── ...
```

- **Repository**: `@notionhq/client` 호출만 담당하고 Notion 응답을 DTO로 변환한다.
- **Service**: 필터/정렬/검색 등 도메인 로직을 담당한다.
- **의존성 주입**: Service는 Repository를 생성자/인자로 받아 테스트가 쉽도록 구성한다.
- **API 응답 형식**: Route Handler 사용 시 `{ success, data, error }` 형태로 통일한다.

### 6.1 렌더링 및 캐싱 전략
- 목록/상세는 서버 컴포넌트에서 데이터를 가져온다.
- ISR(`revalidate`, 예: 60~300초)로 Notion 변경이 자동 반영되게 한다.
- 선택: 즉시 반영이 필요하면 On-demand Revalidation(`revalidateTag`/Route Handler + 시크릿)을 추가한다.
- Notion API 속도 제한(평균 3 req/s)을 고려해 캐싱을 우선 적용한다.
- **참고**: 이 프로젝트의 Next.js는 기존 지식과 API/규칙이 다를 수 있다. 구현 전 `node_modules/next/dist/docs/`의 해당 가이드를 확인한다(`AGENTS.md` 참조).

### 6.2 환경 변수

| 변수 | 설명 |
| --- | --- |
| `NOTION_API_KEY` | Notion Integration 시크릿 (서버 전용) |
| `NOTION_DATABASE_ID` | 블로그 글 데이터베이스 ID |
| `REVALIDATE_SECRET` | (선택) On-demand 재검증용 시크릿 |

환경 변수는 Zod로 검증하고, 클라이언트에 노출하지 않는다(`NEXT_PUBLIC_` 접두사 금지).

---

## 7. 비기능 요구사항

| 항목 | 기준 |
| --- | --- |
| 성능 | Lighthouse Performance 90+ 목표, 이미지 최적화(`next/image`) |
| 이미지 | Notion 이미지 URL은 약 1시간 후 만료되므로 프록시/캐싱 또는 빌드 시 다운로드 전략 필요 |
| 접근성 | 시맨틱 마크업, 키보드 탐색, 충분한 색 대비 |
| SEO | 메타 태그, Open Graph, `sitemap.xml`, `robots.txt` |
| 보안 | API 키 서버 전용, 입력값(검색어) 검증 |
| 에러 처리 | Notion API 실패 시 에러 바운더리/폴백 UI, 404 처리 |
| 반응형 | 360px ~ 1440px 이상 대응 |

---

## 8. MVP 범위

### 포함
- Notion API 연동
- 글 목록 및 상세 페이지
- 기본 스타일링 (Tailwind + shadcn/ui)
- 반응형 디자인

### 제외 (후속 릴리스)
- 카테고리 필터링 / 검색 (P1, MVP 직후 순차 추가)
- 다크 모드, RSS, 목차(TOC), 관련 글 추천
- 댓글, 조회수, 뉴스레터

### 성공 기준
- Notion에서 `발행됨`으로 변경한 글이 수 분 내 블로그에 노출된다.
- 주요 블록(문단, 제목, 코드, 이미지, 목록)이 깨짐 없이 렌더링된다.
- 모바일/데스크톱에서 레이아웃이 정상 동작한다.

---

## 9. 구현 단계

| 단계 | 작업 | 산출물 |
| --- | --- | --- |
| 1 | Notion API 패키지 설치 및 환경 설정 | `@notionhq/client` 설치, `.env.local`, 환경 변수 검증 |
| 2 | Notion 데이터베이스 생성 및 API 키 설정 | DB 속성 구성, Integration 생성 및 DB 연결(공유), 샘플 글 |
| 3 | 글 목록 페이지 구현 | Repository/Service, 홈 목록, 카드 컴포넌트 |
| 4 | 글 상세 페이지 구현 | 블록 렌더러, `/posts/[slug]`, 404, 메타데이터 |
| 5 | 스타일링 및 최적화 | 반응형 보정, 이미지/캐싱 최적화, Vercel 배포 |
| 6 (후속) | 카테고리 필터링 및 검색 | `/categories/[category]`, 검색 UI |

### 9.1 단계별 체크리스트

**1단계**
- [ ] `npm install @notionhq/client`
- [ ] `.env.local` 및 `.env.example` 작성
- [ ] Notion 클라이언트 초기화 (`lib/notion`)

**2단계**
- [ ] Notion 데이터베이스 생성 (속성: Title, Category, Tags, Published, Status)
- [ ] Notion Integration 생성 후 API 키 발급
- [ ] 데이터베이스에 Integration 연결 (Connections)
- [ ] 샘플 글 3개 이상 작성

**3단계**
- [ ] `postRepository.findPublished()` 구현
- [ ] 응답 → `PostSummary` DTO 매핑
- [ ] 홈 페이지 및 `PostCard` 컴포넌트

**4단계**
- [ ] 블록 조회(하위 블록 재귀/페이지네이션 처리)
- [ ] 블록 타입별 렌더러
- [ ] `generateMetadata`, `notFound()` 처리

**5단계**
- [ ] 반응형 점검 (모바일/태블릿/데스크톱)
- [ ] ISR 설정, 이미지 최적화
- [ ] Vercel 환경 변수 설정 및 배포

---

## 10. 리스크 및 오픈 이슈

| 항목 | 내용 | 대응 방안 |
| --- | --- | --- |
| Notion API 속도 제한 | 평균 3 req/s | ISR 캐싱, 요청 최소화 |
| 이미지 URL 만료 | Notion 호스팅 이미지는 약 1시간 후 만료 | 서버 프록시 또는 외부 스토리지 이전 검토 |
| 블록 렌더링 범위 | 모든 Notion 블록 지원은 비용이 큼 | MVP는 주요 블록만 지원, 미지원 블록은 안전하게 무시 |
| slug 정책 | 페이지 ID는 URL이 길고 가독성이 낮음 | Notion에 `Slug` 속성 추가 여부 결정 (미결정) |
| 검색 방식 | Notion 필터 vs 서버 측 필터링 | 글 수가 적은 동안은 서버 측 필터링, 증가 시 Notion 필터로 전환 |
| Next.js 버전 차이 | 프로젝트의 Next.js가 기존 지식과 다를 수 있음 | 구현 전 번들된 공식 문서 확인 |

---

## 11. 향후 로드맵
1. 카테고리 필터링 및 검색 완성 (P1)
2. 다크 모드, 목차(TOC), 코드 복사 버튼
3. RSS 피드, sitemap 자동 생성
4. 관련 글 추천, 조회수 통계
5. 댓글(Giscus 등) 연동
