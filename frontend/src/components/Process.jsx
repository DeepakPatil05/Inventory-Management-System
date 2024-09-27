import Login from "/Process/Login.png";
import bg from "/Process/bg.png";
import Arrow from "/Process/Arrow.png";
import Request from "/Process/createRequest.png";
import Payment from "/Process/makePayment.png";
import receipt from "/Process/receiptDownload.png";

export default function Process() {
  return (
    <div
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col justify-start pt-20 pl-16">
        <p className="text-5xl font-inknut font-bold ">Process</p>
        <p className="text-2xl tracking-wider font-bold">
          Hardware Inventory Management
        </p>
        <p className="text-2xl tracking-wider font-bold">System</p>
      </div>

      <div className="w-full flex flex-row gap-5 justify-center items-center pt-36">
        <div className="flex flex-col gap-7">
          <div className="flex flex-row justify-center gap-3">
            <div className="w-60 h-60 rounded-full bg-[#052F44] flex items-center">
              <div className="w-44 h-44 ml-8 rounded-full bg-[#d3eaff] flex items-center">
                <img src={Login} alt="Login" className="w-32 ml-6" />
              </div>
            </div>
            <div className="pt-[6.5rem]">
              <img src={Arrow} alt="Arrow" className="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-row justify-center gap-3">
            <div className="w-60 h-60 rounded-full bg-[#052F44] flex items-center">
              <div className="w-44 h-44 ml-8 rounded-full bg-[#d3eaff] flex items-center">
                <img src={Request} alt="Login" className="w-32 ml-6" />
              </div>
            </div>
            <div className="pt-[6.5rem]">
              <img src={Arrow} alt="Arrow" className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-row justify-center gap-3">
            <div className="w-60 h-60 rounded-full bg-[#052F44] flex items-center">
              <div className="w-44 h-44 ml-8 rounded-full bg-[#d3eaff] flex items-center">
                <img src={Payment} alt="Login" className="w-32 ml-6" />
              </div>
            </div>
            <div className="pt-[6.5rem]">
              <img src={Arrow} alt="Arrow" className="" />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-7">
          <div className="w-60 h-60 rounded-full bg-[#052F44] flex items-center">
            <div className="w-44 h-44 ml-8 rounded-full bg-[#d3eaff] flex items-center">
              <img src={receipt} alt="Login" className="w-32 ml-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start ml-36 pt-6 gap-48">
        <p className="text-2xl text-wrap font-bold">Login</p>
        <p className="text-2xl text-wrap font-bold pl-24">Create Request</p>
        <p className="text-2xl text-wrap font-bold pl-6">Make Payment</p>
        <p className="text-2xl text-wrap font-bold">
          Download Payment
          <p className="text-center">Receipt</p>
        </p>
      </div>
    </div>
  );
}
