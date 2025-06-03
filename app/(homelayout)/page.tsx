import About from "@/components/global/about";
import { Advertisement } from "@/components/global/advertisement";
import Banner from "@/components/global/banner";
import ChooseUs from "@/components/global/choose-us";
import Faqs from "@/components/global/faq";
import Onboard from "@/components/global/onboard";
import Testimonials from "@/components/global/testimonials";
import { Suspense } from "react";

//test changes

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="relative">
        <About />
      </div>
      <div className="relative">
        <ChooseUs />
        {/* <Suspense
          fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
        >
          <Advertisement position="sidebar" className="absolute top-0 left-0" />
        </Suspense> */}
      </div>
      <Onboard />
      <Suspense
        fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
      >
        <Advertisement position="mid-page" />
      </Suspense>
      <Testimonials />
      <Suspense
        fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
      >
        <Advertisement position="floating" />
      </Suspense>
      <div className="relative">
        <Faqs />
        {/* <Suspense
          fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
        >
          <Advertisement
            position="sidebar"
            className="absolute top-0 right-0"
          />
        </Suspense> */}
      </div>
      <Suspense
        fallback={<div className="h-[250px] animate-pulse bg-muted"></div>}
      >
        <Advertisement position="before-footer" />
      </Suspense>
    </div>
  );
};

export default Home;
