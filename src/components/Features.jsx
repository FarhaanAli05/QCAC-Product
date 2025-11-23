import React from "react";

const features = [
  {
    title: "Adjustable Brightness",
    desc: "Soft, warm LED illumination for comfortable task work.",
    icon: "sun.svg",
  },
  {
    title: "Precision Spring Mechanism",
    desc: "Iconic Anglepoise engineering for smooth positioning.",
    icon: "gear.svg",
  },
  {
    title: "Durable Aluminium Build",
    desc: "Lightweight, long-lasting, premium materials.",
    icon: "strong.svg",
  },
  {
    title: "Multiple Colour Options",
    desc: "Classic Matte Black, Warm White, Slate Grey.",
    icon: "palette.svg",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12">
      <h2 className="mb-6 text-3xl font-bold">Why You'll Love It</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((f, i) => (
          <div key={i} className="flex rounded-lg bg-white p-6 align-top">
            <img
              draggable="false"
              src={`/icons/${f.icon}`}
              alt={f.title}
              className="mr-5 h-8 w-8"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
