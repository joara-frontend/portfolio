import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSliderSkeleton } from "@/components/ui/HeroSliderSkeleton";
import { ProjectMetaSkeleton } from "@/components/ui/ProjectMetaSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetailLoading() {
  return (
    <>
      <Header />

      <main>
        <div className="detail-inner">
          {/* 뒤로가기 링크 자리 */}
          <Skeleton style={{ width: "200px", height: "22px", marginBottom: "22px" }} />

          {/* 이미지 슬라이더 */}
          <HeroSliderSkeleton />

          {/* 프로젝트 메타 (제목 / 기간 / 역할 / 설명 / 스택 / 링크) */}
          <ProjectMetaSkeleton />

          {/* Feature 섹션 헤더 */}
          <div style={{ marginTop: "56px" }}>
            <Skeleton style={{ width: "220px", height: "30px", marginBottom: "24px", borderRadius: "12px" }} />

            {/* Feature 카드 2개 */}
            {[1, 2].map((i) => (
              <div
                key={i}
                style={{
                  borderRadius: "24px",
                  padding: "26px 28px",
                  background: "rgba(255,255,255,.5)",
                  border: "1px solid rgba(255,255,255,.8)",
                  boxShadow: "0 24px 48px -30px rgba(90,100,180,.5), inset 0 1px 0 rgba(255,255,255,.9)",
                  marginBottom: "18px",
                }}
              >
                {/* 번호 배지 + 제목 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <Skeleton
                    variant="circle"
                    style={{ width: "34px", height: "34px", borderRadius: "12px", flexShrink: 0 }}
                  />
                  <Skeleton style={{ width: "45%", height: "22px" }} />
                </div>

                {/* 본문 줄 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <Skeleton style={{ width: "100%", height: "15px" }} />
                  <Skeleton style={{ width: "88%", height: "15px" }} />
                  <Skeleton style={{ width: "72%", height: "15px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
