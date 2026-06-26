import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { FadeIn } from "@/components/ui/FadeIn";
import { ThemeProvider } from "@/lib/ThemeContext";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ChatWidget } from "@/components/ui/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://joara-portfolio.vercel.app"),
  title: "조아라 포트폴리오 | Frontend Developer",
  description:
    "프론트엔드 개발자 조아라의 포트폴리오입니다. Next.js · React · TypeScript 기반의 웹 서비스 개발 경험을 담았습니다.",
  openGraph: {
    title: "조아라 포트폴리오 | Frontend Developer",
    description:
      "프론트엔드 개발자 조아라의 포트폴리오입니다. Next.js · React · TypeScript 기반의 웹 서비스 개발 경험을 담았습니다.",
    url: "https://joara-portfolio.vercel.app",
    siteName: "조아라 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "조아라 포트폴리오 | Frontend Developer",
    description:
      "프론트엔드 개발자 조아라의 포트폴리오입니다. Next.js · React · TypeScript 기반의 웹 서비스 개발 경험을 담았습니다.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 다크모드 플래시 방지: 렌더 전에 테마 클래스 적용 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          crossOrigin=""
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="blobs" aria-hidden="true">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="blob blob-4" />
          </div>
          <div className="page">
            <Header />
            <DarkModeToggle />
            <ScrollToTop />
            <ChatWidget />
            {children}
            <FadeIn>
              <Footer />
            </FadeIn>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
