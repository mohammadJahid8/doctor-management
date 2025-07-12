/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import React from "react";
import MoreBtn from "./more-btn";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Banner = () => {
  return (
    <div id="home" className="px-4 xl:px-0 h-auto bg-primary overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center relative max-w-[1200px] mx-auto">
        <div className="pt-20 pb-10 lg:py-32">
          <h1
            className={cn(
              poppins.className,
              "text-[30px] md:text-[42px] text-white font-medium leading-[1.3em] mb-3"
            )}
          >
            DOCalert — India’s #1 Growth Platform for Elite Doctors & Clinics!!
          </h1>
          <p
            className={cn(
              poppins.className,
              "text-[20px] text-white leading-[1.3em] mb-3"
            )}
          >
            Grow faster. Stress less. Serve better.<br />
            Designed for modern healthcare heroes who want to simplify clinic management, 
            delight patients, and accelerate long-term growth.
          </p>

          <MoreBtn to="about" label="READ MORE" />
        </div>

        <img src="/doc-8.png" alt="doc" className="-mb-4 sm:w-[450px]" />
      </div>
    </div>
  );
};

export default Banner;
