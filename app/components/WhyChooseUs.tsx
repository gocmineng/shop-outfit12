"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Star } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "On all orders over $150. We deliver worldwide with premium partners.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        description: "Your data is protected. We accept all major credit cards and PayPal.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: RefreshCw,
        title: "Easy Returns",
        description: "Not perfect? Return it within 30 days for a full refund. No questions asked.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: Star,
        title: "Premium Quality",
        description: "We source only the finest materials for our clothing and accessories.",
        color: "bg-purple-100 text-purple-600",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block">
                        Why Shop With Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The Outfit Experience
                    </h2>
                    <p className="text-gray-500 text-lg">
                        We go beyond just selling clothes. We provide a seamless shopping experience tailored to you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
