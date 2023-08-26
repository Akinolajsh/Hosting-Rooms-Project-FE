import { TbBrandAirbnb } from "react-icons/tb";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { GoShare } from "react-icons/go";
import { LiaBedSolid } from "react-icons/lia";
import avatar from "../../../assets/dummy-prod-1.jpg";

const DetailsPage = () => {

const data:any=[
  {
    num: "2",
    icon: <LiaBedSolid/>,
    text: "bed"
  },
  {
    icon: <LiaBedSolid/>,
    text: "Private attached bathroom"
  },
  {
    icon: "LiaBedSolid",
    text: "Host and other guests may be here"
  },
]

  return (
    <div className="w-full flex justify-center items-center bg-yellow">
      <div className="w-[80%] justify-center items-center flex flex-col ">
        {/* Admin Details */}
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
        {/* Admin Details */}

        {/* Image Setup */}
        <div className="h-[400px] w-full bg-red-200 mt-6 rounded-[20px] flex"></div>
        {/* Image Setup */}

        {/* About Setup*/}
        <div className="w-full justify-center items-center">
          <div className="w-[60%] flex flex-col h-[200px]  mt-3 border-b-[1px] border-[silver]">
            <div className="justify-between flex  items-end text-[20px] font-semibold">
              {" "}
              Room in a cottage hosted by Roberta{" "}
              <div className=" w-[40px] h-[40px] rounded-[50%] object-cover bg-black">
                <img src={avatar} className="h-full w-full" />
              </div>
            </div>
          <div className="flex justify-between items-center mt-4">
        {
          data?.map((props:any)=>(
            <div className="border-[1px] rounded-[10px] h-[100px] w-[200px]  px-[12px] py-[10py] justify-center items-center flex gap-3">
            <div >{props.icon}</div> <div className="text-[14px] font-semibold flex justify-center items-center gap-1"><div>{props.num}</div><div>{props.text}</div></div>
            </div>
          ))
        }
          </div>
          </div>
         {/* OtherSide */}
         <div className="w-[40%]"></div>
         {/* OtherSide */}
        </div>
        {/* About Setup */}
      </div>
    </div>
  );
};

export default DetailsPage;
