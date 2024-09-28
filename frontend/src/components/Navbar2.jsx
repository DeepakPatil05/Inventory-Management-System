import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const navigate = useNavigate();

  // Function to handle login navigation
  const handleLogin = (identity) => {
    navigate(`/login?identity=${identity}`);
  };

  return (
    <div className="navbar flex flex-row-reverse gap-5 pt-2 px-10 bg-[#D3EAFF] font-serif text-xl">
      <div>
        <button
          onClick={() => handleLogin("User")}
          className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl"
        >
          User Login
        </button>
      </div>
      <div>
        <button
          onClick={() => handleLogin("Admin")}
          className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl"
        >
          Administration Login
        </button>
      </div>
      <div>
        <p className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl">
          Contact
        </p>
      </div>
      <div>
        <p className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl">
          About Us
        </p>
      </div>
    </div>
  );
}
