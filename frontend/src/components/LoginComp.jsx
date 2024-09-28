import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import to access URL parameters
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PoliceBadge from "/LoginComp/police-badge.png";
import UserImage from "/LoginComp/userImage.png";

export default function LoginComp() {
  const [showPassword, setShowPassword] = useState(false);

  // Extract identity from URL query parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const identity = searchParams.get("identity") || "User"; // Defaults to "User" if not provided

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-row h-screen bg-[#d3eaff] justify-between px-36 pt-20">
      {/* Police Badge Section */}
      <div className="flex">
        <img src={PoliceBadge} alt="Police Badge" className="h-3/5 mt-20" />
      </div>

      {/* Login Form Section */}
      <div className="w-3/5 h-4/5 bg-[#D9D9D9B2] border-2 border-black rounded-3xl px-10 flex flex-col justify-center relative">
        {/* User Image and Title */}
        <div className="absolute top-[-60px] left-[50%] transform translate-x-[-50%]">
          <img src={UserImage} alt="User Image" className="w-28 h-28 mx-auto" />
          <p className="text-center text-3xl font-bold font-inknut">
            {identity} Login
          </p>
        </div>

        {/* Username Field */}
        <div className="mt-24 mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent border-none text-lg py-2 focus:outline-none placeholder:text-xl placeholder:font-semibold placeholder:text-[#555]"
          />
          <div className="h-0.5 w-full bg-black"></div>
        </div>

        {/* Password Field */}
        <div className="mb-6 relative my-10">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-transparent border-none text-lg py-2 focus:outline-none placeholder:text-xl placeholder:font-semibold placeholder:text-[#555]"
          />
          <div className="h-0.5 w-full bg-black"></div>

          {/* Toggle Password Icon */}
          <div
            className="absolute top-[52%] right-3 transform -translate-y-1/2 cursor-pointer hover:scale-110 duration-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>

        {/* Forgot Password */}
        <div className="mb-6 text-right">
          <a
            href="#"
            className="text-red-500 font-semibold text-lg hover:scale-110 duration-500"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <div className="flex justify-center mb-4">
          <button className="bg-[#003049] text-white w-60 px-8 py-2 rounded-xl text-2xl font-semibold hover:scale-110 duration-500">
            Log In
          </button>
        </div>

        {/* Signup Link */}
        <div className="flex justify-center">
          <p className="text-lg mr-2">Don’t have an account?</p>
          <a
            href="#"
            className="text-lg font-semibold text-[#003049] hover:scale-110 duration-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
