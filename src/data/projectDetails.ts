import { CODE_SNIPPETS } from "./codeSnippets";

// ─── Detail item: discriminated union (no `any`) ───────────────────────────
export type DetailItemImage = {
  src: string;
  alt: string;
  type?: never;
  language?: never;
  code?: never;
};

export type DetailItemCode = {
  src?: never;
  alt: string;
  type: "code";
  language: string;
  code: string;
};

export type DetailItem = DetailItemImage | DetailItemCode;

// ─── Feature card Num Type ────────────────────────────────────────────────────────────

export interface ProjectFeatureNumType {
  title: string;
  details?: DetailItem[];
  items: string[];
}

// ─── Feature card Not Num Type ─────────────────────────────────────────────────────

export interface ProjectFeatureNotNumType {
  contributions: string[];
  result: string[];
}

// ─── Project detail data shape ──────────────────────────────────────────────

export interface ProjectDetailLink {
  label: string;
  url: string;
}

export interface ProjectDetailData {
  title: string;
  period: string;
  members: string;
  role?: string;
  description: string;
  stacks: string[];
  links?: ProjectDetailLink[];
  images: string[];
  features?: ProjectFeatureNumType[] | ProjectFeatureNotNumType[];
}

// ─── Data ───────────────────────────────────────────────────────────────────

export const PROJECT_DETAIL_DATA: Record<string, ProjectDetailData> = {
  globalnomad: {
    title: "글로벌노마드 (GlobalNomad)",
    period: "2026.03 — 2026.04",
    members: "Frontend 4명",
    role: "Team Lead, Auth(회원가입/로그인), 내 정보 수정, 활동 대시보드(히스토리/리포트)",
    description:
      "여행 상품 등록 및 예약 관리 기능을 제공하는 체험 중심의 여행 커뮤니티 플랫폼입니다.",
    stacks: [
      "Next.js(App Router)",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form / Zod",
      "JWT 인증",
    ],
    links: [
      {
        label: "Live ↗",
        url: "https://21-sprint-1team-globalnomad.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/joara-frontend/21-sprint-1team-globalnomad",
      },
    ],
    images: [
      "/assets/projects/globalnomad_detail_01.png",
      "/assets/projects/globalnomad_detail_02.png",
      "/assets/projects/globalnomad_detail_03.png",
    ],
    features: [
      {
        title: "사용자 참여 유도를 위한 대시보드 구축 및 성능 최적화",
        details: [
          {
            src: "/assets/projects/globalnomad_feature_01_01.png",
            alt: "여행 체험 목록 페이지. 카테고리별 필터와 캘린더 기반의 예약 가능 날짜를 시각화하여, 사용자가 원하는 체험을 직관적으로 탐색하고 예약할 수 있는 인터페이스.",
          },
          {
            alt: "TanStack Query의 useQueries를 통해 활동 목록과 예약 목록 데이터를 병렬로 페칭하고, 통합된 데이터를 calculateLevel 함수에 전달하여 사용자 뱃지 등급과 이름을 산정하는 Custom Hook 비즈니스 로직",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_BADGE_HOOK,
          },
          {
            alt: "TanStack Query의 enabled 옵션과 병렬 페칭 전략을 통해 데이터 의존성을 제어하고, useMemo로 복잡한 통계 로직을 최적화한 커스텀 훅 구현",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_REPORT_HOOK,
          },
        ],
        items: [
          "단순 예약 기능을 넘어 유저의 지속적인 참여를 유도할 동기 부여 요소가 필요했으며, 대시보드 내 대규모 데이터 페칭으로 인한 로딩 지연 및 복잡한 통계 연산 로직의 분리 필요성을 확인했습니다.",
          "프로젝트 조기 완료 후 유저 재방문율을 높이기 위해, 사용자 활동 데이터를 분석하여 시각화한 리포트 페이지와 성취 조건을 기반으로 한 뱃지 시스템을 직접 기획 및 제안하여 서비스의 가치를 확장했습니다.",
          "예약 및 활동 리스트 등 독립적인 데이터는 useQueries를 활용해 즉시 병렬 페칭하여 초기 로딩 성능을 확보했습니다.",
          "리스트 데이터가 있어야만 상세 정보를 조회할 수 있는 데이터 순차적 의존성을 설계 단계에서 정의하고, enabled 옵션을 활용해 상세 데이터 호출 시점을 제어함으로써 불필요한 네트워크 요청을 차단하고 데이터 정합성을 유지했습니다.",
          "복잡한 대시보드 통계 로직을 Custom Hook으로 캡슐화하고 useMemo를 적용하여 연산 비용을 최적화함으로써, UI 컴포넌트와의 의존성을 완벽히 분리하고 뷰어 컴포넌트의 가독성과 렌더링 효율을 극대화했습니다.",
          "복잡한 히스토리 데이터의 관리 효율을 극대화하고, 단순 홈페이지를 넘어 데이터 중심의 사용자 경험을 제공했습니다.",
        ],
      },
      {
        title: "Next.js API Routes를 활용한 BFF 아키텍처 및 인증 은닉 설계",
        details: [
          {
            alt: "BFF 프록시 레이어: 토큰 재발급 및 요청 리트라이를 처리하는 Next.js route.ts 예시",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_BFF_PROXY,
          },
        ],
        items: [
          "클라이언트 단의 토큰 관리로 인한 보안 취약점 및 토큰 만료 시 사용자 흐름이 끊기는 UX 문제를 인지했습니다.",
          "Next.js API Routes를 BFF 프록시 레이어로 구축하여, 클라이언트 환경에 민감한 인증 정보를 노출하지 않는 보안 구조를 설계했습니다.",
          "클라이언트 대신 서버 사이드에서 인증 쿠키를 관리하고, Axios Interceptor를 활용해 토큰 만료 시 자동으로 재발급받는 Silent Refresh 로직을 구현했습니다.",
          "인증 인프라의 복잡성을 서버 레이어로 격리하여 보안성을 확보함과 동시에, 사용자에게 재로그인 없는 심리스한 경험을 제공했습니다.",
        ],
      },
      {
        title: "Next.js Metadata API를 활용한 동적 SEO 및 인덱싱 최적화",
        details: [
          {
            alt: "애플리케이션 전역의 검색 엔진 노출을 최적화하기 위해 Next.js Metadata API를 도입하여 표준화된 공통 메타데이터를 정의하고, 파비콘 및 Open Graph 설정을 레이아웃 단계에서 선언적으로 관리하는 코드",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_META_TAG,
          },
          {
            alt: "동적 경로(params)를 기반으로 generateMetadata 함수를 호출하여 각 체험 상품별 고유한 제목, 설명, 오픈그래프 이미지를 실시간으로 주입함으로써, 검색 엔진 인덱싱을 최적화하고 공유 효율을 극대화한 동적 메타데이터 구현 코드",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_DETAIL_META_TAG,
          },
        ],
        items: [
          "체험 상품 상세 페이지마다 고유한 메타 데이터 노출이 필요했으나, 기존 Head 컴포넌트 방식은 각 페이지마다 태그를 수동으로 중복 작성해야 하여 유지보수 및 확장성에 한계가 존재함을 인지했습니다.",
          "Next.js의 Metadata API를 도입하여 layout 레이어에서 공통 메타 데이터를 관리하고, 각 page 레이어에서 동적 데이터를 주입하는 선언적 구조로 마이그레이션했습니다.",
          "상세 페이지별로 최적화된 제목, 설명, 이미지 정보를 유연하게 반영하여 서비스 가독성을 개선했습니다.",
          "수동 중복 코드를 제거하여 유지보수성을 확보하고, 실제 배포 후 검색 엔진 노출 여부를 확인하는 과정에서 단순 코드 구현을 넘어 검색 엔진 인덱싱을 위한 전략이 필요함을 체감했습니다.",
        ],
      },
      {
        title: "Auth 페이지 진입 시 시각적 인터랙션 및 로딩 최적화",
        details: [
          {
            src: "/assets/projects/globalnomad_feature_04_01.gif",
            alt: "로그인 과정에서 사용자 입력값에 반응하여 역동적으로 움직이는 Lottie 애니메이션. 서비스의 아이덴티티를 전달하고 데이터 처리 시 사용자의 체감 대기 시간을 단축하는 인터랙티브 요소",
          },
          {
            alt: "초기 로딩 시 정적 로고 이미지를 즉시 렌더링하고, Lottie 라이브러리 데이터 로드 완료 시점에 애니메이션으로 부드럽게 교체하는 레이아웃 시프트 방지 및 성능 최적화 구현 코드. 이벤트 기반의 인터랙티브 애니메이션 트리거 로직을 포함하여 사용자 입력 반응성을 강화한 로그인 UI 로직",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.NOMAD_AUTH_LOGO,
          },
          {
            src: "/assets/projects/globalnomad_feature_04_02.png",
            alt: "이메일 기억하기 체크박스 선택 시 브라우저 로컬 스토리지를 활용하여 이전 로그인 계정 정보를 안전하게 저장하고, 재방문 시 자동 입력하여 사용자 편의성을 높인 로그인 환경 UI",
          },
          {
            src: "/assets/projects/globalnomad_feature_04_03.png",
            alt: "입력되는 비밀번호의 복잡도에 따라 보안 강도를 실시간으로 분석하고 결과를 즉각적인 시각적 피드백과 메세지로 표시하여 사용자의 계정 보안 설정을 유도하는 유효성 검사 UI",
          },
        ],
        items: [
          "Auth 레이아웃 내 Lottie 애니메이션 도입 후, 초기 로딩 시 대용량 JSON 파일로 인한 시각적 공백과 렌더링 지연이 발생하는 성능 병목과 레이아웃 시프트를 포착했습니다.",
          "Auth 페이지 진입 시 Lottie 데이터 로드 전 정적 이미지를 우선 렌더링하고, 애니메이션 준비 완료 시점에 컴포넌트를 교체하는 스위칭 로직을 구현했습니다.",
          "고정된 컨테이너 내부에 정적 이미지와 Lottie를 절대 위치로 배치하여, 로딩 전후의 레이아웃 변화를 방지하고 시각적 연속성을 유지했습니다.",
          "이와 더불어 라이브러리 없는 '비밀번호 강도 체크' 로직 및 로컬 스토리지를 활용한 '이메일 기억하기' 등 사용자 편의 기능을 직접 구현하여 분리했습니다.",
          "기술적 최적화로 서비스 입구인 Auth 페이지의 시각적 불안정성을 해결하였으며, 콘텐츠 렌더링 우선순위 제어를 통해 사용자의 체감 성능을 개선하고 이탈률 감소에 기여했습니다.",
        ],
      },
      {
        title: "개발 생산성 향상을 위한 협업 환경 및 초기 인프라 구축",
        details: [
          {
            src: "/assets/projects/globalnomad_feature_05_01.png",
            alt: "Git Flow 및 네이밍 컨벤션을 정의한 프로젝트 협업 가이드 문서",
          },
          {
            src: "/assets/projects/globalnomad_feature_05_02.png",
            alt: "애자일 기반의 프로젝트 마일스톤 및 태스크 관리 문서",
          },
        ],
        items: [
          "팀원 간 개발 환경 불일치로 인한 커뮤니케이션 비용 발생  및 프로젝트 초기 설정 단계에서의 일정 관리의 불확실성을 방지하고자 했습니다.",
          "노션을 활용해 Git Flow, 커밋 컨벤션, 폴더 구조 및 네이밍 규칙을 문서화하여 협업 표준을 명확히 수립했습니다.",
          "Vercel 기반 배포 환경을 조기에 구축하고, 공통 Axios 인스턴스 및 인증 인터페이스를 선제적으로 설계하여 팀원들이 비즈니스 로직에만 집중할 수 있는 안정적인 개발 기반을 마련했습니다.",
        ],
      },
    ],
  },

  taskify: {
    title: "태스키파이 (Taskify)",
    period: "2026.02",
    members: "Frontend 4명",
    role: "카드 및 댓글 CRUD, 고도화된 다형성 인풋 시스템 설계, 5종 이상의 폼 성능 최적화",
    description:
      "칸반 보드 형식을 활용한 팀 프로젝트 일정 및 태스크 관리 대시보드입니다.",
    stacks: [
      "Next.js(Pages Router)",
      "TypeScript",
      "Axios",
      "Context API",
      "Tailwind CSS",
      "React Hook Form / Zod",
      "Jira & Agile",
    ],
    links: [
      { label: "Live ↗", url: "https://21-sprint-2-team-taskify.vercel.app/" },
      {
        label: "GitHub",
        url: "https://github.com/joara-frontend/21-Sprint-2Team_Taskify",
      },
    ],
    images: [
      "/assets/projects/taskify_detail_01.png",
      "/assets/projects/taskify_detail_02.png",
      "/assets/projects/taskify_detail_03.png",
    ],
    features: [
      {
        title: "유저 친화적 인터랙션 및 카드·댓글 관리 시스템 구현",
        details: [
          {
            src: "/assets/projects/taskify_feature_01_01.png",
            alt: "할 일 수정 모달 창. 상태(To do), 담당자, 제목, 설명, 마감일, 태그, 이미지 업로드 필드가 포함되어 있으며, 사용자가 입력한 태그가 배경색과 폰트색이 매핑된 칩 형태로 실시간 렌더링되는 모습",
          },
          {
            src: "/assets/projects/taskify_feature_01_02.png",
            alt: "할 일 상세 모달 창. 카드 이미지, 설명, 담당자, 마감일 정보가 상단에 위치하고, 하단에는 실시간 댓글 목록과 작성창이 있어 사용자가 댓글을 조회, 수정, 삭제할 수 있는 인터페이스",
          },
          {
            alt: "사용자 입력 이벤트(onKeyDown)를 직접 제어하여 엔터 입력 시 태그 칩을 생성하고, 백스페이스 입력 시 태그를 삭제하는 다형성 폼 로직",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_CARD_TAG,
          },
          {
            alt: "댓글 추가, 수정, 삭제 API 요청 후, 프론트엔드 상태를 직접 조작(map, filter)하여 모달 내에서 추가 서버 요청 없이 실시간으로 데이터를 동기화하는 로직",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_COMM_CRUD,
          },
        ],
        items: [
          "대시보드 내 카드 작성 및 관리 기능 구현 요구사항에 따른 인터랙션 최적화.",
          "카드 작성 시 엔터 입력으로 즉각적인 태그 칩을 생성하고, 텍스트에 따라 배경·폰트 컬러가 자동 매핑되는 동적 스타일링 로직 구현.",
          "카드·댓글 CRUD 전반을 담당하여 복잡한 모달 창 내에서도 중복 요청 없이 상태가 실시간으로 동기화되도록 데이터 관리. 무분별한 UI 라이브러리 의존 대신 브라우저 기본 이벤트를 직접 제어",
          "사용자 중심의 인터랙션 환경을 조성하고, 데이터 상태의 실시간 동기화 안정성 확보.",
        ],
      },
      {
        title: "React Hook Form & Zod 기반의 재사용 가능한 폼 시스템 설계",
        details: [
          {
            alt: "제네릭과 ControllerRenderProps를 활용하여 표준화된 인터페이스를 가진 재사용 가능한 Input 컴포넌트 코드",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_INPUT,
          },
          {
            alt: "Zod 스키마의 superRefine을 활용한 조건부 파일 검증 로직과 React Hook Form을 이용한 폼 상태 관리 코드",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_SCHEMA,
          },
        ],
        items: [
          "회원가입, 카드 생성 등 다양한 폼 입력 타입(5종)에 대한 공통 규격 및 유효성 검사 로직 필요.",
          "Controller 패턴과 TypeScript 제네릭을 활용하여 React Hook Form 및 Zod 스키마와 느슨하게 결합하는 다형성 인풋 시스템 구축.",
          "5종의 인풋 타입을 동일한 인터페이스 규격으로 표준화하고, Zod의 superRefine을 활용해 복잡한 조건부 유효성 검사를 선언적으로 처리.",
          "반복되는 폼 제어 로직을 추상화하여 개발 생산성을 높이고, 유효성 검증 데이터의 일관성 보장.",
        ],
      },
      {
        title: "브라우저 리소스 관리 및 비동기 안정성 확보",
        details: [
          {
            alt: "비동기 데이터 페칭 최적화 및 동적 자원 메모리 누수 방지 로직",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_MEMEROY_ASYNC,
          },
        ],
        items: [
          "이미지 업로드 프리뷰 및 비동기 작업 과정에서의 메모리 점유 및 언마운트 시 발생 가능한 부작용 방지.",
          "이미지 삭제 및 컴포넌트 언마운트 시점에 URL.revokeObjectURL로 자원을 명시적으로 해제하여 브라우저 메모리 점유 최적화.",
          "비동기 페칭 중 컴포넌트 언마운트 시, 이중 업데이트로 인한 부작용 및 불필요한 메모리 낭비를 방지하는 가드 로직 설계.",
          "성능이 제한된 환경에서도 메모리 누수를 원천 차단하여 안정적인 렌더링 상태 유지.",
        ],
      },
      {
        title: "디자인 시스템 토큰화 및 스타일 관리 최적화",
        details: [
          {
            src: "/assets/projects/taskify_feature_04_01.png",
            alt: "Taskify 프로젝트의 폰트 및 컬러 디자인 가이드. 좌측은 Pretendard 폰트의 스타일 이름, 크기, 줄 높이, 굵기가 상세히 정의된 테이블 형태이며, 우측은 주요 브랜드 컬러와 그레이스케일 팔레트가 컬러칩 형태로 정리된 디",
          },
          {
            alt: "Tailwind CSS의 @theme 지시어를 활용하여 폰트, 컬러, 브레이크포인트 등 디자인 토큰을 정의하고, @layer utilities를 통해 반응형 텍스트 스타일을 규격화하여 표준화된 디자인 시스템을 구축한 코드.",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_DESIGH_GUIDE,
          },
        ],
        items: [
          "Tailwind CSS 기본 클래스 사용 시 스타일 조합 반복 및 일관성 유지를 위한 표준화 필요.",
          "디자인 가이드를 @theme로 표준화하고, 폰트와 줄 높이를 한 쌍으로 묶은 독자적 Utility 클래스를 @layer utilities로 선언하여 인터페이스 단순화.",
          "Tailwind 계층 구조를 활용해 스타일 우선순위를 명확히 하고, 중앙 집중형 토큰 관리 인프라를 설계하여 빌드 타임 스타일 충돌 방지.",
          "코드 가독성 극대화 및 단일 지점에서의 스타일 수정을 통한 팀 전체의 유지보수 생산성 향상.",
        ],
      },
      {
        title: "전역 피드백 시스템 구축을 통한 서비스 완성도 향상",
        details: [
          {
            alt: "react-hot-toast 라이브러리를 기반으로 전역 토스트 알림 컴포넌트를 설계한 코드. ToastProvider 패턴을 적용하여 서비스 전역에서 일관된 피드백 인터페이스를 표준화하고, 커스텀 스타일과 옵션을 중앙 집중적으로 관리하도록 구현함.",
            type: "code",
            language: "Typescript",
            code: CODE_SNIPPETS.TASKIFY_TOAST,
          },
        ],
        items: [
          "프로젝트 내 일관된 피드백 인터페이스 부재로 인한 브라우저 기본 Alert 사용 개선 필요.",
          "react-hot-toast 기반의 공통 Toast 컴포넌트를 설계하고 Provider 패턴을 적용하여 전역 호출 가능하게 구조화.",
          "커스터마이징이 용이한 라이브러리를 도입하여 누구나 전역에서 호출 가능한 표준화된 피드백 인터페이스 구축.",
          "일관된 피드백 UI 제공을 통해 서비스 완성도를 높이고, 팀 내 피드백 구현 생산성 향상.",
        ],
      },
    ],
  },

  lawfirm: {
    title: "법무·특허·세무 플랫폼",
    period: "2024.07 — 2025.05",
    members: "퍼블리셔 1명 (단독)",
    role: "UI/UX 퍼블리싱 전담",
    description:
      "법무·특허·세무 분야의 전문 서비스를 통합 구축한 웹 플랫폼입니다.",
    stacks: [
      "Semantic Markup",
      "SEO Optimization",
      "Component-Driven Design",
      "Web Performance",
      "Cross-Browsing",
      "Figma to Code",
    ],
    links: [
      { label: "대표 Live ↗", url: "https://law-eden.com/" },
      {
        label: "대표 GitHub",
        url: "https://github.com/joara-frontend/rebuild-eden",
      },
    ],
    images: [
      "/assets/projects/lawfirm_detail_01.png",
      "/assets/projects/lawfirm_detail_02.png",
      "/assets/projects/lawfirm_detail_03.png",
      "/assets/projects/lawfirm_detail_04.png",
    ],
    features: [
      {
        title: "특허법인 테헤란 / 세무법인 테헤란",
        items: [
          "회사의 리브랜딩에 맞춘 웹사이트 리뉴얼 퍼블리싱 전담 및 마케팅 요구사항에 신속 대응.",
          "웹접근성(WA) 요소 표준화 및 UX 개선을 통해 사용자 편의성 고도화.",
          "파비콘 및 메타태그 구조 분석을 통한 SEO 대응 작업으로 실제 포털 유입률 증가에 기여.",
          "비즈니스 요청에 대한 민첩한 피드백과 빠른 처리로 협업 부서 및 팀 내 높은 신뢰도 확보.",
        ],
      },
      {
        title: "법률사무소 트라이원스",
        items: [
          "회사 설립 초기 단계의 웹사이트 기획부터 제작까지 전담하며 다양한 법률 분야별 홈페이지 및 콘텐츠 구축.",
          "회사 분할에 따른 신규 사이트 독립 개설을 위해 기존 레거시 코드를 이관하고, 구조적 결합도를 낮추는 클린코드 리팩토링 및 HTML/CSS 마크업 표준화로 유지보수성 최적화.",
          "모든 이미지 자산을 WebP 포맷으로 변환·적용하여 웹사이트의 전반적인 페이지 로딩 속도 및 웹 성능 개선.",
          "코드 구조 정리와 체계적인 유지보수 프로세스 구축을 통해 실질적인 작업 생산성 및 개발 팀 내 협업 효율 향상.",
        ],
      },
      {
        title: "법무법인 이든",
        items: [
          "회사 창립 시점에 맞춰 기획·디자인 직군과의 긴밀한 협업을 통해 웹사이트 구축 전반을 전담하고, 기획 의도와 디자인 시안을 높은 싱크로율로 구현.",
          "다차원적인 사용자 경험을 제공하기 위해 구글 3D 지도 삽입 등 인터랙티브하고 실용적인 사용자 중심 기능 구현 및 편의성 강화.",
          "Datepicker 컴포넌트에 공공 API를 연동하여 실시간으로 공휴일이 자동 반영되는 동적 데이터 로직을 선제적으로 설계 및 도입.",
          "다수 부서의 니즈를 민첩하게 수용하여 짧은 기간 내 프로젝트 완성도를 제고했으며, 사이트 오픈 후 장기적인 유지보수 및 기능 개선까지 전담.",
        ],
      },

      {
        title: "법무법인 영웅",
        items: [
          "신설 조직의 빠른 웹 인프라 구축을 위해 메인 홈페이지와 형사·이혼·민사 등 다양한 법률 분야에 특화된 서브 사이트 제작을 전담하여 브랜드 전문성 강화에 기여.",
          "회사 분할 과정에서 이관된 기존 서브 페이지들의 레거시(더티코드) 소스를 클린코드로 전면 리팩토링하여 추후 유지보수성 및 협업 생산성을 획기적으로 향상.",
          "기존 PHP 기반의 폐쇄적인 캘린더를 모던한 flatpickr 라이브러리로 전면 교체하여 사용자 편의성을 고려한 UI/UX 개선 완수.",
          "교체된 캘린더 컴포넌트에 공공 API를 연동하여 실시간 공휴일 자동 표시 기능을 동적으로 구현함으로써 서비스의 실용성과 기능적 완성도 제고.",
        ],
      },
    ],
  },

  genesis: {
    title: "Genesis 2.0 Global - 다국어(RTL) 대응 및 현지화 퍼블리싱",
    period: "2021.07 — 2021.08",
    members: "퍼블리셔 3명",
    role: "다국어 · RTL 현지화 퍼블리싱",
    description:
      "현대자동차의 독립 럭셔리 브랜드 '제네시스'의 글로벌 브랜드 정체성을 전파하고 각 국가별(북미, 유럽, 중동, 아시아 등) 웹사이트를 유기적으로 연결하는 글로벌 통합 온라인 플랫폼입니다.",
    stacks: [
      "RTL (Right-to-Left)",
      "Localization",
      "Global Guideline",
      "UI Consistency",
      "Cross-Cultural Design",
      "Multi-Country Rollout",
    ],
    links: [
      {
        label: "Live ↗",
        url: "https://www.genesis.com/sa-dammam/ar/main.html",
      },
    ],
    images: ["/assets/projects/genesis_detail.png"],
    features: [
      {
        contributions: [
          "중동 6개국, 총 9개 사이트의 글로벌 웹사이트 리뉴얼 프로젝트에 퍼블리셔로 참여.",
          "다양한 언어권과 문화권에 대응하기 위해 UI 구성과 레이아웃 구조를 현지 사용자 환경에 맞춰 반응형으로 설계, 디자인 가이드와 글로벌 컴포넌트 기준에 따라 LTR(Left-to-Right) 및 RTL(Right-to-Left) 양방향 템플릿을 구성.",
          "기획자, 디자이너, 개발자 등 각 부서와의 긴밀한 협업을 통해 기획 의도를 명확히 이해, 지역별 맞춤형 콘텐츠가 UI에 잘 반영될 수 있도록 퍼블리싱과 유지보수를 주도적으로 수행.",
        ],
        result: [
          "복잡한 구조의 글로벌 사이트를 현지 언어와 사용자 흐름에 맞게 정리하여, 아랍어권 등 RTL 언어를 사용하는 국가에서도 일관된 사용자 경험을 제공할 수 있도록 UI를 구성",
          "언어, 방향, 브라우저 환경 등 다양한 조건에 따른 UI 반응성과 템플릿 유연성 확보를 통해 사이트의 완성도와 접근성을 높였으며, 결과적으로 중동 전역의 사이트가 예정 일정 내 성공적으로 롤아웃.",
          "해외 사용자 중심의 설계 경험을 통해 글로벌 웹 프로젝트의 흐름을 이해하고, 국가별 콘텐츠 요구사항을 조율하는 실전 경험을 쌓을 수 있었음.",
        ],
      },
    ],
  },

  lotte: {
    title: "롯데인터넷면세점",
    period: "2019.01 — 2020.09",
    members: "퍼블리셔 약 10명",
    role: "글로벌 5개 채널의 반응형 이벤트 페이지 퍼블리싱 전담 및 마케팅 특화 인터랙티브 UI/UX 애니메이션 구현.",
    description:
      "5개 국어(국·영·일·중 간/번체)로 서비스되는 대한민국 대표 글로벌 이커머스 플랫폼으로, 대규모 트래픽 환경에서 실시간 마케팅 캠페인과 고도화된 인터랙티브 이벤트 페이지를 제공하는 면세 쇼핑 서비스입니다.",
    stacks: ["Interactive UI", "HTML5/CSS3", "Animation", "웹 웹접근성(WA)"],
    links: [
      { label: "Live ↗", url: "https://kor.lottedfs.com/kr" },
      {
        label: "GitHub",
        url: "https://github.com/joara-frontend/clone-lotte",
      },
    ],
    images: [
      "/assets/projects/lotte_detail_01.png",
      "/assets/projects/lotte_detail_02.png",
    ],
    features: [
      {
        contributions: [
          "롯데인터넷면세점 국문, 영문, 일문, 중문(간체/번체) 총 5개 언어 사이트의 혜택 및 이벤트 페이지 퍼블리싱 유지보수 담당.",
          "웹과 웹앱 환경에 최적화된 반응형 구조 및 크로스 플랫폼 퍼블리싱 수행.",
          "마케팅팀에서 요청한 기획서에 따라 이벤트 페이지를 빠르게 구현하고 시각적 흥미를 유도하기 위해 다양한 CSS 및 JavaScript 기반의 애니메이션을 적용.",
          "검색엔진 노출을 고려하여 대체 텍스트 및 시맨틱 마크업을 철저히 반영.",
          "캠페인 성격에 맞춰 시기에 따라 스크롤 트리거, 호버 인터랙션, 타이밍 기반 모션 효과 등 적용.",
        ],
        result: [
          "애니메이션 요소를 활용한 시각적 임팩트로 고객 반응률 향상.",
          "각국 사용자 환경에 맞는 페이지 구성 및 콘텐츠 최적화로 글로벌 사용자 경험 일관성 유지.",
          "빠른 퍼블리싱 대응 및 SEO 최적화로 검색 노출률 및 클릭 전환율 개선에 기여.",
          "마케팅과 퍼블리싱 간 협업 체계를 강화하며 다양한 이벤트 운영의 퍼포먼스를 안정적으로 지원.",
        ],
      },
    ],
  },

  jt: {
    title: "JT 금융그룹",
    period: "2017.04 — 2018.01",
    members: "퍼블리셔 및 프론트엔드 개발자 1명 (단독)",
    role: "JT금융그룹 메인 리뉴얼 및 왕왕 콘테스트(시즌 1·2) 등 이벤트들의 반응형 웹 퍼블리싱 및 프론트엔드 개발 100% 전담.",
    description:
      "과거 JT친애저축은행, JT저축은행, JT캐피탈 등 한국 내 계열사를 하나로 통합하여 그룹의 정체성과 신뢰도를 홍보하던 종합 금융그룹의 브랜드 포털 웹사이트입니다.",
    stacks: [
      "Node.js ",
      "Responsive UI",
      "Zeplin",
      "UI/UX Publishing",
      "Frontend Development",
    ],
    images: [
      "/assets/projects/jt_detail_01.jpg",
      "/assets/projects/jt_detail_02.jpg",
    ],
    features: [
      {
        contributions: [
          "기획자와의 직접 소통을 통해 프로젝트 방향을 파악하고 콘테스트 페이지 기획-디자인-퍼블리싱 전 과정을 단독 수행.",
          "왕왕 콘테스트 1·2회차의 퍼블리싱 및 프론트엔드 개발 100% 참여, 핵심 콘텐츠의 구조와 기능 구현 주도.",
          "Node.js 환경에서의 운영 경험이 없어도 직접 학습하며 새로운 기술에 유연하게 대응, 실무 적용까지 성공적으로 수행.",
        ],
        result: [
          "시즌2 전체 콘테스트 운영과 일정 관리를 통해 프로젝트 안정성과 효율성 향상.",
          "고객사 요청사항에 따른 빠른 대응 및 커스터마이징 능력 강화.",
          "새로운 프레임워크(Node.js) 기반 프로젝트에 빠르게 적응하며 기술 확장성과 문제 해결 역량 입증.",
        ],
      },
    ],
  },

  root: {
    title: "루트에너지",
    period: "2017.01 — 2018.01",
    members: "개발자 2명",
    role: "UI 퍼블리싱 전담 및 프론트엔드 개발 참여 (퍼블리싱 100%, 프론트엔드 50% 기여)",
    description:
      "시민 참여형 재생에너지 투자 및 자산 관리를 제공하는 에너지 핀테크 플랫폼으로, 일반 사용자용 반응형 투자 대시보드와 복잡한 채권 관리를 위한 어드민 백오피스 시스템이 핵심인 웹 서비스입니다.",
    stacks: [
      "React",
      "Responsive UI",
      "Admin 웹 플랫폼",
      "퍼블리싱 & 프론트 전담",
    ],
    links: [
      {
        label: "Live ↗",
        url: "https://www.rootenergy.co.kr/",
      },
    ],
    images: [
      "/assets/projects/root_detail_01.jpg",
      "/assets/projects/root_detail_02.jpg",
    ],
    features: [
      {
        contributions: [
          "홈페이지 구축 시 사용자 페이지뿐 아니라 어드민(Admin) 페이지까지 함께 퍼블리싱 및 프론트엔드 작업 진행.",
          "React 기반 구조를 학습하며 컴포넌트 단위 개발 방식에 적응하고 실무에 바로 적용.",
          "인터랙션 요소와 UI 개선 중심으로 사용자 및 관리자 모두를 고려한 화면 구성에 기여.",
          "프로젝트 시작부터 유지보수까지 전반적으로 참여하며 사이트 완성도 향상.",
        ],
        result: [
          "어드민 페이지까지 포함한 전 영역 퍼블리싱 경험 확보로 다양한 사용자 환경에 대한 이해도 향상.",
          "UI 및 인터랙션 개선을 통해 사용자 만족도 상승 및 업무 편의성 개선.",
          "React 기반 퍼블리싱 및 기능 구현 경험을 통해 기술 확장성과 개발 협업 역량 강화.",
        ],
      },
    ],
  },

  omron: {
    title: "오므론 헬스케어",
    period: "2016.01 — 2018.01",
    members: "개발자 2명",
    role: "PHP 환경 기반의 반응형 UI 퍼블리싱 전담 및 이메일 템플릿을 포함한 레거시 코드 리팩토링(기여도 50%)",
    description:
      "세계적인 가정용 의료기기(혈압계, 네블라이저 등) 브랜드의 한국 공식 웹사이트로, 글로벌 가이드라인에 맞춘 제품 정보 제공과 대고객 커뮤니케이션을 위한 PHP 기반의 반응형 브랜드 포털입니다.",
    stacks: ["PHP", "Responsive UI", "UI 리팩토링"],
    links: [
      {
        label: "Live ↗",
        url: "https://www.omron-healthcare.co.kr/",
      },
    ],
    images: [
      "/assets/projects/omron_detail_01.jpg",
      "/assets/projects/omron_detail_02.jpg",
      "/assets/projects/omron_detail_03.jpg",
    ],
    features: [
      {
        contributions: [
          "이메일 페이지 포함 사이트의 리뉴얼 프로젝트에 참여하여 PHP 기반 구조로 전환된 전체 페이지의 퍼블리싱 작업 담당.",
          "리뉴얼 완료 이후에도 유지보수 전반에 지속적으로 참여하며 사이트의 안정성과 가독성 확보를 위한 코드 개선 및 구조 정리 수행.",
          "불필요한 중복 코드 제거 및 구조 재정비를 통해 유지보수가 용이한 퍼블리싱 환경 구축.",
        ],
        result: [
          "PHP 기반 사이트의 구조 최적화 및 코드 리팩토링을 통해 안정성 확보.",
          "페이지 로딩 속도 개선 및 브라우저 호환성 강화.",
          "이메일 페이지와 기타 콘텐츠의 시각적 완성도 및 기능적 일관성 유지로 브랜드 신뢰도 향상에 기여.",
        ],
      },
    ],
  },
};
