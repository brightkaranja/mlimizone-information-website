'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');


    return (
        <div id="home" className="w-full px-4 md:px-12 md:py-5 lg:py-0 lg:px-20 xl:px-28 font-sans">
            <header className="w-full mb-8">
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <Image
                            src="/Images/logo.png"
                            alt="MlimiZone Logo"
                            width={90}
                            height={30}
                            priority
                            className="mt-2 max-sm:w-13 max-sm:ml-3 max-xl:w-15"
                        />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-green-900 hover:text-green-800 focus:outline-none focus:ring-0 fixed top-4 right-4 z-60"
                            aria-label="Toggle Menu"
                        >
                            {menuOpen ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
                        </button>

                    </div>

                    <nav
                        className={`${menuOpen
                            ? 'fixed inset-0 h-screen bg-white z-50 p-8 overflow-auto flex flex-col space-y-6 text-left'
                            : 'hidden'
                            } md:flex md:space-x-8 md:items-center md:static md:h-auto md:p-0 md:overflow-visible md:flex-row md:space-y-0 md:text-center text-gray-900 font-medium w-full md:w-auto  md:mt-0`}
                    >
                        <Link
                            href="#home"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveLink('#home');
                            }}
                            className={`block px-4 py-2 md:inline md:px-0 md:py-0 whitespace-nowrap text-sm lg:text-lg xl:text-xl hover:text-[#F7941D] ${activeLink === '#home' ? 'text-[#F7941D]' : ''
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="#features"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveLink('#features');
                            }}
                            className={`block px-4 py-2 md:inline md:px-0 md:py-0 whitespace-nowrap text-sm lg:text-lg xl:text-xl hover:text-[#F7941D] ${activeLink === '#features' ? 'text-[#F7941D]' : ''
                                }`}
                        >
                            Features
                        </Link>
                        <Link
                            href="#how_it_works"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveLink('#how-it-works');
                            }}
                            className={`block px-4 py-2 md:inline md:px-0 md:py-0 whitespace-nowrap text-sm lg:text-lg xl:text-xl hover:text-[#F7941D] ${activeLink === '#how-it-works' ? 'text-[#F7941D]' : ''
                                }`}
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#benefits"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveLink('#benefits');
                            }}
                            className={`block px-4 py-2 md:inline md:px-0 md:py-0 whitespace-nowrap text-sm lg:text-lg xl:text-xl hover:text-[#F7941D] ${activeLink === '#benefits' ? 'text-[#F7941D]' : ''
                                }`}
                        >
                            Benefits
                        </Link>
                        <Link
                            href="#contact_info"
                            onClick={() => {
                                setMenuOpen(false);
                                setActiveLink('#contact');
                            }}
                            className={`block px-4 py-2 md:inline md:px-0 md:py-0 whitespace-nowrap text-sm lg:text-lg xl:text-xl hover:text-[#F7941D] ${activeLink === '#contact' ? 'text-[#F7941D]' : ''
                                }`}
                        >
                            Contact
                        </Link>
                        <Link href="#">
                            <button id="Dashboard" className="hidden md:inline bg-green-900 text-white rounded-md px-4 py-2 font-semibold hover:bg-green-800 transition whitespace-nowrap text-sm lg:text-lg xl:text-xl mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
                                Get Started
                            </button></Link>
                    </nav>
                </div>
            </header>

            <main className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
                <section className="w-full md:w-[50%] max-w-xl lg:max-w-[720px] text-left px-4 md:px-4 lg:px-0 flex-grow flex-shrink-0">
                    <h1 className="font-bold mb-6 leading-tight 
          text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
                        <span className="whitespace-nowrap text-black">Connecting </span>
                        <span className="whitespace-nowrap text-[#0E3C20]">Farmers</span>
                        <br />
                        <span className="whitespace-nowrap text-black">With</span>
                        <span className="text-[#F7941D]"> Wholesalers</span>
                    </h1>

                    <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-8 max-w-md">
                        A USSD-powered platform that lets farmers list crops and wholesalers book & pay - all from any basic phone.
                    </p>
                    <div className="space-y-6">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="font-bold text-green-900">Farmers & Wholesalers:</p>
                            <p className="text-lg">
                                Dial <code className="bg-white px-2 py-1 rounded font-mono">*384*67554#</code>
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                                Register once → Choose your role → Start listing or booking!
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link href="#how_it_works">
                            <button className="w-full border border-[#0E3C20] text-[#0E3C20] rounded-md py-3 font-semibold hover:bg-[#0E3C20] hover:text-white transition whitespace-nowrap">
                                For Farmers
                            </button>
                        </Link>
                        <Link href="#how_it_works">
                            <button className="w-full border border-[#F7941D] text-[#F7941D] rounded-md py-3 font-semibold hover:bg-[#F7941D] hover:text-white transition whitespace-nowrap">
                                For Wholesalers
                            </button>
                        </Link>
                    </div>
                </section>

                <aside className="w-full md:w-[50%] max-w-full md:max-w-[720px] relative rounded-lg overflow-hidden shadow-lg aspect-[3/2] min-h-[320px] lg:min-h-[380px]">
                    <Image
                        src="/Images/Farmer.jpg"
                        alt="Smiling farmer with produce"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1500px) 47vw, 720px"
                    />
                </aside>
            </main>

            <footer className="mx-4 sm:mx-12 md:mx-16 mt-20 font-bold text-left text-[#0E3C20]">
                <div className="grid grid-cols-2 gap-y-6 gap-x-6 justify-items-center sm:flex sm:justify-between">
                    <div className="flex flex-col items-center min-w-[100px]">
                        <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                            500+
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-black">
                            Active Farmers
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[100px]">
                        <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                            150+
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-black">
                            Wholesalers
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[100px]">
                        <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                            10k+
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-black">
                            Transactions
                        </span>
                    </div>
                    <div className="flex flex-col items-center min-w-[100px]">
                        <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                            95%
                        </span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-black">
                            Success rate
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
