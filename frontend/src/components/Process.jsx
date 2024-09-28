import Login from "/Process/Login.png";
import bg from "/Process/bg.png";
import Arrow from "/Process/Arrow.png";
import Request from "/Process/createRequest.png";
import Payment from "/Process/makePayment.png";
import receipt from "/Process/receiptDownload.png";

export default function Process() {
  return (
    <div
      className="bg-cover bg-center w-full min-h-screen pt-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col justify-start pt-16 md:pt-20 pl-8 md:pl-16">
        <p className="text-3xl md:text-5xl font-inknut font-bold">Process</p>
        <p className="text-xl md:text-2xl tracking-wider font-bold">
          Hardware Inventory Management
        </p>
        <p className="text-xl md:text-2xl tracking-wider font-bold">System</p>
      </div>

      {/* Icons section */}
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center pt-10 md:pt-36 px-4">
        {/* Step 1: Login */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#052F44] flex justify-center items-center relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#d3eaff] flex justify-center items-center">
              <img src={Login} alt="Login" className="w-12 md:w-20" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold text-center">Login</p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex pt-10">
          <img src={Arrow} alt="Arrow" className="w-8 md:w-auto" />
        </div>

        {/* Step 2: Create Request */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#052F44] flex justify-center items-center relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#d3eaff] flex justify-center items-center">
              <img src={Request} alt="Create Request" className="w-12 md:w-20" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold text-center">Create Request</p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex pt-10">
          <img src={Arrow} alt="Arrow" className="w-8 md:w-auto" />
        </div>

        {/* Step 3: Make Payment */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#052F44] flex justify-center items-center relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#d3eaff] flex justify-center items-center">
              <img src={Payment} alt="Make Payment" className="w-12 md:w-20" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold text-center">Make Payment</p>
        </div>

        {/* Arrow 3 */}
        <div className="hidden md:flex pt-10">
          <img src={Arrow} alt="Arrow" className="w-8 md:w-auto" />
        </div>

        {/* Step 4: Download Receipt */}
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#052F44] flex justify-center items-center relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#d3eaff] flex justify-center items-center">
              <img src={receipt} alt="Download Receipt" className="w-12 md:w-20" />
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold text-center">Download Receipt</p>
        </div>
      </div>
    </div>
  );
}
