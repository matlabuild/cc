import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaching from "@/components/Coaching";
import Newsletter from "@/components/Newsletter";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Coaching />
        <Newsletter />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
