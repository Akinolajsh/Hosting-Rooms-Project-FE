import { GoShare } from "react-icons/go";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { TbBrandAirbnb } from "react-icons/tb";
import grid001 from "../../../assets/grid001.webp";
import grid002 from "../../../assets/grid002.webp";
import grid003 from "../../../assets/grid003.webp";
import grid004 from "../../../assets/grid004.webp";
import grid005 from "../../../assets/grid005.webp";

const RoomsLocation = () => {
  return (
    <div className="w-full flex justify-center items-center bg-yellow">
      <div className="w-[80%] justify-center items-center flex flex-col ">
        <div className="w-full flex flex-col  justify-center">
          <div className="flex items-center gap-2 text-[25px] font-medium">
            <TbBrandAirbnb />
            <div>Mermaid Suite - Toca da Capuava Granja Viana Cotia</div>
          </div>
          <div className="flex  items-center mt-3">
            <div className="flex flex-1 gap-2 items-center ">
              <div className="flex items-center gap-1 justify-center text-[12px] font-medium">
                <AiFillStar />
                4.89
              </div>
              .
              <div className="underline text-[12px] font-medium">9 reviews</div>
              .<div className="text-[12px]">Superhost</div>.
              <div className="underline text-[12px] font-medium">
                Cotia Sao paulo brazil
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center underline">
                {" "}
                <GoShare />
                share
              </div>
              <div className="flex gap-2 items-center underline">
                {" "}
                <AiOutlineHeart />
                save
              </div>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full bg-white mt-6 mb-11 rounded-[20px]  grid grid-cols-2">
          <div className="  object-cover">
            <img
              src={grid001}
              className="h-full rounded-tl-[20px] rounded-bl-[20px] hover:cursor-pointer bg-black"
            />
          </div>
          <div className="grid grid-rows-2">
            <div className="grid grid-cols-2">
              <div className=" mx-3 mb-2">
                <img src={grid002} className="h-full" />
              </div>
              <div className=" mb-2">
                <img src={grid004} className="h-full rounded-tr-[20px]" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className=" mx-3 ">
                <img src={grid003} className="h-full " />
              </div>
              <div>
                <img src={grid005} className="h-full rounded-br-[20px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsLocation;
