"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaArrowLeft,
} from "react-icons/fa";

import { useState } from "react";
import { useLoginAdminMutation } from "@/provider/query/authApi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [loginAdmin, { isLoading, isError, error }] = useLoginAdminMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await loginAdmin({ email, password });
    if (result?.data) {
      localStorage.setItem("token", result?.data?.token);
      localStorage.setItem("user", JSON.stringify(result?.data?.user));

      router.push("/admin-dashboard");
      setEmail("");
      setPassword("");
      return;
    }
    if (result?.error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: `
                <p><strong>Error Status:</strong> ${error?.status || "404"}</p>
                <p>${error?.data?.message || "User not found"}</p>
              `,
      });
      setEmail("");
      setPassword("");
      return;
    }
  };

  const fillDemoCredentials = () => {
    setEmail(process.env.NEXT_PUBLIC_ADMIN_EMAIL || "");
    setPassword(process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "");
  };

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

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full font-semibold btn btn-primary"
              >
                {isLoading ? (
                  <span>
                    `Please Wait..`{" "}
                    <span className="loading loading-spinner loading-xl"></span>
                  </span>
                ) : (
                  `Login`
                )}
              </button>

              {/* use demo credentials button */}
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full btn btn-outline"
                title="Click to fill the email and password field automatically"
              >
                Use Demo Credentials
              </button>
            </form>

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
