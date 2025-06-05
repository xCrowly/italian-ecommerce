"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Star, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useMemo } from "react";

// Separate client component for animations to avoid hydration issues
const FloatingImages = () => {
  // Use predetermined values instead of random ones to avoid hydration mismatches
  const floatingImages = useMemo(() => {
    // Predefined animation configurations for consistent server/client rendering
    const imageConfigs = [
      { x: 8.01, y: 5.56, size: 20.71, duration: 30.61, clockwise: true, delay: -5.66 },
      { x: 37.07, y: 2.60, size: 17.37, duration: 21.90, clockwise: true, delay: -1.70 },
      { x: 71.46, y: 2.59, size: 19.16, duration: 23.61, clockwise: false, delay: -9.62 },
      { x: 4.19, y: 36.70, size: 15.62, duration: 15.75, clockwise: true, delay: -4.06 },
      { x: 36.52, y: 34.68, size: 17.62, duration: 32.57, clockwise: false, delay: -18.55 },
      { x: 73.26, y: 40.83, size: 18.46, duration: 16.01, clockwise: false, delay: -6.37 },
      { x: 6.09, y: 71.67, size: 13.43, duration: 22.60, clockwise: true, delay: -12.52 },
      { x: 33.52, y: 67.62, size: 18.43, duration: 21.51, clockwise: false, delay: -17.14 },
      { x: 74.93, y: 71.77, size: 13.98, duration: 23.57, clockwise: false, delay: -19.20 },
    ];

    const images = [
      "/header-images/hat-157581_640.png",
      "/header-images/t-shirt-153366_640.png", 
      "/header-images/pink-baby-shoes-7238781_640.png",
      "/header-images/apparel-162192_640.png",
      "/header-images/hat-310050_640.png",
      "/header-images/tennis-7968714_640.png",
      "/header-images/bathroom-1299704_640.png",
      "/header-images/shorts-149409_640.png",
      "/header-images/thongs-310437_640.png",
    ];

    return images.map((src, index) => {
      const config = imageConfigs[index % imageConfigs.length];
      return {
        src,
        x: config.x,
        y: config.y,
        size: config.size,
        animationDuration: config.duration,
        rotationDirection: config.clockwise ? 1 : -1,
        delay: config.delay,
      };
    });
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0px, 0px);
          }
          25% {
            transform: translate(10px, 10px);
          }
          50% {
            transform: translate(0px, 20px);
          }
          75% {
            transform: translate(-10px, 10px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
        
        @keyframes rotate-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes rotate-counterclockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        .floating-image {
          will-change: transform;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden">
        {floatingImages.map((img, index) => (
          <div
            key={index}
            className="absolute pointer-events-none floating-image"
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              width: `${img.size}%`,
              height: "auto",
              animationName: `float, ${img.rotationDirection > 0 ? "rotate-clockwise" : "rotate-counterclockwise"}`,
              animationDuration: `${img.animationDuration}s, ${img.animationDuration * 2}s`,
              animationTimingFunction: "ease-in-out, linear",
              animationIterationCount: "infinite, infinite",
              animationDelay: `${img.delay}s`,
              animationFillMode: "none",
            }}
          >
            <Image
              src={img.src}
              alt="Italian product"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority={index < 4} // Only prioritize loading the first 4 images
              loading={index >= 4 ? "lazy" : undefined}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: fetchFeaturedProducts,
  });
  const { addToCart } = useCart();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-primary min-h-[90vh]">
        <FloatingImages />
        <div className="relative h-screen flex items-center justify-center">
          <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <div className="py-16 bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-primary/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-terracotta drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                  Autentici Prodotti Italiani
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-primary drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  {`Scopri la tradizione e l'artigianalità italiana direttamente a casa tua`}
                </p>
                <Link href="/products">
                  <Button className="bg-accent-terracotta cursor-pointer hover:bg-accent-terracotta/90 text-white text-lg px-8 py-4 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                  className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-square bg-white relative overflow-hidden">
                      <div className="relative w-full h-full p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="auto"
                          priority
                          className="object-cover"
                        />
                      </div>
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
                        <span className="text-accent-navy font-bold">
                          €{product.price.toFixed(2)}
                        </span>
                        <Button
                          className="text-md px-5 py-3 bg-primary hover:bg-primary/90 hover:scale-110 hover:cursor-pointer text-white"
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
