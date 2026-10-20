# 개인 개발 블로그 (Notion CMS)

Notion을 CMS로 활용하는 개인 기술 블로그입니다. Notion 데이터베이스에서 글을 작성하고 `발행됨`으로 바꾸면 별도 배포 작업 없이 블로그에 자동 반영됩니다.

> 상세 요구사항은 [docs/PRD.md](./docs/PRD.md)를 참고하세요.

## 주요 기능

- Notion 데이터베이스 기반 글 목록 조회 (최신순)
- 글 상세 페이지 (Notion 블록 렌더링)
- 카테고리별 필터링
- 키워드 검색
- 반응형 디자인 (모바일 / 태블릿 / 데스크톱)

> 현재 MVP 개발 단계이며, 카테고리 필터링과 검색은 MVP 이후 순차적으로 추가됩니다.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| 프레임워크 | Next.js (App Router), React 19, TypeScript |
| CMS | Notion API (`@notionhq/client`) |
| 스타일링 | Tailwind CSS v4, shadcn/ui |
| 폼 / 검증 | React Hook Form, Zod |
| 아이콘 | Lucide React |
| 기타 | next-themes (다크모드), Sonner (토스트), usehooks-ts |
| 배포 | Vercel |

## Notion 데이터베이스 구조

| 속성 | 표시명 | 타입 | 설명 |
| --- | --- | --- | --- |
| Title | 제목 | `title` | 글 제목 |
| Category | 카테고리 | `select` | 단일 카테고리 |
| Tags | 태그 | `multi_select` | 다중 태그 |
| Published | 발행일 | `date` | 정렬 및 표시 기준 |
| Status | 상태 | `select` | `초안` / `발행됨` |
| Content | 본문 | page content | 페이지 본문 블록 |

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 만들고 다음 값을 입력합니다.

```bash
NOTION_API_KEY=your_notion_integration_secret
NOTION_DATABASE_ID=your_database_id
```

- Notion에서 Integration을 생성해 API 키를 발급받습니다.
- 블로그 데이터베이스에 해당 Integration을 연결(Connections)해야 합니다.
- 환경 변수는 서버 전용이므로 `NEXT_PUBLIC_` 접두사를 붙이지 않습니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | 타입 검사 |

## 프로젝트 구조

```
app/            # 라우트 (App Router)
components/     # UI 컴포넌트 (ui/: shadcn/ui, layout/, shared/, providers/)
config/         # 사이트 설정
hooks/          # 커스텀 훅
lib/            # 유틸리티 및 Notion 클라이언트
docs/           # 문서 (PRD 등)
public/         # 정적 파일
```

## 컴포넌트 추가

```bash
npx shadcn@latest add <component-name>
```

## 배포

Vercel에 저장소를 연결하고 `NOTION_API_KEY`, `NOTION_DATABASE_ID` 환경 변수를 등록하면 배포됩니다.

## 구현 로드맵

1. Notion API 패키지 설치 및 환경 설정
2. Notion 데이터베이스 생성 및 API 키 설정
3. 글 목록 페이지 구현
4. 글 상세 페이지 구현
5. 스타일링 및 최적화
6. 카테고리 필터링 및 검색
