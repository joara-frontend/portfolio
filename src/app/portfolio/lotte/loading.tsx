import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSliderSkeleton } from "@/components/ui/HeroSliderSkeleton";
import { ProjectMetaSkeleton } from "@/components/ui/ProjectMetaSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function LotteLoading() {
  return (
    <>
      <Header />

      <main>
        <div className="detail-inner">
          <Skeleton style={{ width: "200px", height: "22px", marginBottom: "22px" }} />
          <HeroSliderSkeleton />
          <ProjectMetaSkeleton />

          {/* 기여/성과 카드 3개 */}
          <div style={{ marginTop: "56px" }}>
            <Skeleton style={{ width: "180px", height: "30px", marginBottom: "24px", borderRadius: "12px" }} />
            {[1, 2, 3].map((i) => (
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
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <Skeleton style={{ width: "48%", height: "20px" }} />
                  <Skeleton style={{ width: "100%", height: "15px" }} />
                  <Skeleton style={{ width: "82%", height: "15px" }} />
                </div>
              </div>
            ))}
          </div>

          {/* iframe 영역 placeholder */}
          <Skeleton
            style={{
              width: "100%",
              height: "600px",
              borderRadius: "24px",
              marginTop: "40px",
            }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
