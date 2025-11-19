"use client"

import Image from "next/image";

export default function Footer() {
 return (
   <footer className="bg-[#233A20] text-white py-4 px-5">
     <div
       className=" xl:mx-40 lg:mx-30 sm:flex md:flex-row  md:items-start md:gap-10 xl:gap-60" >
       <div className="pr-6 xl:mt-5">
         <Image src="/images/logo.png" alt="Logo" className="h-12 mb-3" height={100} width={100}/>
         <p className="max-w-xs leading-relaxed">
           Bridging the gap between farmers and wholesalers with innovative
           technology solutions.
         </p>
       </div>


       <nav className="pr-6 py-10">
         <h4 className="font-bold mb-3">Platform</h4>
         <ul className="list-none p-0 m-0 leading-relaxed space-y-1.5 space-x-30">
           <li>Features</li>
           <li>How It Works</li>
           <li>Pricing</li>
           <li>FAQ</li>
         </ul>
       </nav>


       <nav className="md:mt-9">
         <h4 className="font-bold mb-3">Support</h4>
         <ul className="list-none p-0 m-0 leading-relaxed space-y-1.5">
           <li>Contact Us</li>
           <li>Privacy Policy</li>
           <li>Help Center</li>
           <li>Terms of Service</li>
         </ul>
       </nav>
     </div>


     <hr className="border-white-9 my-5 " />


   <div className="text-center text-[16px] leading-tight">
       &copy; 2025 mlimizone. All rights reserved.
     </div>
   </footer>
 );
}
