import { useState } from "react";
import img1 from "/Features/1.png";
import img2 from "/Features/2.png";
import img3 from "/Features/3.png";
import img4 from "/Features/4.png";
import img5 from "/Features/5.png";
import img6 from "/Features/6.png";
import img7 from "/Features/7.png";
import img8 from "/Features/8.png";
import prev from "/Features/prev.png";
import next from "/Features/next.png";

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = 8;
  const visibleCards = 4;

  // const cards = Array.from({ length: totalCards }, (_, index) => (
  //   <div
  //     key={index}
  //     className="w-[24%] h-[300px] flex-shrink-0 bg-blue-500 text-white flex items-center justify-center text-2xl rounded-xl"
  //   >
  //     Card {index + 1}
  //   </div>
  // ));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalCards - visibleCards
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - visibleCards ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-inknut font-bold">FEATURES</h1>
      </div>
      <div
        className="w-full flex justify-center
       py-10"
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="mr-5 p-2 rounded-full self-center hover:scale-125 duration-300"
        >
          <img src={prev} alt="Previous Button" className="w-16" />
        </button>

        {/* Carousel Container */}
        <div className="relative w-4/5">
          <div className="overflow-hidden pr-4">
            <div
              className="flex gap-4 transition-transform duration-300"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img1}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Costing & Analysis
                </p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img2}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">Databse</p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img3}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Inventory Tracking
                </p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img4}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Security Protocol
                </p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img5}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">Mobile App</p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img6}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Voice Activated Inventory Management
                </p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img7}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Hardware Health Scoring System
                </p>
              </div>
              <div className="w-[24%] h-[300px] px-3 gap-2 flex-col flex-shrink-0 bg-[#D9D9D980] border-2 border-gray-700 text-center flex items-center justify-center text-2xl rounded-xl">
                <img
                  src={img8}
                  alt="Features Image"
                  className="w-3/5 hover:scale-125 duration-500"
                />
                <p className="font-serif font-bold text-black">
                  Predictive Measures
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="ml-5 p-2 self-center hover:scale-125 duration-300"
        >
          <img src={next} alt="Next Button" className="w-16" />
        </button>
      </div>
    </>
  );
}
