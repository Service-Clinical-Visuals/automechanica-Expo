import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Discover from "./_components/Discover";
import Products from "./_components/Products";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Brake from "./_components/Brake";
import Solutions from "./_components/Solutions";

export const metadata = {
  title: "Seld Production",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Brake />
      <Products />
      <Discover />
      <Solutions />
      <Footer />
    </main>
  );
}
