import globalnomadThumbnail from "../assets/images/globalnomad_thumbnail.png";
import globalnomadDetail01 from "../assets/images/globalnomad_detail_01.png";
import globalnomadDetail02 from "../assets/images/globalnomad_detail_02.png";
import globalnomadDetail03 from "../assets/images/globalnomad_detail_03.png";
import globalnomadDetail04 from "../assets/images/globalnomad_detail_04.png";
import globalnomadDetail05 from "../assets/images/globalnomad_detail_05.gif";
import globalnomadDetail06 from "../assets/images/globalnomad_detail_06.png";
import globalnomadDetail07 from "../assets/images/globalnomad_detail_07.png";
import taskifyThumbnail from "../assets/images/taskify_thumbnail.png";
import taskifyDetail01 from "../assets/images/taskify_detail_01.png";
import taskifyDetail02 from "../assets/images/taskify_detail_02.png";
import taskifyDetail03 from "../assets/images/taskify_detail_03.png";
import taskifyDetail04 from "../assets/images/taskify_detail_04.png";
import taskifyDetail05 from "../assets/images/taskify_detail_05.png";
import taskifyDetail06 from "../assets/images/taskify_detail_06.png";
import taskifyDetail07 from "../assets/images/taskify_detail_07.png";
import taskifyDetail08 from "../assets/images/taskify_detail_08.png";
import hiddenThumbnail from "../assets/images/hidden_thumbnail.png";
import hiddenDetail01 from "../assets/images/hidden_detail_01.png";
import hiddenDetail02 from "../assets/images/hidden_detail_02.png";
import hiddenDetail03 from "../assets/images/hidden_detail_03.png";
import hiddenDetail04 from "../assets/images/hidden_detail_04.png";
import genesisThumbnail from "../assets/images/genesis_thumbnail.png";
import genesisetail01 from "../assets/images/genesis_detail_01.png";
import kimThumbnail from "../assets/images/kim_thumbnail.webp";
import kimDetail01 from "../assets/images/kim_detail_01.png";
import kimDetail02 from "../assets/images/kim_detail_02.png";
import kimDetail03 from "../assets/images/kim_detail_03.png";

export const PROJECT_DATA = {
  GLOBALNOMAD: {
    thumbnail: globalnomadThumbnail,
    details: [
      {
        src: globalnomadDetail01,
        alt: "Git Flow 및 네이밍 컨벤션을 정의한 프로젝트 협업 가이드 문서",
      },
      {
        src: globalnomadDetail02,
        alt: "애자일 기반의 프로젝트 마일스톤 및 태스크 관리 문서",
      },
      {
        src: globalnomadDetail03,
        alt: "Next.js API Routes와 BFF 패턴을 활용하여 서버 사이드에서 안전하게 액세스 토큰을 갱신하는 tryRefresh 함수 로직",
      },
      {
        src: globalnomadDetail04,
        alt: "TanStack Query의 useQueries를 사용하여 여러 도메인 데이터를 병렬로 페칭하고 대시보드 로딩 성능을 최적화한 커스텀 훅 코드",
      },
      {
        src: globalnomadDetail05,
        alt: "서비스의 아이덴티티를 반영한 Lottie 애니메이션을 활용하여 데이터 로딩 시 사용자의 체감 대기 시간을 단축하는 인터랙티브",
      },
      {
        src: globalnomadDetail06,
        alt: "로컬 스토리지를 활용하여 이전 로그인 정보를 유지함으로써 사용자 편의성을 높인 이메일 기억하기 기능 구현 화면",
      },
      {
        src: globalnomadDetail07,
        alt: "외부 라이브러리 없이 정규 표현식을 활용하여 입력값에 따라 실시간으로 보안 강도를 시각화해 주는 패스워드 유효성 검사 UI",
      },
    ],
  },
  TASKIFY: {
    thumbnail: taskifyThumbnail,
    details: [
      {
        src: taskifyDetail01,
        alt: "React Hook Form의 Controller 패턴을 적용하고 표준화된 인터페이스를 갖춘 기본 텍스트 Input 컴포넌트 구현 코드",
      },
      {
        src: taskifyDetail02,
        alt: "엔터 입력 시 즉각적인 시각적 태그 생성 및 Zod의 배열 스키마를 활용해 데이터 정합성을 보장하는 고도화된 Tag Input 컴포넌트 비즈니스 로직 코드",
      },
      {
        src: taskifyDetail03,
        alt: "파일 프리뷰를 위한 임시 객체 생성 및 Zod의 스키마 정제를 통해 파일 타입과 용량 제한을 처리하는 다형성 이미지 Input 컴포넌트 구현 코드",
      },
      {
        src: taskifyDetail04,
        alt: "React Hook Form을 유효성 검사를 처리하도록 표준화한 Datepicker Input 컴포넌트 구현 코드",
      },
      {
        src: taskifyDetail05,
        alt: "Zod 스키마와 연동하여 유효성 검사 에러를 렌더링하도록 일관된 규격으로 설계된 Textarea 컴포넌트 구현 코드",
      },
      {
        src: taskifyDetail06,
        alt: "컴포넌트 언마운트 또는 이미지 삭제 시 useEffect를 활용하여 URL.revokeObjectURL()을 명시적으로 호출하고 브라우저 메모리 누수를 방지하는 자원 최적화 코드",
      },
      {
        src: taskifyDetail07,
        alt: "엔터 입력 시 즉각적인 태그 생성 및 글자 수에 따라 배경 및 폰트 컬러를 동적으로 매핑하여 직관성을 높인 인터랙티브 Tag UI 구현 화면",
      },
      {
        src: taskifyDetail08,
        alt: "Intersection Observer 기반의 useInfiniteScroll 훅을 활용하여 댓글 목록을 커서 기반으로 병렬 페칭하고 초기 로딩 속도를 최적화한 무한 스크롤 구현 코드",
      },
    ],
  },
  HIDDEN: {
    thumbnail: hiddenThumbnail,
    details: [
      {
        src: hiddenDetail01,
        alt: "기존 통합 법무 시스템에서 분리하여 단독 브랜드로 오픈한 특허법인 테헤란의 공식 홈페이지 및 레거시 코드 리팩터링을 통한 유지보수성 최적화 화면",
      },
      {
        src: hiddenDetail02,
        alt: "형사, 민사, 이혼 등 11개의 전문 분야별 사이트를 일관된 디자인 시스템 안에서 효율적으로 개별 구축한 법무법인 트라이원스의 반응형 웹 플랫폼",
      },
      {
        src: hiddenDetail03,
        alt: "법무법인 이든의 브랜드 아이덴티티를 반영하여 완전히 새롭게 설계된 현대적이고 세련된 디자인의 신규 퍼블리싱 인터페이스 화면",
      },
      {
        src: hiddenDetail04,
        alt: "9개의 분야별 전문 사이트 구축과 중간 리뉴얼을 통해 지속적으로 사용자 경험을 개선하고 인터페이스를 고도화한 법무법인 영웅의 웹 서비스",
      },
    ],
  },
  GENESIS: {
    thumbnail: genesisThumbnail,
    details: [
      {
        src: genesisetail01,
        alt: "제네시스 글로벌 웹사이트의 글로벌 대응을 위해 레이아웃 및 타이포그래피를 반전 처리한 RTL(Right-to-Left) UI 구현 화면",
      },
    ],
  },
  KIM: {
    thumbnail: kimThumbnail,
    details: [
      {
        src: kimDetail01,
        alt: "Node.js 환경에서 구축된 JT왕왕 서비스의 효율적인 데이터 처리 및 사용자 친화적인 이벤트 랜딩 페이지 화면",
      },
      {
        src: kimDetail02,
        alt: "React 기반의 컴포넌트 설계를 통해 구현한 루트에너지의 재생에너지 시민 참여형 크라우드 펀딩 웹페이지 화면",
      },
      {
        src: kimDetail03,
        alt: "PHP를 활용하여 구축한 오므론 헬스케어의 안정적인 제품 정보 전달 및 사용자 맞춤형 헬스케어 서비스 웹페이지 화면",
      },
    ],
  },
};
