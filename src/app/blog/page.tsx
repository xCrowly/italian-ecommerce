import React from "react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Art of Italian Craftsmanship",
      date: "March 15, 2024",
      excerpt: "Discover the centuries-old traditions that make Italian products truly special...",
      category: "Culture",
    },
    {
      title: "From Milan to Your Home",
      date: "March 10, 2024",
      excerpt: "How we ensure the authenticity and quality of every product we ship...",
      category: "Behind the Scenes",
    },
    {
      title: "Spring Collection 2024",
      date: "March 5, 2024",
      excerpt: "Explore our latest collection featuring the finest Italian products...",
      category: "New Arrivals",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8">Our Blog</h1>
      <p className="text-foreground/80 text-lg mb-12">
        Stay updated with the latest news, stories, and insights from the world of Italian craftsmanship.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              <span className="text-sm text-accent-terracotta font-medium">
                {post.category}
              </span>
              <h2 className="font-serif text-xl font-semibold text-primary mt-2 mb-3">
                {post.title}
              </h2>
              <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground/60">{post.date}</span>
                <button className="text-primary hover:text-accent-terracotta font-medium text-sm">
                  Read more →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 