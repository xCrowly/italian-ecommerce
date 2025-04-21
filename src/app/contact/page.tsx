// src/app/contact/page.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    // Validate form fields before submission
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Real API call example using fetch
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      // Type-safe error handling
      const error = err as Error;
      setError(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen py-12  container mx-auto max-w-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8">
          Contattami
        </h1>
        {success && (
          <p className="text-green-500 mb-4">Messaggio inviato con successo!</p>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-foreground"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border border-stone-300 bg-gray-50 rounded-lg p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-stone-300 bg-gray-50 rounded-lg p-2"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-foreground"
            >
              Messaggio
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border border-stone-300 bg-gray-50 rounded-lg p-2"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="bg-primary py-3 px-5 hover:bg-primary/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio..." : "Invia Messaggio"}
          </Button>
        </form>
      </div>
    </div>
  );
}
