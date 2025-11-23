import React from "react";

function Stars({ n }) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "" : "opacity-30"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews({ reviews }) {
  return (
    <section id="reviews">
      <h2 className="mb-6 text-3xl font-bold">Customer Reviews</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-lg bg-white p-6">
            <Stars n={r.rating} />
            <h4 className="mt-3 font-semibold">
              {r.title ? r.title : (r.message || "").split("\n")[0].slice(0, 60)}
              {((r.title ? r.title : r.message || "").length > 60) ? "..." : ""}
            </h4>
            <p className="mt-2 text-gray-600">{r.body ? r.body : r.message}</p>
            <div className="mt-4 text-sm text-gray-500">- {r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
