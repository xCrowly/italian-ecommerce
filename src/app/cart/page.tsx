"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8">
          Il Tuo Carrello
        </h1>

        {itemCount === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-foreground mb-4">
              Il tuo carrello è vuoto
            </h2>
            <Link href="/products">
              <Button className="bg-primary p-3 hover:bg-primary/90 text-white">
                Sfoglia i nostri prodotti
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-background">
                  <h2 className="text-lg font-medium text-foreground">
                    {itemCount} {itemCount === 1 ? "articolo" : "articoli"} nel
                    carrello
                  </h2>
                </div>

                <ul className="divide-y divide-background">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="w-full sm:w-32 h-32 bg-white rounded-md overflow-hidden flex items-center justify-center">
                          {item.image ? (
                            <div className="relative w-full h-full">
                              {" "}
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="text-foreground/30">No image</div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-foreground">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-foreground/50 hover:text-accent-terracotta transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <p className="text-foreground mt-2">
                            €{item.price.toFixed(2)}
                          </p>

                          <div className="mt-4 flex items-center">
                            <label
                              htmlFor={`quantity-${item.id}`}
                              className="sr-only"
                            >
                              Quantità
                            </label>
                            <select
                              id={`quantity-${item.id}`}
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="border border-background rounded-md py-1 px-2 text-foreground bg-white"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                            <span className="ml-2 text-foreground/70">
                              x €{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="p-6 border-t border-background flex justify-end">
                  <button
                    onClick={clearCart}
                    className="text-sm text-accent-terracotta hover:underline"
                  >
                    Svuota carrello
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-secondary rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-lg font-medium text-foreground mb-6">
                  Riepilogo ordine
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Subtotale</span>
                    <span className="text-foreground">
                      €{cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-foreground/70">Spedizione</span>
                    <span className="text-foreground">Gratis</span>
                  </div>

                  <div className="border-t border-background pt-4 mt-4 flex justify-between">
                    <span className="font-medium text-foreground">Totale</span>
                    <span className="font-bold text-primary">
                      €{cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="pt-4">
                    <Link href="/checkout">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                        Procedi all acquisto
                      </Button>
                    </Link>
                  </div>

                  <div className="text-sm text-foreground/70 text-center mt-4">
                    <p>Oppure</p>
                    <Link
                      href="/products"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      Continua lo shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
