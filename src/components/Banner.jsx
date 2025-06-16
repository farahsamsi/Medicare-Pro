"use client";

import { FaLock, FaStethoscope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Banner() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-[#e6f2ff] to-[#d6ebff] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Admin Section */}
        <div className="bg-white rounded-xl p-8 text-center shadow-md">
          <div className="flex justify-center mb-4 text-primary text-4xl">
            <FaLock />
          </div>
          <h2 className="text-2xl font-bold mb-2">For Admins</h2>
          <p className="text-gray-600 mb-6">
            Manage doctors and track subscriptions with Medicare Pro, designed
            for streamlined admin control.
          </p>
          <Link href="/admin/register">
            <button className="hover:scale-105 transition ease-in-out btn btn-primary mb-2">
              Admin Registration
            </button>
          </Link>
          <div>
            <Link href="/admin/login">
              <button className="hover:scale-105 transition ease-in-out text-primary font-semibold hover:underline">
                Admin Login
              </button>
            </Link>
          </div>
        </div>

        {/* Doctor Section */}
        <div className="bg-white rounded-xl p-8 text-center shadow-md">
          <div className="flex justify-center mb-4 text-primary text-4xl">
            <FaStethoscope />
          </div>
          <h2 className="text-2xl font-bold mb-2">For Doctors</h2>
          <p className="text-gray-600 mb-6">
            Use Medicare Pro to manage your assistants and optimize your
            practice operations efficiently.
          </p>
          <button className="hover:scale-105 transition ease-in-out btn btn-primary">
            Doctor Login
          </button>
        </div>
      </div>
    </section>
  );
}
