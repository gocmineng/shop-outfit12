"use client";

import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-yellow-100/50 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
                <Sparkles count={20} />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-500 tracking-wide uppercase mb-6">
                        New Collection 2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 relative">
                            Everyday Style
                            <motion.span
                                className="absolute -top-1 -right-8 text-yellow-400 text-4xl"
                                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ✨
                            </motion.span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Discover premium essentials crafted for the modern individual.
                        Simple, elegant, and timeless designs that speak for themselves.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200/50"
                        >
                            Shop Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 transition-colors"
                        >
                            View Lookbook
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
