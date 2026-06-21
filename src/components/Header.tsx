import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <Link href="#top" className="logo">
          <div className="logo-dot" />
          <span className="logo-text">
            joara<span>.</span>
          </span>
        </Link>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <a className="btn-contact" href="mailto:whdkfk110@naver.com">
          연락하기
        </a>
      </div>
    </header>
  );
}
