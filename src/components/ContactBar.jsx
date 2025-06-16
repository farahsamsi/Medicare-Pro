import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactBar() {
  return (
    <div>
      <div className="container max-w-3xl mx-auto  bg-primary relative">
        <div className=" px-4 py-2 flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-2 relative text-white text-sm  ">
          {/* Left triangle */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-5 bg-white clip-left-triangle" />

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2">
              <FaPhoneAlt />
              <span>(+00) 123 789 1478</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l h-4 border-white opacity-30" />

            {/* Email for all devices */}
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>medicarepro@info.com</span>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l h-4 border-white opacity-30" />

            {/* Address */}
            <div className="hidden md:flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>238, Dhanmondi, Dhaka - BD</span>
            </div>
          </div>

          {/* Right triangle */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-5 bg-white clip-right-triangle" />
        </div>
      </div>
    </div>
  );
}
