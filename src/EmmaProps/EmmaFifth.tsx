import { RiArrowDropDownLine } from "react-icons/ri";

const EmmaFifth = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center bg-[#F7F7F7]">
      <div className="w-[90%] h-full flex justify-between items-center pt-[50px]">
        <div className="w-[40%] h-full text-[40px] font-semibold flex justify-center ">
          <h1 className="leading-[1.2]">
            Your questions, <br />
            answered
          </h1>
        </div>
        <div className="w-[50%] h-full ">
      <div className="flex justify-between items-center border-b-2 hover:cursor-pointer mb-[30px]">
      <div className="text-[20px] mb-[20px] ">
Is my place right for Airbnb?
</div>
       <div className="mb-[20px]">
        < RiArrowDropDownLine style={{fontSize:"40px"}}/>
       </div>
      </div>
      <div className="flex justify-between items-center border-b-2 hover:cursor-pointer mb-[30px]">
      <div className="text-[20px] mb-[20px]">
Do I have to host all the time?
</div>
       <div className="mb-[20px]">
        < RiArrowDropDownLine style={{fontSize:"40px"}}/>
       </div>
      </div>
      <div className="flex justify-between items-center border-b-2 hover:cursor-pointer mb-[30px]">
      <div className="text-[20px] mb-[20px]">
How much should I interact with guests?
</div>
       <div className="mb-[20px]">
        < RiArrowDropDownLine style={{fontSize:"40px"}}/>
       </div>
      </div>
      <div className="flex justify-between items-center border-b-2 hover:cursor-pointer mb-[30px]">
      <div className="text-[20px] mb-[20px]">
      Any tips on being a great Airbnb Host?
</div>
       <div className="mb-[20px]">
        < RiArrowDropDownLine style={{fontSize:"40px"}}/>
       </div>
      </div>
      <div className="flex justify-between items-center  hover:cursor-pointer mb-[30px]">
      <div className="text-[20px] mb-[20px]">
What are Airbnb’s fees?
</div>
       <div className="mb-[20px]">
        < RiArrowDropDownLine style={{fontSize:"40px"}}/>
       </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default EmmaFifth;
