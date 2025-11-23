import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-2xl font-bold">
          Anglepoise®
        </a>
        <nav className="z-100 hidden items-center space-x-6 md:flex">
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#reviews" className="text-gray-600 hover:text-gray-900">
            Reviews
          </a>
          <button
            aria-label="buy-now"
            className="ml-4 rounded bg-[#171717] px-4 py-2 text-white"
          >
            Buy Now
          </button>
        </nav>
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((s) => !s)}
            className="rounded p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="absolute left-4 right-4 top-full z-50 mt-2 rounded-lg border bg-white p-4">
            <a
              href="#features"
              onClick={close}
              className="block py-2 text-lg text-gray-700 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#reviews"
              onClick={close}
              className="block py-2 text-lg text-gray-700 hover:text-gray-900"
            >
              Reviews
            </a>
            <button
              onClick={() => {
                close();
                const el = document.querySelector(
                  'button[aria-label="buy-now"]',
                );
                if (el) el.click();
              }}
              className="mt-3 w-full rounded bg-[#171717] px-4 py-2 text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
