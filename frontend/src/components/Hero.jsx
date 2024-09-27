import HeroPage from "/Hero/adminPage.png";
import PoliceBadge from "/Hero/police-badge.png";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${HeroPage})` }}
    >
      <div className="h-4/5 w-96 bg-[#d3eaff] absolute right-0 mt-16 ">
        <img src={PoliceBadge} alt="" />
      </div>
    </div>
  );
}
