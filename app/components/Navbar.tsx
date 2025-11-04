'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand - RenderSoft */}
          <Link 
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            RenderSoft
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/servicios"
              className={`font-semibold transition-colors duration-300 ${
                isActive('/servicios')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Servicios
            </Link>

            <Link
              href="/nosotros"
              className={`font-semibold transition-colors duration-300 ${
                isActive('/nosotros')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Nosotros
            </Link>

            <Link
              href="/contacto"
              className={`font-semibold transition-colors duration-300 ${
                isActive('/contacto')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/servicios"
            className={`block py-2 font-semibold ${
              isActive('/servicios')
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Servicios
          </Link>

          <Link
            href="/nosotros"
            className={`block py-2 font-semibold ${
              isActive('/nosotros')
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className={`block py-2 font-semibold ${
              isActive('/contacto')
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}