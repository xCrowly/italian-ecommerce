"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-primary mb-4">
          Grazie per il tuo ordine!
        </h1>
        <p className="text-lg text-foreground/80 mb-8">
          La conferma dell&apos;ordine è stata inviata al tuo indirizzo email.
          Ti terremo aggiornato sullo stato della spedizione.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => router.push("/products")}
            className="py-2 bg-accent-terracotta hover:bg-accent-terracotta/90 text-white w-full sm:w-auto px-8"
          >
            Continua lo Shopping
          </Button>
          <div className="text-sm text-foreground/60 mt-8">
            Hai domande sul tuo ordine?{" "}
            <button
              onClick={() => router.push("/contact")}
              className="text-accent-terracotta hover:underline"
            >
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
