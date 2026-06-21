import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span>Frontend Developer</span>
            </div>
            <h1 className="hero-title">
              안녕하세요,
              <br />
              퍼블리싱 숙련도에
              <br />
              프론트엔드 기술을 더한,
              <br />
              <span className="gradient-text">개발자 조아라</span>입니다
            </h1>
            <p className="hero-desc">
              웹 퍼블리셔로서 약 6년 가까이 쌓아온 탄탄한 UI 구현 능력과,
              <br />
              방송 작가 경력에서 얻은 탁월한 데이터 구조화 역량을 바탕으로
              <br />
              비즈니스의 의도를 정확한 코드로 구현하는 개발자가 되고자 합니다.
            </p>
            <div className="hero-btns">
              <a
                className="btn-primary"
                href="/assets/resume.pdf"
                download="프론트엔드 개발자 조아라 이력서.pdf"
              >
                ↓ 이력서 다운로드
              </a>
              <Link
                className="btn-ghost"
                href="https://github.com/joara-frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </Link>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-deco-1" />
            <div className="hero-deco-2" />
            <div className="hero-photo-frame">
              <Image
                src="/assets/profile_img.jpg"
                width={320}
                height={400}
                alt="프로필 이미지"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
