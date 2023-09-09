import { useState } from "react";
import pix from "../../../assets/create.avif";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRooms } from "../../../Api/CreatingRoomsApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
const CreateRooms = () => {
  const navigate = useNavigate();

  const userID = useSelector((state: any) => state.hotelUser);
  const [image, setImage] = useState<Array<string>>([]);
  const [avatar, setAvatar] = useState<Array<string>>([]);

  const onHandleImages = (e: any) => {
    const file = e.target.files
    // const saveImage = URL.createObjectURL(localImage);
    let data : string [] = []

    for (let i of file){
      setAvatar(i)
      const save:any = URL.createObjectURL(i)
      data.push(save)
    }
    setAvatar(file);
    setImage([...image, ...data]);
  };

  const model = yup.object({
    roomType: yup.string().required(),
    bedSize: yup.string().required(),
    Guest: yup.number().required(),
    price: yup.number().required(),
    location: yup.string().required(),
    Description: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onCreate = handleSubmit(async (res: any) => {
    const { location, bedSize, Guest, roomType, Description, price } = res;

    const formData = new FormData();

    formData.append("roomType", roomType);
    formData.append("bedSize", bedSize);
    formData.append("Guest", Guest);
    formData.append("price", price);
    formData.append("Description", Description);
    formData.append("location", location);
    // formData.append("avatar", avatar);

    // createRooms(formData, userID).then((res) => {
    //  if (res) {
    //   navigate("/congrat");

    //   Swal.fire({
    //     title: "congratulation your room has been created 😊",
    //     showClass: {
    //       popup: "animate_animated animate_fadeInDown",
    //     },
    //     hideClass: {
    //       popup: "animate_animated animate_fadeOutUp",
    //     },
    //   });
    //  }else{
    //   Swal.fire({
    //     title: "Error occured while creating room",
    //     showClass: {
    //       popup: "animate_animated animate_fadeInDown",
    //     },
    //     icon: "error",
    //     hideClass: {
    //       popup: "animate_animated animate_fadeOutUp",
    //     },

      
    //   });

    //   navigate("/create-room")
    //  }
    // });

    console.log(formData)
    console.log(avatar)
    console.log(location, bedSize, Guest, roomType, Description, price)
  });

  return (
    <form
      className="w-[100vw] h-[100vh] flex pl-[100px] items-center bg-[ rgba( 223, 29, 29, 0.25 )]"
      style={{
        backdropFilter: ` blur( 7.5px )`,
        background: `rgba( 218, 137, 137, 0.25 )`,
        boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
        WebkitBackdropFilter: `blur( 7.5px )`,
        borderRadius: ` 10px`,
      }}
      onSubmit={onCreate}
    >
  
  {
    image?.map((props:any)=>(
      <div className="h-[80%] w-[65%] justify-center items-center   rounded-[10px] relative  grid grid-cols-5 bg-red-200">
        <div>
          <img src={props} />
        </div>

    </div>
    ))
  }

      <label
        htmlFor="image"
        className="w-[120px] h-[30px] rounded-[5px] flex justify-center items-center text-[15px] font-[700] hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all border-[1px] bg-[#e65151] text-white mt-3 z-20"
      >
        Upload Room
      </label>
      <input
        type="file"
        accept="image/png image/jpeg image/jpg"
        className="hidden mb-4"
        id="image"
        onChange={onHandleImages}
        multiple
      />
      <div className="h-[500px] w-[300px] bg-white absolute bottom-[100px] right-[250px] rounded-[20px] shadow-md py-4 flex flex-col gap-1 uppercase">
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Room Type: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[30px] ">
            <input
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              {...register("roomType")}
            />
          </div>
          {errors?.roomType?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Room Type Error
            </div>
          )}
        </div>
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Bed Size: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[30px] ">
            <input
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              {...register("bedSize")}
            />
          </div>
          {errors?.bedSize?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Bed Size Error
            </div>
          )}
        </div>
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Guest: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[30px] ">
            <input
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              {...register("Guest")}
            />
          </div>
          {errors?.Guest?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Guest Error
            </div>
          )}
        </div>
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Price: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[30px] ">
            <input
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              {...register("price")}
            />
          </div>
          {errors?.price?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Price Error
            </div>
          )}
        </div>
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Location: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[30px] ">
            <input
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px]"
              {...register("location")}
            />
          </div>
          {errors?.location?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Location Error
            </div>
          )}
        </div>
        <div className="flex justify-between  px-2 text-[13px] font-bold  w-[90%] flex-col h-[60px] my-1">
          <div>Description: </div>
          <div className=" my-2 w-[250px] mx-2 border-[1px] border-[#c49b9b] rounded-[5px]  h-[100px] ">
            <textarea
              className="w-full outline-none border-0 h-full rounded-[5px] px-2 font-light text-[15px] resize-none"
              {...register("Description")}
            />
          </div>
          {errors?.Description?.message && (
            <div className="text-[10px] text-[#e65151]  flex justify-end">
              Description Error
            </div>
          )}
        </div>
        <button
          className="absolute w-[120px] h-[30px] rounded-[5px] flex justify-center items-center text-[15px] font-[700] hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all border-[1px] bg-[#e65151] text-white bottom-0 left-5 mb-1 mr-5"
          type="submit"
        >
          Create Room
        </button>
      </div>
    </form>
  );
};

export default CreateRooms;
