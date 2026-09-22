import Link from "next/link";
import type { ProjectDetailLink } from "@/data/projectDetails";

export default function LinkChip({ link }: { link: ProjectDetailLink }) {
  const isGitHub = link.label.toLowerCase().includes("github");
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`detail-link-chip ${isGitHub ? "github" : "live"}`}
    >
      {link.label}
    </Link>
  );
}
