"use client";
import React from "react";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <FAQ />
            <Footer />
        </main>
    );
}
