import { GoShare } from "react-icons/go";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { TbBrandAirbnb } from "react-icons/tb";
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
            .<div className="underline text-[12px] font-medium">9 reviews</div>.
            <div className="text-[12px]">Superhost</div>.
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
      <div className="h-[400px] w-full bg-red-200 mt-6 rounded-[20px] flex"></div>
     </div>
    </div>
  );
};

export default RoomsLocation;
