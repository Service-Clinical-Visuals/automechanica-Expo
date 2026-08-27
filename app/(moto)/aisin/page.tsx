import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import BrakePads from "./_components/BrakePads";
import Products from "./_components/Products";
import OurProduct from "./_components/OurProduct";
import NewProducts from "./_components/NewProducts";
import HighPerformance from "./_components/HighPerformance";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function AisinPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <BrakePads />
      <Products />
      <OurProduct />
      <NewProducts />
      <HighPerformance />
      <News />
      <Footer />
    </main>
  );
}
