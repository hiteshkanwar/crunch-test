"use client";

import bannerBg from "@/assets/images/banner-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
        style={{
          backgroundImage: `url(${bannerBg.src || bannerBg})`,
        }}
      ></div>

      <div className="absolute -bottom-[8px] md:-bottom-[18px] max-w-7xl mx-auto flex items-center justify-center w-full left-0 right-0">
        <h1 className="text-6xl md:text-[125px] font-black-cond text-white">
          HIITZONE
        </h1>
      </div>
    </section>
  );
}
