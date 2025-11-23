import React from "react";

export default function Hero() {
  const imgSrc =
    "https://wearemaven.co.uk/cdn/shop/files/Untitleddesign-20_7c34de9c-4b55-4817-9f3c-774ea2953b4a_1080x.png?v=1724076564";
  return (
    <section className="py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="relative z-0 flex-[0.5] mb-5 md:mb-0">
          <img
            src={imgSrc}
            draggable="false"
            alt="Anglepoise lamp"
            className="mx-auto w-full max-w-md scale-x-[-1] object-contain"
          />
        </div>
        <div className="flex-[0.4]">
          <h1 className="text-5xl font-extrabold leading-tight">
            Anglepoise Type 75 Desk Lamp
          </h1>
          <p className="mt-4 max-w-lg text-gray-600">
            Timeless British design meets modern engineering in this perfectly
            balanced, adjustable task lamp.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="rounded-md bg-[#171717] px-6 py-3 text-white">
              Buy Now
            </button>
            <a
              href="#features"
              className="border-1 rounded-md border border-gray-400 px-6 py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
