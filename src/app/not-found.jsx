"use client";

import Link from "next/link";

export default function NotFound404Page() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/vector-1738223599537-9eeb4dd70275?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-black/70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Error : 404 </h1>
          <p className="mb-5">
            The page you’re looking for doesn’t exist or might have been moved.
            Please check the URL or return to the dashboard to continue
            exploring the Medicare Pro platform.
          </p>
          {/* Home button link */}
          <Link href="/">
            <button className="btn btn-primary">Go To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
