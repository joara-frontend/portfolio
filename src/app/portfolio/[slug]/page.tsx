import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECT_DETAIL_DATA } from "@/data/projectDetails";
import type {
  ProjectFeatureNumType,
  ProjectFeatureNotNumType,
} from "@/data/projectDetails";
import HeroSlider from "@/components/detail/HeroSlider";
import ProjectMeta from "@/components/detail/ProjectMeta";
import FeatureSection from "@/components/detail/FeatureNumTypeSection";
import TroubleSection from "@/components/detail/FeatureNotNumTypeSection";
import { FadeIn } from "@/components/ui/FadeIn";

function isNumType(
  features: ProjectFeatureNumType[] | ProjectFeatureNotNumType[],
): features is ProjectFeatureNumType[] {
  return features.length === 0 || "title" in features[0];
}

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAIL_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = PROJECT_DETAIL_DATA[params.slug];
  if (!project) return {};
  return { title: `${project.title} | 조아라 포트폴리오` };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = PROJECT_DETAIL_DATA[params.slug];
  if (!project) notFound();

  return (
    <main>
      <div className="detail-inner">
        {/* ── Back link ── */}
        <Link href="/#portfolio" className="detail-back">
          <span className="detail-back-icon">←</span>
          프로젝트 목록으로 돌아가기
        </Link>

        {/* ── Hero slider ── */}
        <FadeIn>
          <HeroSlider images={project.images} title={project.title} />
        </FadeIn>

        {/* ── Meta: title / period / members / role / stacks / links ── */}
        <FadeIn delay={0.1}>
          <ProjectMeta project={project} />
        </FadeIn>

        {/* ── 번호 박스 (NumType) 또는 기여·성과 카드 (NotNumType) ── */}
        {project.features &&
          project.features.length > 0 &&
          (isNumType(project.features) ? (
            <FadeIn delay={0.1}>
              <FeatureSection features={project.features} />
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <TroubleSection troubles={project.features} />
            </FadeIn>
          ))}

        {/* ── Bottom back ── */}
        <FadeIn>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <Link href="/#portfolio" className="detail-btn-back">
              ← 프로젝트 목록으로 돌아가기
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
