"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/Button";
import { Star, Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface ProductsResponse {
  products: Product[];
  pagination: PaginationData;
}

// Fetch products with pagination
const fetchProducts = async (page: number): Promise<ProductsResponse> => {
  const res = await fetch(`/api/products?page=${page}&limit=12`);
  return res.json();
};

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useQuery<ProductsResponse>({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProducts(currentPage),
  });

  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter and sort products
  const filteredAndSortedProducts = data?.products
    ? data.products
        .filter((product: Product) => {
          // Apply search filter
          if (searchQuery) {
            return product.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          }
          return true;
        })
        .filter((product: Product) => {
          // Apply price range filter
          const min = minPrice ? parseFloat(minPrice) : -Infinity;
          const max = maxPrice ? parseFloat(maxPrice) : Infinity;
          const isInCustomRange = product.price >= min && product.price <= max;

          // If custom price range is set, it takes precedence
          if (minPrice || maxPrice) {
            return isInCustomRange;
          }

          // Otherwise, use dropdown selection
          switch (priceRange) {
            case "under-50":
              return product.price < 50;
            case "50-100":
              return product.price >= 50 && product.price <= 100;
            case "over-100":
              return product.price > 100;
            default:
              return true;
          }
        })
        .sort((a: Product, b: Product) => {
          // Apply sorting
          switch (sortBy) {
            case "price-low":
              return a.price - b.price;
            case "price-high":
              return b.price - a.price;
            case "rating":
              return b.rating - a.rating;
            default:
              return b.isFeatured ? 1 : -1;
          }
        })
    : [];

  const totalPages = data?.pagination.totalPages || 1;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-primary text-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold mb-4">
            I Nostri Prodotti
          </h1>
          <p className="text-lg max-w-2xl">
            Esplora la nostra selezione di prodotti artigianali italiani, curati
            con passione e tradizione.
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50"
                size={20}
              />
              <input
                type="text"
                placeholder="Cerca prodotti..."
                className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg bg-secondary text-foreground placeholder:text-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort */}
            <select
              className="w-full px-4 py-2 border border-stone-300 rounded-lg bg-secondary text-foreground"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">In Evidenza</option>
              <option value="price-low">Prezzo: Basso - Alto</option>
              <option value="price-high">Prezzo: Alto - Basso</option>
              <option value="rating">Valutazione</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Price Range Dropdown */}
            <select
              className="w-full px-4 py-2 border border-stone-300 rounded-lg bg-secondary text-foreground"
              value={priceRange}
              onChange={(e) => {
                setPriceRange(e.target.value);
                // Clear custom price inputs when selecting a preset range
                setMinPrice("");
                setMaxPrice("");
              }}
            >
              <option value="all">Tutte le fasce di prezzo</option>
              <option value="under-50">Sotto €50</option>
              <option value="50-100">€50 - €100</option>
              <option value="over-100">Sopra €100</option>
            </select>

            {/* Custom Price Range */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Prezzo min €"
                className="w-1/2 px-4 py-2 border border-stone-300 rounded-lg bg-secondary text-foreground placeholder:text-foreground/50"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  setPriceRange("all"); // Reset dropdown when using custom range
                }}
                min="0"
                step="0.01"
              />
              <span className="text-foreground">-</span>
              <input
                type="number"
                placeholder="Prezzo max €"
                className="w-1/2 px-4 py-2 border border-stone-300 rounded-lg bg-secondary text-foreground placeholder:text-foreground/50"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setPriceRange("all"); // Reset dropdown when using custom range
                }}
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-secondary rounded-lg p-4 h-80 animate-pulse"
              ></div>
            ))}
          </div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-foreground mb-4">
              Nessun prodotto trovato
            </h2>
            <p className="text-foreground/70">
              Prova a modificare i filtri di ricerca
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map((product) => (
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

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <Button
                variant="outline"
                className="p-2"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </Button>

              {getPageNumbers().map((pageNum, index) => (
                <Button
                  key={index}
                  variant={pageNum === currentPage ? "primary" : "outline"}
                  className={`px-4 py-2 ${
                    pageNum === "..." ? "pointer-events-none" : ""
                  }`}
                  onClick={() => {
                    if (typeof pageNum === "number") {
                      setCurrentPage(pageNum);
                    }
                  }}
                >
                  {pageNum}
                </Button>
              ))}

              <Button
                variant="outline"
                className="p-2"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
