import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center font-TTCPro">
        <h1 className="text-4xl font-bold mb-3">404</h1>
        <p className="mb-6 text-lg">Page not found.</p>
        <Link to="/" className="underline">
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
