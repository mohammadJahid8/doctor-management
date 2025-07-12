import React from "react";
import SectionTitle from "./sec-title";
import Image from "next/image";
import Title from "./title";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className=" max-w-[1200px] mx-auto mt-32 mb-10 px-4 xl:px-0"
    >
      <div className="flex lg:flex-row flex-col items-center gap-16">
        <div className="flex-1">
          <SectionTitle title="About Us" />

          <Title
            title="WELCOME TO DOCalert"
            className="text-[32px] lg:text-[46px] leading-[50px]"
          />

          <div className="py-3">
            <p className="text-muted-foreground text-xl">
              The Future of Smart Practice Management — Now in Your Hands

              Whether you run a bustling multi-specialty hospital or a cozy single-doctor clinic, 
              DOCalert transforms your daily chaos into structured, stress-free growth.

              ✅ 100% Made for Indian Healthcare
              ✅ Minimal Training Required
              ✅ Backed by Data. Loved by Patients.
            </p>
          </div>
        </div>

        <div
          className="flex-1 w-full mx-auto md:max-w-[500px] lg:h-[500px]"
          style={{
            position: "relative",
            backgroundImage: 'url("/doc-bg.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/doc-4.png"
            width="0"
            height="0"
            quality={100}
            unoptimized
            priority
            alt="about"
            className="w-full h-full object-cover lg:absolute lg:bottom-14"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
