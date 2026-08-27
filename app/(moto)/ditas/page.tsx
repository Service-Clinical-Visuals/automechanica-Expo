import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import News from "./_components/News";
import ProductCategories from "./_components/ProductCategories";
import ProductExperience from "./_components/ProductExperience";
import Quality from "./_components/Quality";
import Values from "./_components/Values";
import WhoAreWe from "./_components/WhoAreWe";

export default function DitasPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <Banner />
      <WhoAreWe/>
      <ProductExperience/>
      <ProductCategories/>
      <Explore/>
      <Values/>
      <Quality/>
      <News/>
      
    </main>
  );
}