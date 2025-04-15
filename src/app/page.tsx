"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Star, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeaturedProducts,
  });
  const { addToCart } = useCart();
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-secondary min-h-[90vh]">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative w-full h-full overflow-hidden transform transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay"></div>
            <Image
              src="/images/header-1.jpg"
              alt="Italian clothing storage"
              className="w-full h-full object-cover blur-[2px] brightness-75"
              fill
              sizes="50vw"
            />
          </div>
          <div className="relative w-full h-full overflow-hidden transform transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-overlay"></div>
            <Image
              src="/images/header-2.jpg"
              alt="Italian retail display"
              className="w-full h-full object-cover blur-[2px] brightness-75"
              fill
              sizes="50vw"
            />
          </div>
        </div>
        <div className="relative h-auto flex items-center justify-center">
          <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <div className="my-30  backdrop-blur-md bg-white/40 p-8 rounded-3xl border border-white/75 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  Autentici Prodotti Italiani
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
                  {`Scopri la tradizione e l'artigianalità italiana direttamente a casa tua`}
                </p>
                <Link href="/products">
                  <Button className="bg-accent-terracotta hover:bg-accent-terracotta/90 text-white text-lg px-8 py-4 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Esplora la collezione{" "}
                    <ChevronRight className="ml-2 animate-pulse" size={24} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary">
              I Nostri Prodotti
            </h2>
            <Link
              href="/products"
              className="text-accent-terracotta hover:underline flex items-center"
            >
              Vedi tutti <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-secondary rounded-lg p-4 h-80 animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-square bg-white relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full p-4"
                      />
                      {product.isFeatured && (
                        <div className="absolute top-2 right-2 bg-accent-terracotta text-white text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-medium text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={
                                i < product.rating ? "currentColor" : "none"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-foreground/70 ml-2">
                          ({product.reviewCount})
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold">
                          €{product.price.toFixed(2)}
                        </span>
                        <Button
                          className="text-sm p-2 bg-primary hover:bg-primary/90 text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                            });
                          }}
                        >
                          Aggiungi
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Italian Tradition Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Tradizione Italiana
            </h2>
            <p className="text-foreground max-w-3xl mx-auto mb-8">
              {`Ogni prodotto racconta una storia di artigianalità e passione, tramandata di generazione in generazione nelle campagne e città d'Italia.`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Qualità",
                  description:
                    "Selezioniamo solo i prodotti migliori da piccoli produttori italiani",
                },
                {
                  title: "Autenticità",
                  description:
                    "Tutti i prodotti sono certificati e provenienti direttamente dall'Italia",
                },
                {
                  title: "Tradizione",
                  description:
                    "Metodi di produzione tradizionali che rispettano la cultura italiana",
                },
              ].map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
