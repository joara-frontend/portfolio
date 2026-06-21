import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <span id="top" />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}
