import subHeaderArr from "../assets/icons/sub_header_arrow.svg";
import gitHubIco from "../assets/icons/github.svg";
import mailIco from "../assets/icons/mail.svg";
// import notionIco from "../assets/icons/notion.svg";
import { PROJECT_DATA } from "../constants/projects";
import { Layers, Sprout, Trees } from "lucide-react";
import AccordionItem from "./AccordionItem";

function About() {
  return (
    <>
      <div className="flex items-center gap-[10px] h-[40px] px-[21px] bg-surface">
        <img src={subHeaderArr} />
        <h2 className="text-[19.4px] tracking-[-0.52px] font-bold text-main">
          JOARA
        </h2>
      </div>
      <div className="min-h-[calc(100vh-88px)] bg-base">
        <div className="flex flex-col gap-[32px] max-w-[1100px] w-full px-[24px] pt-[65px] pb-[98px] mx-auto bg-surface">
          <section className="pb-[25px]">
            <div className="flex flex-col md:flex-row justify-between items-center pb-[32px]">
              <h2 className="order-2 md:order-1 text-[89px] md:text-[109px] font-bold leading-[112px] text-main">
                ARA.log
              </h2>
              <ul className="order-1 md:order-2 flex flex-col gap-[4px] w-full md:w-auto text-[13.7px] font-regular text-point">
                <li>
                  <a
                    className="flex gap-[10px] items-center"
                    href="https://github.com/joara-frontend"
                    target="_blank"
                  >
                    <img
                      className="w-[20px]"
                      src={gitHubIco}
                      alt="깃헙 아이콘"
                    />
                    깃헙 링크
                  </a>
                </li>
                <li>
                  <a
                    className="flex gap-[10px] items-center"
                    href="mailto:whdkfk110@naver.com"
                  >
                    <img className="w-[20px]" src={mailIco} alt="메일 아이콘" />
                    메일 주소
                  </a>
                </li>
                {/* <li>
                  <a
                    className="flex gap-[10px] items-center"
                    href=""
                    target="_blank"
                  >
                    노션 링크
                    <img
                      className="w-[20px]"
                      src={notionIco}
                      alt="노션 아이콘"
                    />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-col gap-[20px] text-[16px] font-regular text-sub pt-[25px]">
              <div className="text-[20px] font-regular text-point">
                "5년의 깊은 뿌리로 단단한 숲을 일구고자 하는,{" "}
                <b>프론트엔드 조아라</b>입니다"
              </div>
              <div>
                웹 퍼블리셔로서 5년 넘게 쌓아온 탄탄한 UI 구현 능력과, 방송 작가
                경력에서 얻은 탁월한 데이터 구조화 역량을 바탕으로
                <br />
                '비즈니스의 의도를 정확한 코드로 구현하는 개발자'가 되고자
                합니다.
              </div>
              <ul className="flex flex-col gap-[5px]">
                <li className="flex gap-[5px]">
                  <Sprout className="w-[24px] h-[24px]" />
                  롯데면세점, 제네시스 등 대규모·글로벌 플랫폼 구축 경험을 통해
                  어떤 브라우저 환경에서도 흔들리지 않는 UI 안정성과 크로스
                  브라우징 대응 능력을 갖췄습니다.
                </li>
                <li className="flex gap-[5px]">
                  <Layers className="w-[22px] h-[22px]" />
                  퍼블리싱 숙련도에 안주하지 않고 React, TypeScript, Next.js를
                  숙달하여 컴포넌트 기반 설계와 성능 최적화를 고민하는 개발자로
                  성장했습니다.{" "}
                </li>
                <li className="flex gap-[5px]">
                  <Trees className="w-[24px] h-[24px]" />
                  방송 작가 시절 체득한 탁월한 커뮤니케이션 역량과 외부
                  클라이언트와 직접 소통하며 쌓은 비즈니스 감각은,
                  <br />
                  기획자와 디자이너의 의도를 가장 정확하게 기술로 치환해내는
                  저만의 독보적인 강점입니다.
                </li>
              </ul>
              <div className="font-bold">
                어떤 환경에서도 빠르게 적응하며, 동료들이 믿고 협업할 수 있는
                든든한 파트너가 되겠습니다.
              </div>
            </div>
          </section>
          <section>
            <h2 className="flex gap-[5px] items-center h-[36px] text-[20px] font-bold text-main mb-[20px] border-b border-divider">
              <span className="text-point">##</span>PROJECT
            </h2>
            <div className="flex flex-col gap-[15px] text-main">
              <div className="group/outer pt-[10px] pb-[24px]">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-[152px]">
                    <div className="w-[56px] h-[56px] mb-[6px]">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={PROJECT_DATA.GLOBALNOMAD.thumbnail}
                        alt="글로벌노마드 썸네일"
                      />
                    </div>
                    <p className="text-[13px] text-sub">26.03.12 - 26.04.08</p>
                  </div>
                  <div className="w-full font-regular">
                    <div className="pb-[5px] border-b border-white border-dotted">
                      <h3 className="text-[20px] font-bold">
                        글로벌노마드 (GlobalNomad)
                      </h3>
                      <p className="text-[14px]">
                        여행 상품 등록 및 예약 관리 기능을 제공하는 체험 중심의
                        여행 커뮤니티 플랫폼
                      </p>
                      <span className="text-[13px] text-sub">
                        역할: Team Lead, Auth(회원가입/로그인), 내 정보 수정,
                        활동 대시보드(히스토리/리포트)
                      </span>
                      <ul className="flex flex-wrap gap-[3.5px] text-[12px] font-regular text-main opacity-[20%] group-hover/outer:opacity-[100%] ">
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Next.js(App Router)
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          TypeScript
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          TanStack Query
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Tailwind CSS
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          React Hook Form / Zod
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          JWT 인증
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-col gap-[14px] pt-[17px] pb-[27px]">
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="기술 리더십 및 프로젝트 협업 시스템 구축">
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[0].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[0].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[1].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[1].alt}
                            />
                          </div>
                          팀원 간 개발 환경 불일치로 인한 커뮤니케이션 비용 발생
                          및 일정 관리의 불확실성 우려.
                          <br />
                          - 노션을 활용해 Git Flow, 커밋 컨벤션, 폴더 구조 및
                          네이밍 규칙을 문서화하여 협업 표준 수립.
                          <br />
                          - Vercel 기반 배포 환경을 조기에 구축하고, 공통 Axios
                          인스턴스 및 인증 인터페이스를 선제적으로 설계하여
                          팀원들이 비즈니스 로직에만 집중할 수 있는 환경 조성.
                          <br />
                          <b>
                            초기 설정 시간을 단축하고 팀 내 기술적 상향 평준화를
                            주도하여, 지연 없는 안정적인 마일스톤 달성.
                          </b>
                        </AccordionItem>
                      </li>
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="BFF 기반의 보안 강화 인증 아키텍처 및 Silent Refresh 설계">
                          <div className="mb-[30px]">
                            <img
                              className="max-w-[300px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[2].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[2].alt}
                            />
                          </div>
                          클라이언트 단의 토큰 관리로 인한 보안 취약점 및 토큰
                          만료 시 사용자 흐름이 끊기는 UX 문제 인지.
                          <br />
                          - Next.js API Routes를 활용한 BFF 프록시 레이어 구축.
                          <br />
                          - 클라이언트 대신 서버 사이드에서 인증 쿠키를
                          관리하고, Axios Interceptor를 활용해 토큰 만료 시
                          자동으로 재발급받는 Silent Refresh 로직 구현.
                          <br />
                          <b>
                            토큰 탈취 위험을 최소화함과 동시에 만료 시에도
                            재로그인 없는 심리스한 서비스 환경 제공.
                          </b>
                        </AccordionItem>
                      </li>
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="데이터 대시보드화를 통한 서비스 활성화 및 로직 캡슐화">
                          <div className="mb-[30px]">
                            <img
                              className="max-w-[350px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[3].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[3].alt}
                            />
                          </div>
                          단순 예약 기능을 넘어 사용자의 지속적인 참여를 유도할
                          수 있는 동기 부여 요소와 복잡한 데이터 가공 로직의
                          분리 필요. <br />
                          - 사용자의 활동 데이터를 분석하여 시각화한 리포트
                          페이지와 성취 조건을 기반으로 한 뱃지 시스템을
                          기획·구현하여 서비스 활성화 유도.
                          <br />
                          - useQueries를 통한 데이터 병렬 페칭 및 Custom Hook
                          패턴 적용으로 UI 컴포넌트와 비즈니스 로직을 완벽히
                          분리.
                          <br />
                          <b>
                            복잡한 히스토리 데이터의 관리 효율을 극대화하고,
                            단순 홈페이지를 넘어 데이터 중심의 사용자 경험 제공.
                          </b>
                        </AccordionItem>
                      </li>
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="고도화된 인터랙션 및 피드백 시스템">
                          <div className="mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[4].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[4].alt}
                            />
                          </div>
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[300px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[5].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[5].alt}
                            />
                            <img
                              className="max-w-[300px]"
                              src={PROJECT_DATA.GLOBALNOMAD.details[6].src}
                              alt={PROJECT_DATA.GLOBALNOMAD.details[6].alt}
                            />
                          </div>
                          대규모 데이터 로딩 및 인증 과정에서의 정적 화면이 주는
                          체감 대기 시간 증가 및 레이아웃 시프트 발생. 분리
                          필요. <br />
                          - Lottie 애니메이션과 Skeleton UI를 도입하여 시각적
                          즐거움을 제공하고, 로컬 스토리지를 활용한 '이메일
                          기억하기' 및 라이브러리 없는 '비밀번호 강도 체크' 로직
                          등 사용자 편의 기능 직접 구현 및 분리. <br />
                          <b>
                            서비스 완성도를 높이고 사용자의 심리적 대기 시간을
                            단축하여 이탈률 감소에 기여.
                          </b>
                        </AccordionItem>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group/outer pt-[10px] pb-[24px]">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-[152px]">
                    <div className="w-[56px] h-[56px] bg-white mb-[6px]">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={PROJECT_DATA.TASKIFY.thumbnail}
                        alt="테스키파이 썸네일"
                      />
                    </div>
                    <p className="text-[13px] text-sub">26.02.04 - 26.02.23</p>
                  </div>
                  <div className="w-full font-regular">
                    <div className="pb-[5px] border-b border-white border-dotted">
                      <h3 className="text-[20px] font-bold">
                        태스키파이 (Taskify)
                      </h3>
                      <p className="text-[14px]">
                        칸반 보드 형식을 활용한 팀 프로젝트 일정 및 태스크 관리
                        대시보드
                      </p>
                      <span className="text-[13px] text-sub">
                        역할: 카드 및 댓글 CRUD, 고도화된 다형성 인풋 시스템
                        설계, 5종 이상의 폼 성능 최적화
                      </span>
                      <ul className="flex flex-wrap gap-[3.5px] text-[12px] font-regular text-main opacity-[20%] group-hover/outer:opacity-[100%] ">
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Next.js(Pages Router)
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          TypeScript
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Axios
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Context API
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Tailwind CSS
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          React Hook Form / Zod
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Jira & Agile
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-col gap-[14px] pt-[17px] pb-[27px]">
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="React Hook Form & Zod 기반의 고도화된 폼 시스템 설계">
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[0].src}
                              alt={PROJECT_DATA.TASKIFY.details[0].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[1].src}
                              alt={PROJECT_DATA.TASKIFY.details[1].alt}
                            />
                          </div>
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[2].src}
                              alt={PROJECT_DATA.TASKIFY.details[2].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[3].src}
                              alt={PROJECT_DATA.TASKIFY.details[3].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[4].src}
                              alt={PROJECT_DATA.TASKIFY.details[4].alt}
                            />
                          </div>
                          다양한 폼(회원가입, 카드 생성, 댓글 등)에서 유효성
                          검사 로직과 에러 핸들링이 파편화되어 유지보수 효율
                          저하.
                          <br />
                          - Controller 패턴과 TypeScript 제네릭을 활용하여 React
                          Hook Form과 Zod 스키마에 완벽히 대응하는 다형성 인풋
                          시스템 구축.
                          <br />
                          - 기본/비밀번호/이미지/날짜/태그 등 5종의 인풋을
                          동일한 인터페이스 규격으로 표준화하여 예측 가능한 개발
                          환경 조성.
                          <br />
                          - Zod의 superRefine을 활용해 복잡한 조건부 유효성
                          검사를 선언적으로 처리. <br />
                          <b>
                            복잡한 폼 로직 구현 시간을 50% 이상 단축하고, 팀 내
                            데이터 정합성 보장 및 협업 효율 극대화.
                          </b>
                        </AccordionItem>
                      </li>
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="브라우저 자원 관리를 통한 런타임 성능 최적화">
                          <div className="flex gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[5].src}
                              alt={PROJECT_DATA.TASKIFY.details[5].alt}
                            />
                          </div>
                          이미지 프리뷰 및 대규모 데이터 핸들링 시, 브라우저
                          메모리에 임시 객체가 누적되어 장시간 이용 시 성능 저하
                          및 메모리 누수 위험 발생.
                          <br />
                          - 이미지 삭제 및 컴포넌트 언마운트 시점에 점유 중인
                          임시 자원을 명시적으로 해제하여 시스템 메모리 부하
                          최소화.
                          <br />- 컴포넌트의 마운트 상태를 추적하는 가드 로직을
                          설계하여, 언마운트된 객체에 대한 잘못된 상태 업데이트
                          시도를 차단하고 런타임 에러 방지.
                          <br />
                          <b>
                            메모리 누수를 원천 차단하여 저사양 기기에서도 일관된
                            렌더링 성능 유지 및 서비스 안정성 확보.
                          </b>
                        </AccordionItem>
                      </li>
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="사용자 경험 중심의 인터랙티브 인터페이스 및 데이터 로딩 최적화">
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[6].src}
                              alt={PROJECT_DATA.TASKIFY.details[6].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.TASKIFY.details[7].src}
                              alt={PROJECT_DATA.TASKIFY.details[7].alt}
                            />
                          </div>
                          정적인 텍스트 입력 위주의 태그 인터랙션으로 인한
                          직관성 결여 및 대규모 데이터 로딩 시 발생하는 렌더링
                          병목 현상.
                          <br />
                          - 엔터 입력을 통해 즉각적으로 시각적 태그가 생성되는
                          UI를 구축하고, 유틸리티 함수를 통해 글자 수에 따라
                          배경 및 폰트 컬러를 자동으로 매핑하는 동적 스타일링
                          로직 구현.
                          <br />
                          - 브라우저 뷰포트를 감지하는 교차 관찰 메커니즘을
                          커스텀 훅으로 공통화하여, 필요한 시점에만 데이터를
                          페칭하는 효율적인 무한 스크롤 구조 설계.
                          <br />
                          <b>
                            불필요한 DOM 노드 생성 및 초기 데이터 통신량을
                            절감하여 로딩 속도를 개선하고, 사용자에게 끊김 없는
                            부드러운 인터랙션 경험 제공
                          </b>
                        </AccordionItem>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group/outer pt-[10px] pb-[24px]">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-[152px]">
                    <div className="w-[56px] h-[56px] bg-white mb-[6px]">
                      <img
                        className="w-full h-full object-contain object-center"
                        src={PROJECT_DATA.HIDDEN.thumbnail}
                        alt="팀히든 썸네일"
                      />
                    </div>
                    <p className="text-[13px] text-sub">2024.07 - 2025.05</p>
                  </div>
                  <div className="w-full font-regular">
                    <div className="pb-[5px] border-b border-white border-dotted">
                      <h3 className="text-[20px] font-bold">
                        [퍼블리싱] 법무·특허·세무 전문 플랫폼 통합 구축 및 SEO
                        최적화
                      </h3>
                      <ul className="flex flex-wrap gap-[3.5px] text-[12px] font-regular text-main opacity-[20%] group-hover/outer:opacity-[100%] ">
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Semantic Markup
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          SEO Optimization
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Component-Driven Design
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Web Performance
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Cross-Browsing
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Figma to Code
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-col gap-[14px] pt-[17px] pb-[27px]">
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem
                          title="기업 분할 일정에 맞춘 컴포넌트 중심의 설계로 단기간 내 다수 사이트의 안정적 런칭 및 운영 기반 마련.
"
                        >
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.HIDDEN.details[0].src}
                              alt={PROJECT_DATA.HIDDEN.details[0].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.HIDDEN.details[1].src}
                              alt={PROJECT_DATA.HIDDEN.details[1].alt}
                            />
                          </div>
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.HIDDEN.details[2].src}
                              alt={PROJECT_DATA.HIDDEN.details[2].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.HIDDEN.details[3].src}
                              alt={PROJECT_DATA.HIDDEN.details[3].alt}
                            />
                          </div>
                          기업 분할 일정에 맞춘 컴포넌트 중심의 설계로 단기간 내
                          다수 사이트의 안정적 런칭 및 운영 기반 마련.
                          <br />
                          레거시 코드와 신규 디자인 시스템을 유연하게 병행하여
                          작업 공수 최적화 및 UI 일관성 확보.
                          <br />
                          <b>
                            시맨틱 마크업 재정립과 메타데이터 동적 구조화를 통해
                            검색 노출 지표를 개선하고, 차세대 이미지 포맷 도입
                            및 페이로드 최적화로 페이지 로딩 속도 향상.
                          </b>
                        </AccordionItem>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group/outer pt-[10px] pb-[24px]">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-[152px]">
                    <div className="w-[56px] h-[56px] bg-white mb-[6px]">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={PROJECT_DATA.GENESIS.thumbnail}
                        alt="제네시스 썸네일"
                      />
                    </div>
                    <p className="text-[13px] text-sub">2021.07 - 2021.08</p>
                  </div>
                  <div className="w-full font-regular">
                    <div className="pb-[5px] border-b border-white border-dotted">
                      <h3 className="text-[20px] font-bold">
                        [퍼블리싱] Genesis 2.0 Global - 다국어(RTL) 대응 및
                        현지화
                      </h3>
                      <ul className="flex flex-wrap gap-[3.5px] text-[12px] font-regular text-main opacity-[20%] group-hover/outer:opacity-[100%] ">
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          RTL (Right-to-Left)
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Localization
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Global Guideline
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          UI Consistency
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Cross-Cultural Design
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Multi-Country Rollout
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-col gap-[14px] pt-[17px] pb-[27px]">
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="제네시스 글로벌 가이드라인 기반 중동 지역 다국어 홈페이지 롤아웃">
                          <div className="flex gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.GENESIS.details[0].src}
                              alt={PROJECT_DATA.GENESIS.details[0].alt}
                            />
                          </div>
                          기본 LTR 구조의 사이트를 아랍어 특성인 RTL 환경으로
                          전환하는 다국어 대응 작업 수행.
                          <br />
                          대응 작업 중, 레이아웃 깨짐 현상과 뒤집히면 안 되는
                          요소들의 예외 케이스 처리.
                          <br />
                          <b>
                            중동 6개국 9개 사이트의 성공적인 현지화 롤아웃 기여
                            및 글로벌 UI 일관성 유지.
                          </b>
                        </AccordionItem>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group/outer pt-[10px] pb-[24px]">
                <div className="flex flex-col md:flex-row">
                  <div className="min-w-[152px]">
                    <div className="w-[56px] h-[56px] bg-white mb-[6px]">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={PROJECT_DATA.KIM.thumbnail}
                        alt="김지민앤컴퍼니 썸네일"
                      />
                    </div>
                    <p className="text-[13px] text-sub">2016.10 - 2018.01</p>
                  </div>
                  <div className="w-full font-regular">
                    <div className="pb-[5px] border-b border-white border-dotted">
                      <h3 className="text-[20px] font-bold">
                        [퍼블리싱] 도메인별 웹 플랫폼 구축 및 클라이언트 기술
                        지원
                      </h3>
                      <ul className="flex flex-wrap gap-[3.5px] text-[12px] font-regular text-main opacity-[20%] group-hover/outer:opacity-[100%] ">
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Multi-Stack Adaptability
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Maintenance & Operations
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Client Communication
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          PHP / React / Node.js Integration
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Campaign Landing Pages
                        </li>
                        <li className="inline-flex px-[3.5px] rounded-[1.75] bg-divider">
                          Technical Problem Solving
                        </li>
                      </ul>
                    </div>
                    <ul className="flex flex-col gap-[14px] pt-[17px] pb-[27px]">
                      <li className="pl-[15px] pb-[15px] border-l-[3px] border-divider border-b border-divider">
                        <AccordionItem title="PHP, React, Node.js 등 프로젝트별 상이한 스택 기반의 웹 서비스 구축 및 운영">
                          <div className="flex flex-wrap gap-[30px] md:gap-[50px] mb-[30px]">
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.KIM.details[0].src}
                              alt={PROJECT_DATA.KIM.details[0].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.KIM.details[1].src}
                              alt={PROJECT_DATA.KIM.details[1].alt}
                            />
                            <img
                              className="max-w-[200px]"
                              src={PROJECT_DATA.KIM.details[2].src}
                              alt={PROJECT_DATA.KIM.details[2].alt}
                            />
                          </div>
                          오므론헬스케어(PHP), 루트에너지(React),
                          JT금융그룹(Node.js) 등 다양한 개발 환경에 빠르게
                          적응하여 리뉴얼 및 신규 구축 완수.
                          <br />
                          <b>
                            클라이언트와의 직접적인 커뮤니케이션을 통해
                            요구사항을 기술적으로 분석하고, 서비스 유지보수 및
                            마케팅 캠페인 페이지 제작 전담.
                          </b>
                        </AccordionItem>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="flex gap-[5px] items-center h-[36px] text-[20px] font-bold text-main mb-[20px] border-b border-divider">
              <span className="text-point">##</span>WORK EXPERIENCE
            </h2>
            <div className="flex flex-col gap-[20px] text-main">
              <div className="group/outer flex flex-col md:flex-row gap-[20px]">
                <div className="min-w-[152px]">
                  <h3 className="text-[20px] font-bold">팀히든</h3>
                  <p className="text-[13px] text-sub">2024.07 - 2025.05</p>
                </div>
                <div className="text-[14px] group-hover/outer:text-point pl-[15px] border-l-[3px] border-divider">
                  <dl className="flex flex-col gap-[15px]">
                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        ROLE
                      </dt>
                      <dd>
                        법무·특허·세무 전문 웹 플랫폼 구축 및 유지보수 (UI/UX
                        퍼블리싱 전담)
                      </dd>
                    </div>

                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        WORK
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            법무·특허·세무법인 테헤란의 분사 전략에 따른
                            계열사별 독립 홈페이지 및 통합 플랫폼 10여 개 구축.
                          </li>
                          <li>
                            SEO 최적화(메타태그 및 구조 개선)를 수행하여 검색
                            엔진 노출 지표 향상.
                          </li>
                          <li>
                            Figma 기반의 협업 프로세스를 주도하여 디자인 재현율
                            100% 달성.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="group/outer flex flex-col md:flex-row gap-[20px]">
                <div className="min-w-[152px]">
                  <h3 className="text-[20px] font-bold">퍼플트리</h3>
                  <p className="text-[13px] text-sub">2022.06 - 2023.08</p>
                </div>
                <div className="text-[14px] group-hover/outer:text-point pl-[15px] border-l-[3px] border-divider">
                  <dl className="flex flex-col gap-[15px]">
                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        ROLE
                      </dt>
                      <dd>
                        콘텐츠 자료조사 및 유관 부서 커뮤니케이션 서포트
                        (방송작가)
                      </dd>
                    </div>

                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        WORK
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            영화사 인터뷰 및 제작 스케줄 조율 등 다양한 직군
                            사이의 매끄러운 소통을 담당.
                          </li>
                          <li>
                            방대한 자료 속에서 핵심 정보를 추출해 대본의 기초를
                            설계.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="group/outer flex flex-col md:flex-row gap-[20px]">
                <div className="min-w-[152px]">
                  <h3 className="text-[20px] font-bold">더제이</h3>
                  <p className="text-[13px] text-sub">2020.10 - 2022.05</p>
                </div>
                <div className="text-[14px] group-hover/outer:text-point pl-[15px] border-l-[3px] border-divider">
                  <dl className="flex flex-col gap-[15px]">
                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        ROLE
                      </dt>
                      <dd>기업 홈페이지 신규 구축 및 UI 퍼블리싱</dd>
                    </div>

                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        WORK
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            다양한 디바이스 환경에 대응하는 반응형 웹 표준 수립
                            및 기획 의도에 최적화된 인터랙티브 UI 구현.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="group/outer flex flex-col md:flex-row gap-[20px]">
                <div className="min-w-[152px]">
                  <h3 className="text-[20px] font-bold">김지민앤컴퍼니</h3>
                  <p className="text-[13px] text-sub">2016.10 - 2018.01</p>
                </div>
                <div className="text-[14px] group-hover/outer:text-point pl-[15px] border-l-[3px] border-divider">
                  <dl className="flex flex-col gap-[15px]">
                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        ROLE
                      </dt>
                      <dd>웹 퍼블리싱 및 다각적 프론트엔드 기능 구현</dd>
                    </div>

                    <div className="flex">
                      <dt className="min-w-[120px] text-[12px] font-bold">
                        WORK
                      </dt>
                      <dd>
                        <ul>
                          <li>
                            PHP, React, Node.js 등 프로젝트별 다양한 기술 스택
                            환경에서 웹사이트 구축, 리뉴얼 및 프로모션 페이지
                            제작 전반 수행.
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="flex gap-[5px] items-center h-[36px] text-[20px] font-bold text-main mb-[20px] border-b border-divider">
              <span className="text-point">##</span>EDUCATION
            </h2>
            <dl className="flex flex items-center gap-[15px] font-regular text-main">
              <dt className="text-[20px] font-bold">인덕대학교</dt>
              <dd className="text-[16px]">정보통신과</dd>
              <dd className="text-[14px]">2013. 03 - 2016. 02</dd>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
