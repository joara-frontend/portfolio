import { skills } from '@/data/portfolio';
import type { Skill } from '@/data/portfolio';

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="skill-pill">
      <span
        className="skill-dot"
        style={{
          background: `radial-gradient(circle at 34% 28%,#fff,${skill.c1} 45%,${skill.c2})`,
        }}
      />
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const track1: Skill[] = [...skills, ...skills];
  const track2: Skill[] = [...[...skills].reverse(), ...[...skills].reverse()];

  return (
    <section id="skills">
      <div className="skills-header">
        <div className="section-label">Skills</div>
        <h2 className="section-title">기술 스택</h2>
      </div>
      <div className="marquee-track-wrap">
        <div className="marquee-track">
          {track1.map((skill, i) => (
            <SkillPill key={i} skill={skill} />
          ))}
        </div>
      </div>
      <div className="marquee-track-wrap">
        <div className="marquee-track reverse">
          {track2.map((skill, i) => (
            <SkillPill key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
