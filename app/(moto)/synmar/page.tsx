import AdvancedProtectionSection from "./_components/AdvancedProtectionSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroSection";
import NewsletterSection from "./_components/NewsletterSection";
import OurProductsSection from "./_components/OurProductsSection";
import OwnBrandSection from "./_components/OwnBrandSection";
import ProductSection from "./_components/ProductSection";
import TrustSection from "./_components/TrustSection";
import TrustedWorldwideSection from "./_components/TrustedWorldwideSection";
import YourSolutionSection from "./_components/YourSolutionSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Header />

      <HeroBanner />

      <TrustSection />

      <ProductSection />

      <OurProductsSection />

      <AdvancedProtectionSection />

      <OwnBrandSection />

      <TrustedWorldwideSection />

      <YourSolutionSection />

      <NewsletterSection />

      <Footer />

    </main>
  );
}