import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              Bella Italia
            </h3>
            <p className="text-sm">
              Bringing authentic Italian products to your doorstep since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/" target="_blank" className="text-primary hover:text-accent-terracotta">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/" target="_blank" className="text-primary hover:text-accent-terracotta">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-badawy-61bb7a213/" target="_blank" className="text-primary hover:text-accent-terracotta">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                <span>Milano, Italy</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <a
                  href="mailto:badawy.ca@gmail.com"
                  className="hover:underline"
                >
                  badawy.ca@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="tel:+393928097565" className="hover:underline">
                  +39 39 2809 7565
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-0.5 flex-shrink-0" size={16} />
                <span>Mon-Fri: 9AM-6PM CET</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/footer-pages/about"
                  className="hover:underline hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:underline hover:text-primary"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/blog"
                  className="hover:underline hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/faq"
                  className="hover:underline hover:text-primary"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/wholesale"
                  className="hover:underline hover:text-primary"
                >
                  Wholesale Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">
              Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/footer-pages/privacy"
                  className="hover:underline hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/terms"
                  className="hover:underline hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/shipping"
                  className="hover:underline hover:text-primary"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/returns"
                  className="hover:underline hover:text-primary"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/footer-pages/cookies"
                  className="hover:underline hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 max-w-md mx-auto">
          <h4 className="font-serif text-lg font-semibold text-primary text-center mb-4">
            Subscribe to Our Newsletter
          </h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 bg-background rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-background text-center text-sm">
          <p>
            © {new Date().getFullYear()} Bella Italia. All rights reserved.
            P.IVA: IT12345678901
          </p>
          <p className="mt-1 text-foreground/70">
            Authentic Italian products shipped worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
