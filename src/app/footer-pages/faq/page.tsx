"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location. Generally, orders within Europe are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for wholesale orders.",
    },
    {
      question: "Are your products authentic Italian?",
      answer: "Yes, all our products are sourced directly from Italian artisans and manufacturers. Each item comes with a certificate of authenticity.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in their original packaging. Please visit our Returns & Refunds page for more details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">
        Frequently Asked Questions
      </h1>
      <p className="text-foreground/80 text-lg mb-12">
        Find answers to common questions about our products, shipping, and services.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-background rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-secondary hover:bg-secondary/90 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-primary">{faq.question}</span>
              <ChevronDown
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-background/50">
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-secondary rounded-lg">
        <h2 className="font-serif text-xl font-semibold text-primary mb-4">
          Still have questions?
        </h2>
        <p className="text-foreground/80 mb-4">
          If you cannot find the answer to your question, please feel free to contact our customer service team.
        </p>
        <a
          href="mailto:badawy.ca@gmail.com"
          className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
} 