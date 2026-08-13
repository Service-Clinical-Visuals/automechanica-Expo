"use client";

import Link from "next/link";
import Container from "./Container";

export default function Disctributor() {
  return (
    <section
      className="relative w-full py-20 md:py-30 bg-cover bg-center bg-no-repeat font-[family-name:var(--font-inter)]"
      style={{ backgroundImage: "url('/moto/zeta-erre/distributor.png')" }}
      id="distributor"
    >
      <Container className="justify-center flex flex-col items-center">
        <h2 className="heading mb-5">Are you a distributor?</h2>

        <p className="content mb-8 text-center max-w-[100%] md:max-w-[80%]">
            Partner with Zeta-Erre and gain access to a trusted range of OEM-quality transmission
            components backed by over 25 years of automotive expertise. We work closely with
            distributors, wholesalers, and automotive professionals, offering reliable products,
            consistent quality, and dedicated support to help grow your business and meet the
            evolving demands of the aftermarket.
        </p>

        <Link
            href="#"
            className="navlink inline-flex items-center w-fit text-dark! font-normal! bg-primary hover:bg-primary-hover px-8 py-2.5 transition-colors whitespace-nowrap"
            >
            Click Here
        </Link>
      </Container>
    </section>
  );
}
