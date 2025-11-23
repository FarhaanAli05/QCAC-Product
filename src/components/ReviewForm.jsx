import React, { useState } from "react";

export default function ReviewForm({ onAdd }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !title || !body)
      return alert("Please enter your name, a title, and the review body");
    onAdd({ name, rating: Number(rating), title, body });
    setName("");
    setRating(5);
    setTitle("");
    setBody("");
  };

  return (
    <section className="py-12">
      <h3 className="mb-4 text-3xl font-bold">Write a Review</h3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded p-3"
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="rounded p-3"
          required
        >
          <option value={5}>5 - Excellent</option>
          <option value={4}>4 - Very good</option>
          <option value={3}>3 - Good</option>
          <option value={2}>2 - Fair</option>
          <option value={1}>1 - Poor</option>
        </select>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Review title"
          className="rounded p-3 md:col-span-2"
          required
        />

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your review..."
          className="rounded p-3 md:col-span-2"
          rows={5}
          required
        />

        <div className="md:col-span-2">
          <button className="rounded bg-[#171717] px-6 py-3 text-white" type="submit">
            Submit Review
          </button>
        </div>
      </form>
    </section>
  );
}
