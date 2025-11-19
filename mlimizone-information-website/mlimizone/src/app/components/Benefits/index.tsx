"use client";
import { Clock, Network, Star } from "lucide-react";
import Image from "next/image";


const reviews = [
  {
    stars: 5,
    text:
      '"I listed 50 KG of maize using *384*67554# and got booked in 10 minutes, and I get better prices than ever before!"',
    name: "Chisoma Grace",
    role: "Farmer",
    img: "/Images/woman.png",
  },
  {
    stars: 5,
    text:
      '"I pay with M-Pesa directly from USSD. No cash, no travel. Our supply chain has never been more efficient."',
    name: "David Bukusu",
    role: "Wholesaler",
    img: "/Images/man.png",
  },
  {
    stars: 5,
    text:
      '"As a smallholder farmer, USSD works even in the village. I sold my beans without leaving my farm. Simple, effective and profitable!"',
    name: "Maria Chikondi",
    role: "Farmer",
    img: "/Images/woman.png",
  },
];

function renderStars(count:number) {
  const stars = [];
  for (let i = 0; i < count; i = i + 1) {
    stars.push(
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    );
  }
  return stars;
}


export default function Testimonials() {
  return (
    <div id="benefits"className="min-h-screen bg-white">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="sm:text-[44px] text-3xl font-bold text-black mb-4">
            Why Choose MlimiZone?
          </h2>
          <p className="text-[16px] text-black text-lg mb-16 max-w-2xl mx-auto">
            Transform your agricultural business with our innovative platform
          </p>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0E6320] rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-semibold text-black mb-4">
                Wider Network
              </h3>
              <p className="text-[16px] text-black leading-relaxed">
                Access a growing network of farmers and wholesalers across different regions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0E6320]  rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[20px] font-bold text-black mb-4">
                Time Efficiency
              </h3>
              <p className="text-[16px] text-black leading-relaxed">
                Reduce time spent finding buyers or suppliers with our automated matching system.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="sm:text-[44px] text-3xl font-bold text-black text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {reviews.map(function(review, idx) {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-8 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex mb-4">{renderStars(review.stars)}</div>
                  <p className="text-[16px] text-black mb-6 leading-relaxed">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center`}
                    >
                      <Image
                        src={review.img}
                        alt={review.name}
                        className="w-full h-full object-cover rounded-full"
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-semibold text-black text-[16px]">
                        {review.name}
                      </h4>
                      <p className="text-black text-sm text-[16px]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}



