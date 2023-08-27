import { AiOutlineSearch } from "react-icons/ai";
import img from "../assets/pexels-suzy-hazelwood-1098526 (1).jpg";

const EmmaHero = () => {
  return (
    <div className="w-[100%] h-[600px] flex justify-center items-center">
      <div className="w-[90%] h-full flex justify-between items-center ">
        {/*right*/}
        <div className="flex justify-center items-center flex-col w-[40%] h-full">
          <div className="text-[50px] font-bold text-[#E41D57]">Airbnb it.</div>
          <div className="text-[50px] font-bold leading-[0.9]">
            You could earn
          </div>
          <div className="text-[60px] font-semibold leading-[2]">$532</div>
          <div className="mb-[30px]">
            {" "}
            <span className="underline font-bold hover:cursor-pointer">
              7 nights
            </span>{" "}
            at an estimated $76 a night
          </div>
          <div className="w-[100%] h-[5px] bg-[#DDDDDD] rounded-md mb-[20px] hover:cursor-pointer">
            <div className="w-[30%] h-full bg-[black] rounded-md hover:cursor-pointer"></div>
          </div>

          <div className="underline hover:cursor-pointer mb-[30px]">
            Learn how we estimate your earnings
          </div>
          {/*search*/}
          <div
            className="flex items-center w-[500px] h-[60px] rounded-full pl-[20px] border-2
          hover:cursor-pointer"
          >
            <AiOutlineSearch style={{ fontSize: "25px", color: "#E41D57" }} />
            <div className="ml-[10px]">
              <div className="font-bold">Lagos</div>
              <div>Entire place. 2 bedrooms</div>
            </div>
          </div>
        </div>
        {/*left*/}
      <img src={img} className="w-[50%] h-[500px] rounded-[20px] hover:cursor-grab" />
      </div>
    </div>
  );
};

export default EmmaHero;
