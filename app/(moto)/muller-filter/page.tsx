import Banner from "./_components/Banner";
import Header from "./_components/Header";
import AboutUs from "./_components/AboutUs";
import CabinAirFilter from "./_components/CabinAirFilter";
import ProductRange from "./_components/ProductRange";
import PremiumAirFilter from "./_components/PremiumAirFilter";
import RecentNews from "./_components/RecentNews";
import Footer from "./_components/Footer";

export default function MullerFilterPage() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <AboutUs />
      <CabinAirFilter />
      <ProductRange />
      <PremiumAirFilter />
      <RecentNews />
      <Footer />
    </div>
  );
}
