"use client"
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaLeaf } from "react-icons/fa";

const farmerSteps = [
  {
    step: 1,
    label: "Dial USSD",
    description: "Dial *384*67554# on your basic mobile phone and register as a farmer which happens once",
  },
  {
    step: 2,
    label: "List Crops",
    description: "Choose crop => Enter quantity => Get a confirmation of successful listing",
  },
  {
    step: 3,
    label: "Get Booked",
    description: "Interested wholesalers contact's the you directly to negotiate and complete transactions.",
  },
];
const wholesalerSteps = [
  {
    step: 1,
    label: "Dial USSD",
    description: "Dial *384*67554# on your basic mobile phone and register as a wholesaler which happens once",
  },
  {
    step: 2,
    label: "Browse Listings",
    description: "View listing of available crops , quantities,farmers information and the total amount.",
  },
  {
    step: 3,
    label: "Book & Pay",
    description: "Select => Confirm => Pay via M-Pesa STK push.",
  },
];
export default function HowItWorks() {
  return (
    <div id="how_it_works" className="max-w-8xl mx-auto px-1 py-20 bg-white ml-3 mr-3">
      <h2 className="text-[44px] font-bold text-center mb-2">How it Works</h2>
      <p className="text-center text-[16px] text-black-700 mb-10 md:text-[19px] lg:text-[16px]">One USSD code. Two roles. Full control.</p>
      <div className="flex flex-col md:flex-column md:items-center lg:flex-row gap-37 md:gap-10 lg:gap-37 justify-center mt-4 ">

        <div className="flex-1 bg-[#F7F3F3] rounded-lg shadow-md p-6 max-w-130">
          <div id="farmers"className="flex items-center mb-4 font-semibold text-[#0E3C20] text-[20px] md:text-[25px] lg:text-[20px]"><FaLeaf size={32} className="mr-6" />For Farmers</div>
          <ol className="  pl-2 space-y-7">
            {farmerSteps.map((steps, i) => (
              <li key={i} className="flex gap-5 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-[#0E3C20] text-white rounded-full flex items-center justify-center font-bold">{steps.step}</div>
                </div>
                <div>
                  <div className="font-bold md:text-[20px] lg:text-[16px]">{steps.label}</div>
                  <div className="text-black text-[16px] md:text-[18px] lg:text-[16px]">{steps.description}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex-1 bg-[#F7F3F3] rounded-lg shadow-md p-6 md:py-15 lg:p-6 max-w-130 ">
          <div id="wholesalers"className="flex items-center mb-4 font-semibold text-[#F4900C] text-[20px] md:text-[25px] lg:text[20px]"><MdOutlineShoppingCart size={32} className="mr-3.5" /> For Wholesalers</div>
          <ol className=" pl-2 space-y-5">
            {wholesalerSteps.map((steps, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7 bg-[#F4900C] text-white rounded-full flex items-center justify-center font-bold">{steps.step}</div>
                </div>
                <div>
                  <div className="font-bold md:text-[20px] lg:text-[16px]">{steps.label}</div>
                  <div className=" text-black text-[16px] md:text-[18px] lg:text-[16px]">{steps.description}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
