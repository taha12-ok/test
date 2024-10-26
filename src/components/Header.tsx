"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
        setShowText(false); 
      } else {
        setIsVisible(false);
        setShowText(true); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isHomePage = router.pathname === '/';
  return (
    <>
      <header className={`sticky top-0 bg-white transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : ''}`}>
        <nav className="container mx-auto p-4 flex justify-between items-center z-10">
          <div className="flex items-center">
            <div className="md:hidden ml-4">
              <button
                className="text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          {isHomePage && (
            <Link href="/blog" className="text-gray-900">
              <span className="bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-yellow-500">
                VIEW MY BLOG
              </span>
            </Link>
          )}
        </nav>
      </header>
      <div className={`sticky top-0 bg-white shadow-lg z-10 transition-transform duration-300 ease-in-out ${isVisible ? '' : 'translate-y-0'}`}>
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="logo.png"
                className="h-12 w-auto object-contain"
                alt=""/>
            </Link>
          </div>
          <ul className="hidden md:flex gap-4 md:gap-8">
            <li className="py-2.5 px-5 text-sm text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2.5 px-5 text-sm text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="py-2.5 px-5 text-sm text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
              <Link href={"/blog"}>Blogs</Link>
            </li>
            <li className="py-2.5 px-5 text-sm text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>
          {isMenuOpen && (
            <ul className="md:hidden flex flex-col gap-4 absolute top-16 left-0 w-full bg-white shadow-lg p-4">
              <li className="py-2 text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2 text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="py-2 text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
                <Link href={"/blog"}>Blogs</Link>
              </li>
              <li className="py-2 text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-blue-700 font-semibold">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          )}
          <Link href="/blog" className="text-gray-900">
            <span className="bg-teal-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-yellow-500">
              VIEW MY BLOG
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
}
