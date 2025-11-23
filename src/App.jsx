import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";

import sampleReviews from "./data/sampleReviews.json";

export default function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("anglepoise_reviews");
    let savedReviews = [];
    try {
      savedReviews = saved ? JSON.parse(saved) : [];
    } catch (e) {
      savedReviews = [];
    }
    const combined = [...sampleReviews, ...savedReviews];
    setReviews(combined);
  }, []);

  const addReview = (review) => {
    const newReview = { ...review, id: Date.now() };
    const saved = localStorage.getItem("anglepoise_reviews");
    let savedReviews = [];
    try {
      savedReviews = saved ? JSON.parse(saved) : [];
    } catch (e) {
      savedReviews = [];
    }
    const updatedSaved = [...savedReviews, newReview];
    localStorage.setItem("anglepoise_reviews", JSON.stringify(updatedSaved));
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9] text-[#171717]">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <Features />
          <Reviews reviews={reviews} />
          <ReviewForm onAdd={addReview} />
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anglepoise - Product Page Demo (QCAC
        Assessment)
      </footer>
    </div>
  );
}
