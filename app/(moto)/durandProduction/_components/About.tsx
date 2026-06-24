import Button from "./Button";

export default function About() {
  return (
    <section className="w-full bg-[#000814] py-16 md:py-24" id="about">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="flex flex-col h-full order-last xl:order-none" data-aos="fade-right">
            {/* Image 1 with red L-shape decoration */}
            <div className="relative mb-12 lg:mb-16 mt-4 ml-4">
              {/* Red decorations */}
              <div className="absolute -top-4 -left-4 w-4 h-[80%] bg-[#FF131C] z-0"></div>
              <div className="absolute -top-4 -left-4 w-[50%] h-4 bg-[#FF131C] z-0"></div>
              
              {/* Image */}
              <div className="relative z-10 w-full aspect-[16/9] md:aspect-[4/3] bg-gray-800 shadow-xl">
                <img 
                  src="/moto/durandProduction/abt1.png" 
                  alt="Durand Production Building" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Humanity Section */}
            <div className="mb-8">
              <h3 className="text-[#FF131C] text-2xl md:text-3xl  heading font-medium mb-3 tracking-wide ">
                Humanity !
              </h3>
              <p className="text-white text-sm md:text-md paragraph leading-[1.8] font-normal">
                Ensuring Above All The Safety Of All Users Of The Site. Facilitating – Even In Difficult
                Moments – Communication: Listening And Understanding. Recognizing And Valuing The
                Work Of Employees, Customer Challenges And Supplier Services.
              </p>
            </div>
            
            {/* Friendly Section */}
            <div className="mb-8">
              <h3 className="text-[#FF131C] text-2xl md:text-3xl  heading font-medium mb-3 tracking-wide ">
                Let's Be Friendly !
              </h3>
              <p className="text-white text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal">
                By Ensuring A Professional And Warm Welcome To All Our Visitors. By Developing The
                Culture Of Well-Being At Work. By Taking A Step Back To Reposition Human Relations At
                The Heart Of Our Decisions.
              </p>
            </div>
            
            {/* Button */}
            <div>
              <Button href="#">Know Us</Button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col h-full order-first xl:order-none" data-aos="fade-left">
            {/* About Us Heading */}
            <div className="mb-8">
              <div className="inline-flex flex-col items-stretch mb-6">
                <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
                  About Us
                </h2>
              </div>
              
              <p className="text-white text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal mb-6">
                Set Up In 1985, Durand Production Formulates, Produces And Markets Automotive Fluids
                Such As Engine Oils, Transmission Oils, Brake/Power Steering Fluids, Heavy Duty And
                Agricultural Engine Oils, 2 Wheeler 2 & 4 Stroke Engine Oils, Coolants, Screen-Washes
                And Greases. We Manufacture Reliable High Quality Products Which Meet The Most
                Stringent Technical Requirements In The Automobile Industry.
              </p>
              
              <p className="text-white text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal mb-6">
                In The Competing World Of Automotive Lubricants Industry Durand Production Has A
                Worldwide Trade With Our Presence In Our 40 Countries Via Our Network Of Distributors
                And Agents. Our Experience Of Over 30 Years And Know-How Of The Stringent Demands
                Of Today's Automotive Lubricant Industry Combined With Our Vast Range Of Products
                And Continuous Developments Allows Us To Meet The Increasing Demands Of The
                Automotive Lubricants Industry.
              </p>
            </div>
            
            {/* Image 2 with red L-shape decoration */}
            <div className="relative mt-auto pt-8 mr-4 mb-4 lg:mb-8">
              {/* Image */}
              <div className="relative z-10 w-full aspect-[4/3] bg-gray-800 shadow-xl">
                <img 
                  src="/moto/durandProduction/abt2.png" 
                  alt="Areca Products Display" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Red decorations */}
              <div className="absolute -bottom-4 -right-4 w-4 h-[60%] bg-[#FF131C] z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-[60%] h-4 bg-[#FF131C] z-0"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
