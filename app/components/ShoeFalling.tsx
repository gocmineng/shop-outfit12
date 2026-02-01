"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

export default function ShoeFalling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Total frames
    const frameCount = 108;

    // Load images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Format: 00001.png to 00108.png
            const src = `/shop-outfit12/assets/Shoe_cloud_BgA/${i.toString().padStart(5, "0")}.png`;
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Triggers when container enters view until it leaves
    });

    // Smooth the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Custom hook logic to render frame based on scroll
    const currentIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

    useMotionValueEvent(currentIndex, "change", (latest) => {
        renderFrame(Math.round(latest));
    });

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !images[index]) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image - "cover" logic
        const img = images[index];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial Render on load
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <section
            id="shoe-animation"
            ref={containerRef}
            className="relative h-[300vh] bg-white"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Text Overlay for context (Optional) */}
                <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
                    <h3 className="text-2xl font-bold text-gray-300 uppercase tracking-widest opacity-50">
                        Sky High Comfort
                    </h3>
                </div>

                <canvas
                    ref={canvasRef}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                />

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                        <p className="text-gray-400">Loading Animation...</p>
                    </div>
                )}
            </div>
        </section>
    );
}
