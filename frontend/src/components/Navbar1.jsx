import homeIcon from "/Navbar1/homeIcon.svg";
import teamLogo from "/Navbar1/TeamLogo.svg";

export default function Navbar1() {
  return (
    <nav className="flex flex-row justify-between items-center bg-[#052F44] h-20 ">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <button className="duration-500 hover:scale-125">
            <img src={homeIcon} alt="Home Icon" className="w-14 h-14" />
          </button>
        </div>
      </div>

      <div>
        <p className="text-4xl text-white font-inknut font-bold hover:cursor-default">
          Police Inventory Management
        </p>
      </div>

      <div>
        <div className="flex flex-col items-center space-y-2">
          <img src={teamLogo} alt="Home Icon" className="w-16 h-16" />
        </div>
      </div>
    </nav>
  );
}
