"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [animationOffset, setAnimationOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            const el = document.getElementById("shoe-animation");
            if (el) {
                setAnimationOffset(el.offsetTop);
            }
        };

        // Initial check and on resize
        updateOffset();
        window.addEventListener("resize", updateOffset);
        // Also check after a slight delay to ensure layout is done
        setTimeout(updateOffset, 100);

        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    const opacity = useTransform(
        scrollY,
        [Math.max(0, animationOffset - 600), Math.max(0, animationOffset - 100)],
        [1, 0]
    );

    // Also control pointer events to avoid clicking invisible navbar
    const pointerEvents = useTransform(opacity, (v) => (v <= 0.1 ? "none" : "auto"));

    return (
        <motion.nav
            style={{ opacity, pointerEvents }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6"
        >
            <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 px-8 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
                    Outfit<span className="text-yellow-500">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <NavLink href="#">New Arrivals</NavLink>
                    <NavLink href="#">Clothes</NavLink>
                    <NavLink href="#">Bags</NavLink>
                    <NavLink href="#">Shoes</NavLink>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                        <ShoppingBag className="w-5 h-5 text-gray-700" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>
                    <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="relative group hover:text-gray-900 transition-colors">
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
        </Link>
    );
}
