import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Discover from "./_components/Discover";
import Products from "./_components/Products";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Brake from "./_components/Brake";
import Solutions from "./_components/Solutions";
import VideoFeature from "./_components/VideoFeature";
import Sustainability from "./_components/Sustainability";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata = {
  title: "Seld Production",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <SmoothAOS />
      <Header />
      <Hero />
      <About />
      <Brake />
      <Products />
      <Solutions />
      <Discover />
      <VideoFeature />
      <Sustainability />
      <Footer />
    </main>
  );
}
