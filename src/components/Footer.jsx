"use client";

import { CiMedicalCross } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-10">
        {/* Logo + Description */}
        <div className="space-y-4 md:col-span-2 xl:col-span-1">
          <div className="flex items-center gap-2">
            <CiMedicalCross className="text-2xl" />
            <div>
              <h1 className="text-xl font-bold text-primary">Medicare Pro</h1>
              <p className="text-xs tracking-widest ">HEALTH CARE</p>
            </div>
          </div>
          <p className="text-sm ">
            Medicare Pro is a modern SaaS-based healthcare management platform
            where admins manage doctors and doctors manage their assistants.
          </p>
          <p className="text-sm text-white font-semibold underline underline-offset-4">
            Designed for efficiency and clarity, it helps streamline medical
            workflows and subscription tracking in one place.
          </p>
          <p className="text-sm ">
            Modern SaaS-based healthcare management platform.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4">
            Our Services:
          </h3>
          <ul className="space-y-2 text-sm ">
            <li>Cardiology Care</li>
            <li>Urgent Care</li>
            <li>Orthopedic Care</li>
            <li>Diagnosis Department</li>
            <li>Gastroenterology</li>
            <li>Therapy Department</li>
            <li>Dental Service</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4">
            Quick Links:
          </h3>
          <ul className="space-y-2 text-sm ">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Team</li>
            <li>Latest Blog</li>
            <li>Appointments</li>
            <li>Help & FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2 xl:col-span-1">
          <h3 className="text-lg font-semibold mb-4 underline underline-offset-4">
            Newsletter:
          </h3>
          <input
            type="email"
            placeholder="Enter Your Email:"
            className="w-full p-3 rounded-md bg-[#101a33] text-sm text-white outline-none placeholder:text-gray-400"
          />
          <button className="w-full btn btn-primary text-sm font-semibold transition mt-4">
            Subscribe Now
          </button>
          <div className="flex items-center mt-3 text-sm ">
            <input type="checkbox" className="mr-2" />
            <label>I agree to email receive.</label>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 pt-2 justify-center mt-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white text-[#020d23] flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white text-[#020d23] flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white text-[#020d23] flex items-center justify-center hover:bg-red-500 hover:text-white transition"
            >
              <FaPinterestP />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white text-[#020d23] flex items-center justify-center hover:bg-sky-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
