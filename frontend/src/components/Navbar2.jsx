export default function Navbar2() {
  return (
    <div className="navbar flex flex-row-reverse gap-5 py-2 px-10 bg-[#D3EAFF] font-serif text-xl">
      <div>
        <p className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl">
          User Login
        </p>
      </div>
      <div>
        <p className="p-1 px-5 text-black font-semibold duration-200 hover:cursor-pointer hover:bg-[#052F44] hover:text-white rounded-2xl">
          Administration Login
        </p>
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
