"use client";

import { motion } from "framer-motion";
import { Shirt, Footprints, ShoppingBag, Watch, Gem, Glasses } from "lucide-react";

const icons = [
    { id: 1, component: Shirt, color: "text-blue-500" },
    { id: 2, component: Footprints, color: "text-orange-500" },
    { id: 3, component: ShoppingBag, color: "text-purple-500" },
    { id: 4, component: Watch, color: "text-gray-700" },
    { id: 5, component: Gem, color: "text-pink-500" },
    { id: 6, component: Glasses, color: "text-green-500" },
];

export default function InfiniteMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-gray-50 py-12 border-y border-gray-100">
            <div className="flex">
                <motion.div
                    className="flex flex-shrink-0 gap-24 pr-24"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...icons, ...icons, ...icons].map((IconData, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                            <IconData.component className={`w-12 h-12 ${IconData.color}`} />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex flex-shrink-0 gap-24 pr-24"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...icons, ...icons, ...icons].map((IconData, index) => (
                        <div key={index + icons.length * 3} className="flex flex-col items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                            <IconData.component className={`w-12 h-12 ${IconData.color}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
    );
}
