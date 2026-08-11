import AllProducts from "./_components/AllProduct";
import Banner from "./_components/Banner";
import Choose from "./_components/Choose";
import Discover from "./_components/Discover";
import Product from "./_components/Product";
import ProductExperience from "./_components/ProductExperience";


export default function AxiomPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white overflow-x-hidden">
      <Banner/>
      <Product/>
      <ProductExperience/>
      <AllProducts/>
      <Discover/>
      <Choose/>
      {/* more sections added here as we build them */}
    </main>
  );
}