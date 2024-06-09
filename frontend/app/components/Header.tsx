import Link from "next/link";
import { useEffect, useState } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isSticky ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-14"
                src="\images\logo.png"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
                <Link href="/artikel" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Artikel
                </Link>
                <Link href="/kontak" className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Kontak
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
            </Link>
          </div>
      </div>
    </header>
  )
}

export default Header