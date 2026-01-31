"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const generateSparkles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 2,
    }));
};

export default function Sparkles({ count = 10 }: { count?: number }) {
    const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        setSparkles(generateSparkles(count));
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute bg-yellow-300 rounded-full shadow-[0_0_8px_2px_rgba(253,224,71,0.6)]"
                    style={{
                        top: sparkle.top,
                        left: sparkle.left,
                        width: sparkle.size,
                        height: sparkle.size,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
