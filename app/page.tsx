import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-yellow-100 selection:text-yellow-900">
      <Navbar />

      <Hero />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Selected for You</h2>
            <p className="text-gray-500">Handpicked items for your wardrobe.</p>
          </div>
          <a href="#" className="hidden md:block text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-200 hover:border-gray-900 pb-0.5">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <a href="#" className="inline-block px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50">
            View All Products
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-gray-100 bg-gray-50/50 text-center">
        <p className="text-gray-500 text-sm">© 2026 Outfit Commerce. All rights reserved.</p>
      </footer>
    </main>
  );
}
