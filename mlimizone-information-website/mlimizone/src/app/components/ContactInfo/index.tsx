"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail } from "lucide-react";
import { FiSend } from "react-icons/fi";


export default function ContactInfo() {
 const [formData, setFormData] = useState({
   name: "",
   contact: "",
   subject: "",
   message: "",
 });

 const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   const { name, value } = e.target;
   setFormData((prev) => ({
     ...prev,
     [name]: value,
   }));
 };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    alert('MlimiZone is happy to hear from you, we will get back soon.');
    setFormData({ name: '', contact: '', subject: '', message: '' });
    
  }


 return (
   <div id="contact_info" className="bg-[#F4900C] ">

     <div className="container mx-auto px-4 py-12 max-w-7xl ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="text-white space-y-16 pl-3">
           <div>
             <h1 className="text-[30px] sm:text-[44px] font-bold leading-tight mb-6">
               Ready to Transform Your Agricultural Business?
             </h1>
             <p className="text-xl text-white-100 mb-8 text-[18px]">
               Join thousands of farmers and wholesalers who are already benefiting from our platform
             </p>
             
           </div>
           <div className="space-y-4">
             <div className="flex items-center space-x-3">
               <Phone className="h-5 w-5 text-white-200" />
               <div>
                 <div className="font-semibold text-[16px]">Phone</div>
                 <div className="text-white-200 text-[16px]">+254 783781799</div>
               </div>
             </div>
             <div className="flex items-center space-x-3">
               <Mail className="h-5 w-5 text-white-200" />
               <div>
                 <div className="font-semibold text-[16px]">Email</div>
                 <div className="text-white-200">
                    <p><a href="mailto:mlimizone@info.com text-[16px]">contact@mlimzone.com</a></p>
                </div>
               </div>
             </div>
           </div>
           <div>
             <a
               href="#contact-form"
               className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors group text-[18px]"
             >
               Get in touch with us
               <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
             </a>
           </div>
         </div>


         <div className="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:mx-0">
           <div id="contact-form" className="bg-white rounded-2xl shadow-xl p-8">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                 <label htmlFor="name" className="text-sm font-medium text-gray-700 text-[16px]">
                   Name
                 </label>
                 <input
                   id="name"
                   name="name"
                   type="text"
                   placeholder="Enter name"
                   value={formData.name}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-[16px]"
                   required
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="contact" className="text-sm font-medium text-gray-700 text-[16px]">
                   Contact
                 </label>
                 <input
                   id="contact"
                   name="contact"
                   type="text"
                   placeholder="Enter contact"
                   value={formData.contact}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-[16px]"
                   required
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="subject" className="text-sm font-medium text-gray-700 text-[16px]">
                   Subject
                 </label>
                 <input
                   id="subject"
                   name="subject"
                   type="text"
                   placeholder="Subject"
                   value={formData.subject}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-[16px]"
                 />
               </div>
               <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium text-gray-700 text-[16px]">
                   Message
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   placeholder="Type your message here..."
                   value={formData.message}
                   onChange={handleInputChange}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-24 resize-none text-gray-700 text-[16px]"
                   required
                 />
               </div>
               <button className="w-full bg-[#233A20] hover:bg-green-800 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors flex justify-center items-center"
               >Send message
                 <FiSend className="ml-2 h-5 w-5" />
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
