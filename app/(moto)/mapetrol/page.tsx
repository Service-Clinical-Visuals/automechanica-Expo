import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Performance from "./_components/Performance";
import Products from "./_components/Products";
import Innovation from "./_components/Innovation";
import Lubricants from "./_components/Lubricants";
import Racing from "./_components/Racing";
import Partnership from "./_components/Partnership";
import Brands from "./_components/Brands";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Lubricants />
      <Innovation />
      <Performance />
      <Products />
      <Racing />
      <Partnership />
      <Brands />
      <Footer />
    </main>
  );
}
