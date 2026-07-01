import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href: string;
  text: string;
}

export default function Button({ href, text }: ButtonProps) {
  return (
    <Link href={href} className="inline-flex items-stretch border border-[#0E4194] hover:shadow-md transition-shadow duration-300 self-start group">
      <div className="bg-[#0E4194] group-hover:bg-[#0a3170] transition-colors text-white px-6 md:px-8 py-2 md:py-2.5 flex items-center justify-center  text-sm md:text-[16px] lg:text-[18px] 2xl:text-[20px] font-semibold oswald tracking-wide">
        {text}
      </div>
      <div className="bg-white px-3 md:px-4 flex items-center justify-center border-l border-[#0E4194]">
        <Image 
          src="/moto/bluechem/btnarrow.png" 
          alt="Arrow Right" 
          width={18} 
          height={18} 
          className="object-contain"
        />
      </div>
    </Link>
  );
}
