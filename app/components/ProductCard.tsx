"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Sparkles from "./Sparkles";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Image Container with Sparkle Effect Overlay */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Sparkle Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/20 to-transparent pointer-events-none">
                    <Sparkles count={5} />
                </div>

                {/* Quick Add Button */}
                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400 hover:text-white">
                    <ShoppingCart className="w-5 h-5" />
                </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-700 font-bold">{product.price}</p>
            </div>
        </motion.div>
    );
}
