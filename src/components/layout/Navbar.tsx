"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../../context/CartContext";
import CartIcon from "../ui/CartIcon";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-primary font-serif text-xl font-bold italic"
            >
              Bella Italia
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className={`${
                pathname === "/products" ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              Prodotti
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              Chi Siamo
            </Link>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              Contatti
            </Link>

            {/* Cart with indicator */}
            <Link href="/cart" className="relative">
              <CartIcon className="h-6 w-6 text-foreground hover:text-primary" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-secondary`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/products"
            className={`${
              pathname === "/products"
                ? "bg-primary text-white"
                : "text-foreground hover:bg-primary hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Prodotti
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "bg-primary text-white"
                : "text-foreground hover:bg-primary hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chi Siamo
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "bg-primary text-white"
                : "text-foreground hover:bg-primary hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contatti
          </Link>
          <Link
            href="/cart"
            className={`${
              pathname === "/cart"
                ? "bg-primary text-white"
                : "text-foreground hover:bg-primary hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium flex items-center`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Carrello
            {itemCount > 0 && (
              <span className="ml-2 bg-accent-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
