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
            title="We Are DOCalert"
            className="text-[32px] lg:text-[46px] leading-[50px]"
          />

          <div className="py-3">
            <p className="text-muted-foreground text-xl">
              Welcome to DOCalert, the revolutionary patient management platform
              empowering doctors to deliver exceptional care. With a robust
              suite of tools, we streamline patient data management, foster
              growth, and celebrate excellence.
            </p>
          </div>

          <Link
            href="/about"
            className="bg-secondary hover:bg-black transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            MORE ABOUT US
          </Link>
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
