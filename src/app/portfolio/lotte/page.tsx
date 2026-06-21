import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECT_DETAIL_DATA } from "@/data/projectDetails";
import type {
  ProjectFeatureNumType,
  ProjectFeatureNotNumType,
} from "@/data/projectDetails";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/detail/HeroSlider";
import ProjectMeta from "@/components/detail/ProjectMeta";
import FeatureSection from "@/components/detail/FeatureNumTypeSection";
import TroubleSection from "@/components/detail/FeatureNotNumTypeSection";
import LotteFrame from "@/components/detail/LotteFrame";

function isNumType(
  features: ProjectFeatureNumType[] | ProjectFeatureNotNumType[]
): features is ProjectFeatureNumType[] {
  return features.length === 0 || "title" in features[0];
}

export const metadata: Metadata = {
  title: "롯데인터넷면세점 | 조아라 포트폴리오",
};

export default function LottePage() {
  const project = PROJECT_DETAIL_DATA["lotte"];
  if (!project) notFound();

  return (
    <>
      <Header />

      <main>
        <div className="detail-inner">
          {/* ── Back link ── */}
          <Link href="/#portfolio" className="detail-back">
            <span className="detail-back-icon">←</span>
            프로젝트 목록으로 돌아가기
          </Link>

          {/* ── Hero slider ── */}
          <HeroSlider images={project.images} title={project.title} />

          {/* ── Meta: title / period / members / role / stacks / links ── */}
          <ProjectMeta project={project} />

          {/* ── 기여 및 성과 (NotNumType) 또는 주요 기능 (NumType) ── */}
          {project.features && project.features.length > 0 &&
            (isNumType(project.features) ? (
              <FeatureSection features={project.features} />
            ) : (
              <TroubleSection troubles={project.features} />
            ))}

          {/* ── 이벤트 페이지 iframe — footer 직전 배치 ── */}
          <LotteFrame />

          {/* ── Bottom back ── */}
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
          >
            <Link href="/#portfolio" className="detail-btn-back">
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
