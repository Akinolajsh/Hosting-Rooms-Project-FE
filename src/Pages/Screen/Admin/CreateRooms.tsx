import React from "react";
import pix from "../../../assets/create.avif";

const CreateRooms = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] flex pl-[100px] items-center bg-[ rgba( 223, 29, 29, 0.25 )]"
      style={{
        backdropFilter: ` blur( 7.5px )`,
        background: `rgba( 218, 137, 137, 0.25 )`,
        boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
        WebkitBackdropFilter: `blur( 7.5px )`,
        borderRadius: ` 10px`,
      }}
    >
      <div className="h-[80%] w-[65%] justify-center items-center flex bg-blue-300 rounded-[10px] relative">
        <label htmlFor="">
          <img src="" alt="" />
          <input type="text" className="hidden" />
        </label>
      </div>
      <div className="h-[500px] w-[300px] bg-white absolute top-25 right-[300px] rounded-[20px] shadow-md py-4">
        <div className="flex justify-between  px-2 text-[15px] font-bold  w-[90%] flex-col">
          <div>Room Type: </div>
          <div className="my-2 w-[250px] mx-2 border-[1px] border-[#e65151] rounded-[5px] bg-purple-700 h-[30px] ">
            <input className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]" />
          </div>
          <div className="text-[10px] text-[#e65151]   mb-1">
            Room Type Error
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRooms;
