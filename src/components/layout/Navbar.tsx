"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../../context/CartContext";
import CartIcon from "../ui/CartIcon";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, cartAnimation, cartItems, removeFromCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const cartDropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-secondary border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-primary font-serif text-xl font-bold italic"
            >
              Bella Italia
            </Link>
          </div>

          {/* Desktop Navigation and Cart - Grouped together */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
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

            {/* Cart Icon */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={cartDropdownRef}
            >
              <Link href="/cart" className="relative">
                <CartIcon
                  className={`h-6 w-6 text-foreground hover:text-primary transition-transform ${
                    cartAnimation ? "animate-bounce scale-125" : ""
                  }`}
                />
                {itemCount > 0 && (
                  <span
                    className={`absolute -top-2 -right-2 bg-accent-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${
                      cartAnimation ? "animate-ping" : ""
                    }`}
                  >
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Enhanced Cart Dropdown */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 top-16 w-96 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-[80vh] overflow-y-auto"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      Il Tuo Carrello
                    </h3>
                    {cartItems.length === 0 ? (
                      <p className="text-center text-gray-500 py-4">
                        Il carrello è vuoto
                      </p>
                    ) : (
                      <>
                        <div className="space-y-4">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg"
                            >
                              <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                {item.image && (
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground">
                                  {item.name}
                                </h4>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-sm text-primary font-bold">
                                    {item.quantity} x €{item.price.toFixed(2)}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeFromCart(item.id);
                                    }}
                                    className="text-gray-400 hover:text-accent-terracotta transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Link href="/cart">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                              Vai al Carrello
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile View - Cart and Menu Button */}
          <div className="flex items-center space-x-4 ml-auto md:hidden">
            {/* Cart Icon for Mobile */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/cart" className="relative">
                <CartIcon
                  className={`h-6 w-6 text-foreground hover:text-primary transition-transform ${
                    cartAnimation ? "animate-bounce scale-125" : ""
                  }`}
                />
                {itemCount > 0 && (
                  <span
                    className={`absolute -top-2 -right-2 bg-accent-terracotta text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${
                      cartAnimation ? "animate-ping" : ""
                    }`}
                  >
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Enhanced Cart Dropdown */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 top-16 w-96 bg-white rounded-lg shadow-xl border border-gray-100 z-50 max-h-[80vh] overflow-y-auto"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      Il Tuo Carrello
                    </h3>
                    {cartItems.length === 0 ? (
                      <p className="text-center text-gray-500 py-4">
                        Il carrello è vuoto
                      </p>
                    ) : (
                      <>
                        <div className="space-y-4">
                          {cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg"
                            >
                              <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                {item.image && (
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-foreground">
                                  {item.name}
                                </h4>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-sm text-primary font-bold">
                                    {item.quantity} x €{item.price.toFixed(2)}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeFromCart(item.id);
                                    }}
                                    className="text-gray-400 hover:text-accent-terracotta transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Link href="/cart">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                              Vai al Carrello
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
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
        </div>
      </div>
    </nav>
  );
}
