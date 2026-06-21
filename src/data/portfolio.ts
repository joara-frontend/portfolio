export interface TimelineItem {
  period: string;
  company: string;
  dept: string;
  desc?: string;
  role?: string;
  works?: string[];
}

export interface Skill {
  name: string;
  c1: string;
  c2: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  en: string;
  thumb: string;
  desc: string;
  path?: string;
  links?: ProjectLink[];
}

export const career: TimelineItem[] = [
  {
    period: "2024.07 — 2025.05",
    company: "팀히든",
    dept: "디자인IT팀 · 대리 · 퍼블리셔",
    role: "법무·특허·세무 전문 웹 플랫폼 구축 및 유지보수 (UI/UX 퍼블리싱 전담)",
    works: [
      "법무·특허·세무법인 테헤란의 분사 전략에 따른 계열사별 독립 홈페이지 및 통합 플랫폼 10여 개 구축.",
      "SEO 최적화(메타태그 및 구조 개선)를 수행하여 검색 엔진 노출 지표 향상.",
      "Figma 기반의 협업 프로세스를 주도하여 디자인 재현율 100% 달성.",
    ],
  },
  {
    period: "2020.10 — 2022.05",
    company: "더제이",
    dept: "퍼블리싱팀 · 주임",
    role: "기업 홈페이지 신규 구축 및 UI 퍼블리싱",
    works: [
      "다양한 디바이스 환경에 대응하는 반응형 웹 표준 수립 및 기획 의도에 최적화된 인터랙티브 UI 구현.",
    ],
  },
  {
    period: "2019.01 — 2020.09",
    company: "아이피그룹",
    dept: "퍼블리싱팀 · 사원",
    role: "롯데인터넷면세점 이벤트 페이지 퍼블리싱",
    works: [
      "롯데인터넷면세점 플랫폼의 시즌별 프로모션 및 이벤트 웹 페이지를 기획 및 디자인 사양에 맞춰 마크업 진행.",
    ],
  },
  {
    period: "2016.10 — 2018.01",
    company: "김지민앤컴퍼니",
    dept: "개발팀 · 사원",
    role: "웹 퍼블리싱 및 프론트엔드 기능 구현",
    works: [
      "PHP, React, Node.js 등 프로젝트별 다양한 기술 스택 환경에서 웹사이트 구축, 리뉴얼 및 프로모션 페이지 제작 전반 수행.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2025.10 — 2026.04",
    company: "코드잇",
    dept: "프론트엔드 부트캠프",
    desc: "React·TypeScript 등 최신 기술 스택을 학습, 이를 활용한 컴포넌트 중심의 웹 프로젝트를 수행.",
  },
  {
    period: "2016.02 — 2016.08",
    company: "KG아이티뱅크",
    dept: "자바 SW 개발자 양성 과정",
    desc: "Java·Spring 중심의 웹 개발 기초를 학습, 서버 환경과 데이터베이스 동작 원리를 이해.",
  },
  {
    period: "2013.03 — 2016.02",
    company: "인덕대학교",
    dept: "정보통신과",
    desc: "정보통신 전반의 기초 이론과 실무를 학습, 웹 개발의 토대를 마련.",
  },
];

export const skills: Skill[] = [
  { name: "React", c1: "#9fd8ff", c2: "#5cc4f2" },
  { name: "Next.js", c1: "#cfd3da", c2: "#2b2d42" },
  { name: "TypeScript", c1: "#9fb2ff", c2: "#3b6bd6" },
  { name: "JavaScript", c1: "#ffe79a", c2: "#f2c94c" },
  { name: "HTML5", c1: "#ffc0a0", c2: "#ff7a45" },
  { name: "CSS3", c1: "#a6c8ff", c2: "#4a7bf0" },
  { name: "Tailwind CSS", c1: "#a6ecf0", c2: "#3bc4d6" },
  { name: "Git", c1: "#ffb9a6", c2: "#ef6c4d" },
  { name: "shadcn/ui", c1: "#d6d9e0", c2: "#3a3d5c" },
  { name: "TanStack Query", c1: "#ffc6a0", c2: "#ff8a4d" },
  { name: "React Hook Form", c1: "#ffc4d6", c2: "#ec5f8a" },
  { name: "Zod", c1: "#b9b0ff", c2: "#6c5ce7" },
];

export const projectsPrimary: Project[] = [
  {
    title: "글로벌노마드",
    en: "GlobalNomad",
    thumb: "/assets/projects/globalnomad_thumbnail.png",
    desc: "여행 상품 등록 및 예약 관리 기능을 제공하는 체험 중심의 여행 커뮤니티 플랫폼.",
    path: "/portfolio/globalnomad",
    links: [
      {
        label: "Live ↗",
        href: "https://21-sprint-1team-globalnomad.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/joara-frontend/21-sprint-1team-globalnomad",
      },
    ],
  },
  {
    title: "태스키파이",
    en: "Taskify",
    thumb: "/assets/projects/taskify_thumbnail.png",
    desc: "칸반 보드 형식을 활용한 팀 프로젝트 일정 및 태스크 관리 대시보드.",
    path: "/portfolio/taskify",
    links: [
      { label: "Live ↗", href: "https://21-sprint-2-team-taskify.vercel.app/" },
      {
        label: "GitHub",
        href: "https://github.com/joara-frontend/21-Sprint-2Team_Taskify",
      },
    ],
  },
  {
    title: "법무·특허·세무 플랫폼",
    en: "Legal · Patent · Tax",
    thumb: "/assets/projects/lawfirm_thumbnail.png",
    desc: "법무·특허·세무 전문 플랫폼을 통합 구축하고 SEO를 최적화한 퍼블리싱 프로젝트.",
    path: "/portfolio/lawfirm",
    links: [
      { label: "대표 Live ↗", href: "https://law-eden.com/" },
      {
        label: "대표 GitHub",
        href: "https://github.com/joara-frontend/rebuild-eden",
      },
    ],
  },
  {
    title: "Genesis 2.0 Global",
    en: "Localization",
    thumb: "/assets/projects/genesis_thumbnail.png",
    desc: "다국어(RTL) 대응 및 현지화를 적용한 제네시스 글로벌 사이트 퍼블리싱.",
    path: "/portfolio/genesis",
    links: [
      {
        label: "Live ↗",
        href: "https://www.genesis.com/sa-dammam/ar/main.html",
      },
    ],
  },
];

export const projectsMore: Project[] = [
  {
    title: "롯데인터넷면세점",
    en: "Localization",
    thumb: "/assets/projects/lotte_thumbnail.jpg",
    desc: "롯데인터넷면세점 국문, 영문, 일문, 중문(간체/번체) 총 5개 언어 사이트의 혜택 및 이벤트 페이지 퍼블리싱 유지보수.",
    path: "/portfolio/lotte",
    links: [
      {
        label: "Live ↗",
        href: "https://kor.lottedfs.com/kr/shopmain/home",
      },
    ],
  },
  {
    title: "JT 금융그룹",
    en: "Client Sites",
    thumb: "/assets/projects/jt_thumbnail.jpg",
    desc: "홈페이지 리뉴얼 이후 사이트 전체 운영 및 유지보수 담당.",
    path: "/portfolio/jt",
  },
  {
    title: "루트에너지",
    en: "Client Sites",
    thumb: "/assets/projects/root_thumbnail.png",
    desc: "홈페이지 구축 시 사용자 페이지와 어드민 페이지 함께 퍼블리싱 및 프론트엔드 작업 진행.",
    path: "/portfolio/root",
    links: [{ label: "Live ↗", href: "https://rootenergy.kr/" }],
  },
  {
    title: "오므론헬스케어",
    en: "Client Sites",
    thumb: "/assets/projects/omron_thumbnail.jpg",
    desc: "리뉴얼 프로젝트에 참여하여 PHP 기반 구조로 전환된 전체 페이지의 퍼블리싱 작업 담당.",
    path: "/portfolio/omron",
    links: [
      {
        label: "Live ↗",
        href: "https://www.omron-healthcare.co.kr/main",
      },
    ],
  },
];
