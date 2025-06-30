import React from "react";

import SectionTitle from "./sec-title";
import Title from "./title";
import { standardPackages } from "@/utils/constants";
import PricingCard from "./pricing-card";

const Pricing = () => {
  console.log("STANDARD PACKAGES", standardPackages);
  return (
    <div
      id="pricing"
      className="bg-accent px-4 xl:px-0 py-[60px] md:py-[120px]"
    >
      <div className="md:max-w-[1200px] mx-auto">
        <div className="flex md:flex-row flex-col gap-8 md:gap-0 items-center md:items-end md:justify-between pb-12">
          <div className="flex flex-col gap-2 items-center md:justify-start md:items-start text-center ">
            <SectionTitle title="Pricing & Plan" />
            <Title
              title="Tailored Pricing Solutions"
              className="text-[32px] lg:text-[46px] leading-[1.3em]"
            />
          </div>
          {/* <div className='flex gap-2'>
            <CarouselButton direction='prev' />
            <CarouselButton direction='next' />
          </div> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {standardPackages.map((data, i) => (
            <PricingCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
