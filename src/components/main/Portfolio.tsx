"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { projectsDevelopment, projectsPublishing } from "@/data/portfolio";
import type { Project, ProjectLink, ProjectType } from "@/data/portfolio";
import { Skeleton } from "@/components/ui/Skeleton";

const TYPE_CLASS: Record<ProjectType, string> = {
  "부트캠프": "project-type-bootcamp",
  "개인": "project-type-personal",
  "사이드 프로젝트": "project-type-side",
  "회사": "project-type-company",
};

function ProjectCard({ project }: { project: Project }) {
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const cardHref = project.path ?? project.links?.[0]?.href;
  const isExternal = !project.path;
  const externalProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const thumb = (
    <div className="project-thumb">
      {!thumbLoaded && (
        <Skeleton
          style={{ position: "absolute", inset: 0, borderRadius: 0 }}
        />
      )}
      <Image
        src={project.thumb}
        fill
        sizes="(max-width: 900px) 100vw, 548px"
        style={{
          objectFit: "cover",
          opacity: thumbLoaded ? 1 : 0,
          transition: "opacity .3s ease",
        }}
        className="object-cover"
        alt={project.title}
        onLoad={() => setThumbLoaded(true)}
      />
    </div>
  );

  return (
    <div className="project-card">
      {cardHref ? (
        <Link
          href={cardHref}
          className="project-card-link"
          aria-hidden="true"
          tabIndex={-1}
          {...externalProps}
        >
          {thumb}
        </Link>
      ) : (
        thumb
      )}
      <div className="project-body">
        {project.type && (
          <div className={`project-type-badge ${TYPE_CLASS[project.type]}`}>
            <span className="project-type-dot" />
            {project.type}
          </div>
        )}
        <div className="project-title-row">
          <span className="project-title">{project.title}</span>
          <span className="project-en">{project.en}</span>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-links">
          {project.path && (
            <Link className="project-detail-btn" href={project.path}>
              자세히 보기 →
            </Link>
          )}
          {project.links?.map((link: ProjectLink, i: number) => (
            <Link
              key={i}
              className="project-link no-underline text-inherit"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  { id: "development", label: "Development", projects: projectsDevelopment },
  { id: "publishing", label: "Publishing", projects: projectsPublishing },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabId>("development");

  const currentProjects =
    TABS.find((t) => t.id === activeTab)?.projects ?? [];

  return (
    <section id="portfolio">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">대표 프로젝트</h2>
        </div>

        <div className="portfolio-tabs">
          <div className="portfolio-tabbar" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`portfolio-tab-btn${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className="tab-count">{tab.projects.length}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          key={activeTab}
          className="projects-grid"
          role="tabpanel"
          aria-label={activeTab}
        >
          {currentProjects.map((project, i) => (
            <ProjectCard key={`${activeTab}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
