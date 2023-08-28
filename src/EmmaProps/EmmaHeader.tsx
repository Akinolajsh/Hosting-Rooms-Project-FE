import { FaAirbnb } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [scroll, setScroll] =useState<boolean>(false)
  const onScroll = () =>{
    if (window.scrollY>=70) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", onScroll)
  return (
    <div>
    {
      scroll ?(<div
        className="w-[100%] h-[70px] flex justify-center items-center fixed z-1 bg-white"
        style={{ boxShadow: "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
      >
        <div className="w-[80%] h-[70px] flex justify-between items-center">
          <div>
            <FaAirbnb
              style={{ fontSize: "40px", color: "#E41D57" }}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center ">
            <button className="font-semibold ">Ready to Airbnb it?</button>
            <div
              className="flex text-white w-[170px] h-[50px] border justify-center items-center
    bg-[#E41D57] rounded-md hover:cursor-pointer duration-300 ml-[20px] "
            >
              <BiHomeAlt2 style={{ fontSize: "30px", color: "white" }} />
              <div className=" flex items-center justify-center text-[17px] mt-[5px] font-semibold">
                Airbnb Setup
              </div>
            </div>
          </div>
        </div>
      </div>)
      :(<div
        className="w-[100%] h-[70px] flex justify-center items-center"
        style={{ boxShadow: "rgba(50,50,93,0.25)0px 3px 1px -5px, rgba(0,0,0,0.3) 0px 8px 16px -8px" }}
      >
        <div className="w-[80%] h-[70px] flex justify-between items-center">
          <div>
            <FaAirbnb
              style={{ fontSize: "40px", color: "#E41D57" }}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center ">
            <button className="font-semibold ">Ready to Airbnb it?</button>
            <div
              className="flex text-white w-[170px] h-[50px] border justify-center items-center
    bg-[#E41D57] rounded-md hover:cursor-pointer duration-300 ml-[20px] "
            >
              <BiHomeAlt2 style={{ fontSize: "30px", color: "white" }} />
              <div className=" flex items-center justify-center text-[17px] mt-[5px] font-semibold">
                Airbnb Setup
              </div>
            </div>
          </div>
        </div>
      </div>)
    }
    </div>
  );
};

export default Header;
