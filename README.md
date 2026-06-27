# 조아라 포트폴리오 | Jo Ara Portfolio

> 퍼블리셔 6년 경력을 기반으로 프론트엔드 개발자로 전환 중인 조아라의 포트폴리오 사이트입니다.
> Glassmorphism 디자인 언어와 AI 챗봇(아라봇)을 적용한 인터랙티브 포트폴리오입니다.

**[라이브 데모](https://joara-portfolio.vercel.app)** | **[GitHub](https://github.com/joara-frontend)**

---

## ✨ 주요 기능

### 1️⃣ **Glassmorphism 디자인 시스템**

**설계 방향**

- 전체 UI를 `rgba(255,255,255,0.55)` 반투명 유리 질감(`--glass-bg`)으로 통일
- 인디고(`#6c7cf0`) · 코랄(`#ff9a76`) · 민트(`#6fd6c4`) 세 가지 포인트 컬러 팔레트
- 4개의 유기적 형태 `blob` 요소가 배경에서 부유 애니메이션(`joFloat`, `joFloatB`)

**다크 모드**

- `ThemeContext` + `localStorage` + `<html class="dark">`로 상태 관리
- CSS 변수 override 방식으로 다크 테마 전환 (JS로 클래스 토글, Tailwind `dark:` variant)
- 다크모드 플래시 방지를 위해 `layout.tsx` `<head>` 인라인 스크립트로 렌더 전 클래스 적용
- 하늘 씬(낮/밤) 애니메이션 토글 버튼으로 직관적인 UX 제공

```css
/* globals.css: 다크 모드 CSS 변수 override */
.dark {
  --glass-bg: rgba(20, 25, 55, 0.55);
  --glass-bd: rgba(255, 255, 255, 0.1);
  --card-shadow: 0 24px 48px -28px rgba(0, 0, 0, 0.7), ...;
}
```

---

### 2️⃣ **스켈레톤 로딩 UI**

**구조**

재사용 가능한 `Skeleton` 원자 컴포넌트를 기반으로 섹션별 스켈레톤을 조합:

```
Skeleton (원자 — rect / circle variant)
  ├─ HeroSliderSkeleton   — 이미지 슬라이드 + 도트 인디케이터
  ├─ ProjectCardSkeleton  — 프로젝트 카드 그리드 (count prop)
  └─ ProjectMetaSkeleton  — 프로젝트 상세 메타 영역
```

**스켈레톤 스타일**

```css
/* globals.css */
@keyframes skeletonPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.sk {
  border-radius: 10px;
  background: rgba(170, 182, 230, 0.28); /* 포트폴리오 팔레트와 통일 */
  animation: skeletonPulse 1.8s ease-in-out infinite;
}
/* 다크 모드 */
.dark .sk {
  background: rgba(60, 70, 120, 0.3);
}
```

실제 컴포넌트 크기와 픽셀 단위 매칭으로 CLS 최소화.

---

### 3️⃣ **AI 챗봇 — 아라봇 (ARA-bot)**

**아키텍처**

```
ChatWidget (index.tsx)          ← 상태·API 호출 조율
  ├─ ChatButton.tsx             ← FAB 버튼
  ├─ ChatModal.tsx              ← 채팅창 레이아웃
  │   ├─ BotAvatar.tsx
  │   ├─ MessageList.tsx
  │   │   └─ MessageItem.tsx
  │   └─ InputBar.tsx
app/api/chat/route.ts           ← Next.js Route Handler (Gemini API 호출)
lib/prompts/systemPrompt.ts     ← 조아라에 관한 시스템 프롬프트
```

**동작 방식**

- `POST /api/chat` → `@google/generative-ai` SDK → `gemini-2.5-flash` 모델
- 시스템 프롬프트에 경력·기술·프로젝트 정보를 내장, 범위 외 질문은 안내 문구로 처리
- 응답 형식: `{ reply: string }` | `{ error: string }` (429·500 에러 핸들링 포함)

**필요 환경 변수**

```env
GEMINI_API_KEY=your_key_here
```

---

### 4️⃣ **스킬 마키 & 인터랙션**

- 기술 스택 배지가 무한 스크롤 마키로 표시 (`joMarquee` keyframe, `reverse` 방향 교차)
- 경력·학력 아코디언: CSS `grid-template-rows: 0fr → 1fr` 트랜지션으로 JS 없이 높이 애니메이션
- Framer Motion `FadeIn` 래퍼로 스크롤 진입 시 섹션 페이드인

---

## 🛠️ 기술 스택

| 분류       | 기술                                              |
| ---------- | ------------------------------------------------- |
| 프레임워크 | Next.js 14 (App Router)                           |
| 언어       | TypeScript                                        |
| 스타일     | Tailwind CSS v4, globals.css (`@layer`, CSS 변수) |
| 애니메이션 | Framer Motion                                     |
| AI         | Google Gemini API (`gemini-2.5-flash`)            |
| 배포       | Vercel                                            |

---

## 📂 프로젝트 구조

```
src/
├── app/
│   ├── api/chat/route.ts        # Gemini API Route Handler
│   ├── portfolio/[slug]/        # 프로젝트 상세 동적 라우트
│   ├── portfolio/lotte/         # 롯데 전용 (iframe 기반, 동적 라우트 제외)
│   ├── layout.tsx               # 전역 레이아웃 + 메타데이터 + 다크모드 플래시 방지
│   └── globals.css              # 디자인 토큰, 스켈레톤, 다크 모드, 컴포넌트 CSS
├── components/
│   ├── common/                  # Header, Footer
│   ├── main/                    # Hero, AboutMe, Skills, Portfolio (메인 페이지 섹션)
│   ├── detail/                  # HeroSlider, ProjectMeta, FeatureSection (상세 페이지)
│   └── ui/
│       ├── ChatWidget/          # 챗봇 컴파운드 컴포넌트
│       ├── FadeIn.tsx           # 스크롤 진입 애니메이션 래퍼
│       ├── Skeleton.tsx         # 스켈레톤 원자 컴포넌트
│       ├── DarkModeToggle.tsx
│       └── ScrollToTop.tsx
├── data/                        # 정적 데이터 + 타입 (portfolio.ts, projectDetails.ts)
└── lib/
    ├── ThemeContext.tsx          # 다크 모드 Context + Provider
    ├── utils.ts                 # cn() 유틸리티
    └── prompts/systemPrompt.ts  # 챗봇 시스템 프롬프트
```

---

## 🚀 설치 및 실행

### 요구사항

- Node.js 18+

### 설치

```bash
git clone https://github.com/joara-frontend/portfolio.git
cd portfolio
npm install
```

### 환경 변수 설정

```bash
# .env.local 생성
GEMINI_API_KEY=your_gemini_api_key
```

### 개발 서버 시작

```bash
npm run dev
# http://localhost:3000
```

### 프로덕션 빌드

```bash
npm run build
npm run start
```

---

## 🔍 기술적 의사결정 기록

### 1. "왜 Glassmorphism인가?"

**배경**

- 퍼블리셔 경력을 강조하는 포트폴리오이므로 시각적 완성도가 신뢰도에 직결
- 패스텔 그라데이션 배경 위에서 반투명 카드가 레이어를 형성해 깊이감 표현

**선택**

- `backdrop-filter: blur()` + `rgba` 배경 + 흰색 1px 테두리 조합
- CSS 변수 단일 관리로 다크 모드 전환 시 일관성 유지

---

### 2. "왜 다크 모드를 CSS 변수 override로 구현했나?"

**배경**

- Tailwind `dark:` variant는 클래스 수가 많아 CSS 파일이 비대해질 위험
- 컴포넌트별 CSS가 아닌 `globals.css`에 집중된 구조

**선택**

```css
/* 변수만 교체하면 전체 컴포넌트에 일괄 적용 */
.dark {
  --glass-bg: rgba(20, 25, 55, 0.55);
}
```

- Tailwind `dark:` variant는 보조로 사용, 복잡한 스타일은 CSS 변수 override로 처리

---

### 3. "스켈레톤 색상을 포트폴리오 팔레트에 맞춘 이유?"

**배경**

- 일반 회색 스켈레톤(`#e0e0e0`)은 인디고·코랄·민트 팔레트와 충돌
- 로딩 중에도 디자인 언어가 유지되어야 함

**선택**

```css
background: rgba(170, 182, 230, 0.28); /* 인디고 계열 저채도 */
```

- 라이트/다크 모두 포트폴리오 색 온도와 일치

---

### 4. "챗봇을 서버사이드 Route Handler로 구현한 이유?"

**배경**

- 클라이언트에서 직접 Gemini API를 호출하면 API 키가 노출됨

**선택**

- `app/api/chat/route.ts` (Next.js Route Handler)를 프록시로 사용
- API 키는 서버 환경 변수에만 보관

---

## 💡 배경: 퍼블리셔에서 프론트엔드 개발자로

6년간 퍼블리셔로 일하면서 HTML·CSS·JavaScript로 정밀한 UI를 구현하는 경험을 쌓았습니다.
Figma 디자인 재현율 100% 달성, 다국어(RTL) 대응, SEO 최적화 등 다양한 도전을 통해
**기획·디자인·개발의 간극을 조율하는 역량**을 키웠습니다.

더 깊은 기술 이해와 컴포넌트 아키텍처를 갖추기 위해 프론트엔드 부트캠프를 수료했으며,
현재 React·TypeScript 기반의 프론트엔드 개발자로 전환 중입니다.

---

## 📧 연락처

- **Email**: whdkfk110@naver.com
- **GitHub**: [github.com/joara-frontend](https://github.com/joara-frontend)
- **Portfolio**: [joara-portfolio.vercel.app](https://joara-portfolio.vercel.app)

---

<div align="center">

Made with ❤️ by 조아라

</div>
