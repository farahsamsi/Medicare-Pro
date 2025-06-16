// https://images.unsplash.com/vector-1739811941027-c735b9459deb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

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

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      {/* Left - Form */}
      <div className="bg-base">
        <div className=" flex flex-col justify-center items-center px-6 py-12">
          {/* Back to home link */}
          <div className="w-full text-center lg:text-left mb-3 lg:mb-0 ">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-primary hover:scale-105 font-medium transition ease-in-out">
                <FaArrowLeft className="text-sm" /> Back ____
              </button>
            </Link>
          </div>

          {/* Logo */}
          <h1 className="text-4xl font-bold mb-8 tracking-tight">
            <span>Medicare</span>
            <span className="text-primary"> Pro</span>
          </h1>

          {/* Form  */}
          <div className="w-full max-w-md space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none"
            />

            {/* Terms */}
            <div className="flex items-center space-x-2 text-sm">
              <input type="checkbox" />
              <p>
                I agree to the{" "}
                <a className="text-primary hover:underline">Terms</a> and{" "}
                <a className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Submit form button */}
            <button className="w-full btn btn-primary font-medium ">
              Register
            </button>

            {/* Divider */}
            <div className="text-center text-sm text-gray-500">OR</div>

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
              Already have an account?
              <a className="text-primary hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right - Background image */}
      <div
        className=" bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/vector-1739811941027-c735b9459deb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
    </div>
  );
}
