import React from 'react';
import Header from './_components/Header';
import Banner from './_components/Banner';
import AboutUs from './_components/AboutUs';
import Explore360 from './_components/Explore360';
import AutomotiveComponents from './_components/AutomotiveComponents';
import ManufacturingProcess from './_components/ManufacturingProcess';
import CertifiedQuality from './_components/CertifiedQuality';
import Advanced3DModeling from './_components/Advanced3DModeling';
import LatestNews from './_components/LatestNews';
import Footer from './_components/Footer';

export default function AmcAmadeoPage() {
  return (
    <main className="w-full bg-white flex flex-col min-h-screen">
      <Header />
      <Banner />
      <AboutUs />
      <Explore360 />
      <AutomotiveComponents />
      <ManufacturingProcess />
      <CertifiedQuality />
      <Advanced3DModeling />      
      <LatestNews />
      <Footer />
    </main>
  );
}
