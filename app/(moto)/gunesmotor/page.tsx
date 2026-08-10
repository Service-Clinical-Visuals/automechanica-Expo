import About from "./_components/About";
import Hero from "./_components/Hero";
import Products from "./_components/ProductExperience";
import Product from "./_components/Product";
import Materials from "./_components/Material";
import VisionMission from "./_components/VM";
import Quality from "./_components/Quality";
import News from "./_components/News";


export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Products/>
    <Product/>
    <Materials/>
    <VisionMission/>
    <Quality/>
    <News/>
    </>
  );
}