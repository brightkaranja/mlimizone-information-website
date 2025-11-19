'use client';

import { FiPhone, FiDollarSign, FiClock, FiBarChart, FiShield, FiGlobe } from "react-icons/fi";
import React from "react";

const features = [
  {
    icon: <FiPhone size={32} />,
    title: "USSD Access",
    desc: "Both farmers and wholesalers use *384*67554# on any basic phone. No internet, no app, no data.",
  },
  {
    icon: <FiDollarSign size={32} />,
    title: "M-Pesa Payments",
    desc: "Wholesalers pay instantly via STK push. Farmers get notified immediately.",
  },
  {
    icon: <FiBarChart size={32} />,
    title: "Real-time Market Prices",
    desc: "See current prices per region before listing or booking.",
  },
  {
    icon: <FiShield size={32} />,
    title: "Secure & Verified",
    desc: "All users verified by phone. Transactions logged and confirmed via SMS.",
  },
  {
    icon: <FiClock size={32} />,
    title: "24/7 Availability",
    desc: "List, book, and pay anytime - even at night or in remote areas.",
  },
  {
    icon: <FiGlobe size={32} />,
    title: "Nationwide Reach",
    desc: "Connect farmers in rural districts with urban wholesalers instantly.",
  },
];

const PowerfulFeatures = () => {
  return (
    <section id="features" className="w-full min-h-screen px-4 sm:px-6 lg:px-16 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-18">
        <h1 className="text-3xl sm:text-[44px] font-bold text-black mb-2 2xl:text-[44px]">
          Powerful Features
        </h1>
        <p className="text-base sm:text-[16px] text-black max-w-xl mx-auto 2xl:text-[16px]">
          Simple, fast, and built for every phone in Malawi
        </p>
      </div>

      <div className="max-w-[95%] mx-auto grid gap-x-12 gap-y-18 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white rounded-lg p-6 shadow drop-shadow-md hover:shadow-2xl transition-shadow h-70"
          >
            <div className="mb-4">
              <div className="bg-[#0a5c28] rounded-full w-17 h-17 flex items-center justify-center">
                {React.cloneElement(f.icon, { className: "text-white", size: 32 })}
              </div>
            </div>
            <div className="font-bold 2xl:text-[20px] sm:text-[20px] mb-1 text-black">
              {f.title}
            </div>
            <div className="text-black 2xl:text-[16px] text-sm sm:text-[16px] text-center">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerfulFeatures;