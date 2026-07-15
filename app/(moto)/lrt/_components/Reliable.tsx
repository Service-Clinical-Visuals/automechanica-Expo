import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const checklist = [
  {
    title: "Replacement",
    text: "If an existing catalytic converter needs to be replaced due to a defect or limited functionality, our solutions ensure reliable performance and durability.",
  },
  {
    title: "Improvement",
    text: "To achieve better exhaust gas values with newer catalytic converters, engineered for enhanced efficiency and reliability.",
  },
  {
    title: "Emission Reduction",
    text: "To further reduce exhaust gas emissions, LRT Automotive offers the right catalytic converter for every need, ensuring cleaner, more sustainable vehicle performance",
  },
];

function CheckIcon() {
  return <img src="/moto/lrt/checkwhite.png" alt="" className="shrink-0 mt-1" style={{ width: 22, height: 22 }} />;
}

export default function Reliable() {
  return (
    <section className="bg-[#121212] py-10">
      <Container>
        <div className="bg-[#242424] rounded-[24px] p-6 sm:p-10 px-4 sm:px-8 md:px-14 lg:px-[60px]">

          {/* Top row: heading + circular arrow button */}
          <div className="flex items-start justify-between gap-6 mb-5" data-aos="fade-up">
            <div>
              <h2 className="heading mb-6">Reliable Solutions For Every Exhaust System Need</h2>
              <p className="content-white max-w-[900px]">
                Whether you need a replacement, improved exhaust performance, or reduced emissions, LRT Automotive delivers catalytic converter solutions engineered for durability, efficiency, and reliable performance across passenger and commercial vehicles.
              </p>
            </div>

            <button className="flex items-center justify-center shrink-0 rounded-full bg-white text-[#00337F] hover:opacity-90 transition-opacity" style={{ width: 56, height: 56 }}>
              <ArrowUpRight size={30} strokeWidth={2} />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-8" />

          {/* Two-column layout */}
          <div className="flex flex-col xl:flex-row gap-10 items-center">

            {/* Left: image */}
            <div className="w-full xl:w-[60%] shrink-0" data-aos="fade-right">
              <img
                src="/moto/lrt/reliable.png"
                alt="LRT Automotive sustainable production"
                className="w-full h-full object-cover rounded-2xl"
                style={{ minHeight: 320 }}
              />
            </div>

            {/* Right: text + checklist */}
            <div className="w-full xl:w-[40%] space-y-5" data-aos="fade-left" data-aos-delay="150">
              <h3 className="heading2 mb-8">
                LRT Automotive GmbH has been a medium-sized production company
              </h3>

              <div className="space-y-6 pt-1">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <p className="subheading font-medium text-[22px]! mb-3">{item.title}</p>
                      <p className="content-white">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
