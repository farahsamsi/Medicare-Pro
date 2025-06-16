"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export default function AdminCredentials() {
  const [show, setShow] = useState(false);

  const [copiedField, setCopiedField] = useState(null); // 'email' or 'password'

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 5000);
    });
  };
  const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  return (
    <div className="w-full mt-8 text-sm">
      <button
        onClick={() => setShow(!show)}
        className="mb-4 btn btn-primary w-full"
      >
        {show ? "Hide Admin Credentials" : "View Admin Credentials"}
      </button>

      {show && (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            🔐 Admin Credentials
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium text-gray-700">Email:</span>{" "}
              <span className="text-primary">*******@domain.com</span>
              <button
                onClick={() => handleCopy(email, "email")}
                className="ml-1 text-gray-600"
                title="Copy Email"
              >
                {copiedField === "email" ? <FaCheck /> : <FaCopy />}
              </button>
            </p>
            <p>
              <span className="font-medium text-gray-700">Password:</span>{" "}
              <span className="text-primary">********</span>
              <button
                onClick={() => handleCopy(password, "password")}
                className="ml-1 text-gray-600"
                title="Copy Password"
              >
                {copiedField === "password" ? <FaCheck /> : <FaCopy />}
              </button>
            </p>
            <p className="text-xs text-gray-500 italic pt-2">
              * Use this to log in via the form. Copy the Email and Password on
              clicking the buttons.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
