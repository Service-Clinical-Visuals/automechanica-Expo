import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import PremiumEngine from "./_components/PremiumEngine";
import Quality from "./_components/Quality";
import Solutions from "./_components/Solutions";
import Performance from "./_components/Performance";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <PremiumEngine />
      <Quality />
      <Solutions />
      <Performance />
      <News />
      <Footer />
    </main>
  );
}
