import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="#top" className="logo">
            <div className="logo-dot" />
            <span className="logo-text">
              joara<span>.</span>
            </span>
          </Link>
          <span className="footer-copy">
            © 2026 조아라. Frontend Developer.
          </span>
        </div>
        <div className="footer-contact">
          <Link
            className="footer-github-link"
            href="https://github.com/joara-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <div className="footer-divider" />
          <span className="footer-cta-label">바로 연락주세요 →</span>
          <a className="btn-email" href="mailto:whdkfk110@naver.com">
            ✉ whdkfk110@naver.com
          </a>
        </div>
      </div>
    </footer>
  );
}
