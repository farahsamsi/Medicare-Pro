"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaPlay,
  FaArrowLeft,
} from "react-icons/fa";

import { useState } from "react";
import AdminCredentials from "../component/AdminCredentials";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://medicare-pro-backend.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      console.log(data);
    } catch (err) {
      alert("Something went wrong");
    }
  };

  console.log({ email, password });

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      {/* Left - Form */}
      <div className="bg-base">
        <div className=" flex flex-col justify-center items-center px-6 py-12">
          {/* Back to home link */}
          <div className="w-full text-center lg:text-left mb-3 lg:mb-0 ">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-primary hover:scale-105 font-medium transition ease-in-out">
                <FaArrowLeft className="text-sm" />
                Go Back ____
              </button>
            </Link>
          </div>

          {/* Logo */}
          <h1 className="text-4xl font-bold  tracking-tight">
            <span>Medicare</span>
            <span className="text-primary"> Pro</span>
          </h1>

          {/* Form  */}
          <div className="w-full max-w-md space-y-6">
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                Admin Login
              </h1>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full font-semibold btn btn-primary"
              >
                Login
              </button>
            </form>
            <div>
              <AdminCredentials></AdminCredentials>
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" />
              <p>
                I agree to the{" "}
                <a className="text-primary hover:underline">Terms</a> and{" "}
                <a className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-4">
              <button className="bg-[#3b5998] text-white p-2 rounded">
                <FaFacebookF />
              </button>
              <button className="bg-[#00acee] text-white p-2 rounded">
                <FaTwitter />
              </button>
              <button className="bg-[#db4437] text-white p-2 rounded">
                <FaGoogle />
              </button>
              <button className="bg-[#0072b1] text-white p-2 rounded">
                <FaLinkedinIn />
              </button>
            </div>

            {/* login in link */}
            <p className="text-center text-sm mt-4">
              Do not have an Account?{" "}
              <a className="text-primary hover:underline">Register Now</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right - Background image */}
      <div
        className=" bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/vector-1738918824727-ef952a30ae5d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
    </div>
  );
}
