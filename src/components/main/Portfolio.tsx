"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projectsPrimary, projectsMore } from "@/data/portfolio";
import type { Project, ProjectLink } from "@/data/portfolio";
import { Skeleton } from "@/components/ui/Skeleton";

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

  const titleBlock = (
    <>
      <div className="project-title-row">
        <span className="project-title">{project.title}</span>
        <span className="project-en">{project.en}</span>
      </div>
      <p className="project-desc">{project.desc}</p>
    </>
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
        {cardHref ? (
          <Link href={cardHref} className="project-card-link" {...externalProps}>
            {titleBlock}
          </Link>
        ) : (
          titleBlock
        )}
        <div className="project-links">
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

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const moreGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (moreGridRef.current) moreGridRef.current.inert = !showMore;
  }, [showMore]);

  return (
    <section id="portfolio">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">대표 프로젝트</h2>
        </div>

        <div className="projects-grid">
          {projectsPrimary.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div
          ref={moreGridRef}
          className={`more-grid${showMore ? " open" : ""}`}
        >
          <div>
            <div className="projects-grid">
              {projectsMore.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="show-more-wrap">
          <button
            className="btn-show-more"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <span>{showMore ? "접기" : "더보기"}</span>
            <span className={`more-icon-circle${showMore ? " open" : ""}`}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9.5l6 6 6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
