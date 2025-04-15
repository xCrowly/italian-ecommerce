"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="font-serif text-4xl font-bold text-primary mb-6">
            Wholesale Partnership
          </h1>
          <p className="text-foreground/80 text-lg mb-8">
            Join our network of retailers and bring authentic Italian products to your customers.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                Why Partner With Us?
              </h2>
              <ul className="space-y-3">
                {[
                  "Direct sourcing from Italian artisans",
                  "Competitive wholesale pricing",
                  "Exclusive product lines",
                  "Flexible minimum order quantities",
                  "Dedicated account manager",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-accent-terracotta mr-2">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                Requirements
              </h2>
              <ul className="space-y-3">
                {[
                  "Valid business license",
                  "Physical or online retail presence",
                  "Commitment to brand values",
                  "Minimum order value of €1,000",
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-accent-terracotta mr-2">•</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
            Wholesale Inquiry Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Name *
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Business Type *
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select business type</option>
                <option value="retail">Retail Store</option>
                <option value="online">Online Store</option>
                <option value="both">Both</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your business and what products you're interested in..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 