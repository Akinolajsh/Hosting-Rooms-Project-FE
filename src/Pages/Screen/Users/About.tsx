import {
  TbBrandAirbnb,
  TbToolsKitchen,
  TbWashMachine,
  TbPool,
} from "react-icons/tb";
import { AiFillStar, AiOutlineCar } from "react-icons/ai";
import { GoShieldLock } from "react-icons/go";
import { LiaBedSolid } from "react-icons/lia";
import { FaShower } from "react-icons/fa";
import { BiHome, BiWifi } from "react-icons/bi";
import { BsBalloon } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { GiOfficeChair } from "react-icons/gi";
import { PiLightbulb, PiCoffee, PiFlowerTulipDuotone } from "react-icons/pi";
import avatar from "../../../assets/dummy-prod-1.jpg";
import { useTanRoom } from "../../../Hook/Room.";

const About = () => {

  const {isLoading, rooms}= useTanRoom()

  const data: any = [
    {
      num: "2",
      icon: <LiaBedSolid />,
      text: "bed",
    },
    {
      icon: <FaShower />,
      text: "Private attached bathroom",
    },
    {
      icon: <BiHome />,
      text: "Host and other guests may be here",
    },
  ];

  const data1: any = [
    {
      icons: <FaShower />,
      title: "Room in a cottage",
      text: "Your own room in a home, plus access to shared spaces.",
    },
    {
      icons: <LiaBedSolid />,
      title: "Roberta is a Superhost",
      text: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    },
    {
      icons: <FaShower />,
      title: "Free cancellation before Sep 4.",
    },
  ];

  const data2: any = [
    {
      iconx: <BsBalloon />,
      text: "Born in the 60s",
    },
    {
      iconx: <FiShoppingBag />,
      text: "My work: Roberta Yoga Massage, UlaBiná, Rede TVT, João do Grão, Body Therapist, TVT - Worker TV, Franmi / Scene 1 Take 2, Na Batalha",
    },
    {
      iconx: <PiLightbulb />,
      text: "Favorite song in high school: Ovelha negra, Rita Lee",
    },
    {
      iconx: <PiLightbulb />,
      text: "Fun fact: ?",
    },
    {
      iconx: <PiCoffee />,
      text: "What's for breakfast: Fruits juice, milk,eggs vegan options",
    },
  ];

  return (

    <div>
  {
    isLoading ? (
      <div>
      isLoading...
      </div>
    ):(
      <div className="w-full flex justify-center items-center mt-5">
      <div className="w-[80%] justify-center items-center flex flex-col ">
        <div className=" justify-center flex  h-[2500px] w-[50%] ">
          <div className=" flex flex-col   mt-3 border-b-[1px] ">
            <div className="justify-between flex  items-end text-[20px] font-semibold">
              {" "}
              Room in a cottage hosted by Roberta{" "}
              <div className=" w-[40px] h-[40px] rounded-[50%] object-cover bg-black overflow-hidden">
                <img src={avatar} className="h-full w-full" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 ">
              {data?.map((props: any) => (
                <div className="border-[1px] rounded-[10px] h-[80px] w-[200px]  px-[12px] py-[10px] justify-center items-center flex gap-5 ">
                  <div className="text-[30px]">{props.icon}</div>{" "}
                  <div className="text-[14px] font-semibold flex justify-center items-center gap-1">
                    <div>{props.num}</div>
                    <div>{props.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-[300px] w-full border-b-[1px] border-[#e1e0e0]  py-10 flex flex-col ">
              {data1?.map((el: any) => (
                <div className="flex items-center my-4 ">
                  <div className="text-[20px] flex mb-3 mr-2">{el.icons}</div>
                  <div className="flex flex-col justify-center ml-2 leading-6">
                    <div className="text-[15px] font-semibold">{el.title}</div>
                    <div className="text-[12px] text-[#696169">{el.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[80px] w-full flex  items-center gap-4 text-[15px] border-b-[1px] border-[#e1e0e0]">
              {" "}
              <TbBrandAirbnb />
              Some info has been automatically translated.
              <div className="underline font-semibold">
                Show original language
              </div>
            </div>
            <div className="h-[100px] border-b-[1px] border-[#e1e0e0]">
              <div className="h-[80px] w-full flex  items-center gap-4 text-[23px] font-medium">
                Meet your host
              </div>
              <div className="h-[1000px] w-full bg-slate-200 rounded-[20px] flex justify-center items-center flex-1">
                <div className=" h-[90%] flex flex-col items-center  ">
                  <div
                    className="w-[400px] h-[250px] bg-white rounded-[20px] flex px-3 py-3 "
                    style={{
                      boxShadow:
                        " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                    }}
                  >
                    <div className="flex flex-col justify-center items-center w-[60%] ">
                      <div className="h-[100px] w-[100px] rounded-[50%] object-cover overflow-hidden">
                        <img src={avatar} />
                      </div>
                      <div className=" flex text-center flex-col leading-6 mt-3 ">
                        <div className="text-[25px] font-semibold">Roberta</div>
                        <div className="text-[15px]">Superhost</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-6 ml-5 ">
                      <div className="border-b-[1px] border-[#e1e0e0] h-[50px] w-[80px]">
                        <div className="font-bold text-[18px]">58</div>
                        <div className="text-[10px] font-semibold">Reviews</div>
                      </div>
                      <div className="border-b-[1px] border-[#e1e0e0] h-[50px] w-[80px] ">
                        <div className="font-bold text-[18px] flex">
                          4.93
                          <AiFillStar />
                        </div>
                        <div className="text-[10px] font-semibold">Ratings</div>
                      </div>
                      <div className=" h-[50px] w-[80px]">
                        <div className="font-bold text-[18px]">10</div>
                        <div className="text-[10px] font-semibold">
                          Years hosting
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" h-[680px] w-[400px] mt-5 flex  flex-col items-start  border-b-[1px] border-[#e1e0e0]">
                    <div className="flex  flex-col">
                      {data2?.map((e: any) => (
                        <div className="flex  gap-3 my-2 ">
                          <div className="text-[30px] flex ">{e.iconx}</div>
                          <div className="text-[16px] font-light ">
                            {e.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 font-light text-[15px]">
                      Hello! I really enjoy welcoming people to Toca da Capuava
                      I have a background in Biological Sciences, at USP, but
                      from an early age I work as a freelancer, in various
                      areas. Initially with video and event production, and
                      cinema. For 15 years, I have been dedicated, more or less
                      frequently, to the practice of Ayurvedic Massage Yoga,
                      Kusum Modak method.{" "}
                      <div className="underline font-bold text-[15px] pt-5">
                        show more
                      </div>
                    </div>
                    <div className="bg-black rounded-md h-[50px] w-[150px] flex justify-center items-center text-white font-semibold mt-5 mb-3">
                      message host
                    </div>
                  </div>
                  <div className="w-[400px] text-[12px] mt-4 ">
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                  </div>
                </div>
              </div>
              <div className="h-[200px] border-b-[1px] border-[#e1e0e0] mt-9 flex flex-col justify-evenly">
                <div className="font-semibold text-[18px]">
                  {" "}
                  About this place
                </div>
                <div className="text-[15px] font-light">
                {rooms.Description}
                </div>
              </div>
              <div className="h-[300px] border-b-[1px] border-[#e1e0e0] flex   flex-col">
                <div className="flex  justify-evenly flex-col h-[300px] ">
                  <div className="font-semibold text-[18px]">
                    Where you'll sleep
                  </div>
                  <div className="border-[#e1e0e0] h-[150px] w-[200px] border-[1px] rounded-[10px] px-6 py-5">
                    <div className="flex items-center gap-1">
                      <div className="text-[40px]">
                        <LiaBedSolid />
                      </div>
                      <div className="text-[20px]">
                        <LiaBedSolid />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold mt-2">bedroom</div>
                      <div className="font-light text-[13px]">
                        1 queen bed, 1 single bed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[450px]  flex flex-col ">
                <div className="h-[50px] flex items-end mb-3">
                  What this place offers
                </div>
                <div className="flex  flex-wrap justify-between ">
                  <div className="flex gap-3 w-[250px] mx-2 my-3 ">
                    <div className="text-[20px] flex ">
                      <GoShieldLock />
                    </div>
                    <div className="text-[16px] font-light ">
                      Lock on bedroom door
                    </div>
                  </div>
                  <div className="flex gap-3 w-[250px] mx-2 my-3 ">
                    <div className="text-[20px] flex ">
                      <TbToolsKitchen />
                    </div>
                    <div className="text-[16px] font-light ">Kitchen</div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <BiWifi />
                    </div>
                    <div className="text-[16px] font-light ">Wifi</div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <GiOfficeChair />
                    </div>
                    <div className="text-[16px] font-light ">Workspace</div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <AiOutlineCar />
                    </div>
                    <div className="text-[16px] font-light ">
                      Free parking on premises
                    </div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <TbPool />
                    </div>
                    <div className="text-[16px] font-light ">Shared pool</div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <TbWashMachine />
                    </div>
                    <div className="text-[16px] font-light ">Washer</div>
                  </div>
                  <div className="flex  gap-3 mx-2 my-3 w-[250px] ">
                    <div className="text-[20px] flex ">
                      <PiFlowerTulipDuotone />
                    </div>
                    <div className="text-[16px] font-light ">
                      Shared backyard – Fully fenced
                    </div>
                  </div>
                  <div className="h-[50px] w-[180px] rounded-[10px] border-[1px] border-black flex justify-center items-center font-semibold mb-5">
                    Show all amenities
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* OtherSide */}
          <div className="w-[50%] flex mt-[200px] ml-[220px] ">
            <div
              className="w-[350px] h-[280px] bg-white rounded-[20px] flex px-6 py-6 flex-col static"
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <div className="h-[50px] flex  items-center">
                <div className="flex-1 text-[20px] font-medium flex gap-1">
                  <div>55</div>
                  <div className="text-[15px] flex items-end mb-1 text-[silver] font-light">
                    night
                  </div>
                </div>
                <div
                  className="flex justify-centeric
          "
                >
                  <div className="flex justify-center items-center text-[15px] font-medium">
                    <div>
                      <AiFillStar className="flex " />
                    </div>
                    <div className="mr-2">4.89</div>
                  </div>
                  <div className="underline text-[silver] text-[15px]">
                    9 reviews
                  </div>
                </div>
              </div>
              <div className="h-[115px]  rounded-[10px] grid grid-rows-2">
                <div className="grid grid-cols-2">
                  <div className="border-l-[1px] border-t-[1px] border-[black] rounded-tl-[10px] flex justify-center px-3 flex-col">
                    <div className="text-[10px] font-semibold">CHECK-IN</div>
                    <div className="text-[silver] text-[15px]">9/5/2023</div>
                  </div>
                  <div className="border-t-[1px] border-r-[1px] border-[black] border-l-[1px] rounded-tr-[10px]  flex justify-center px-3 flex-col">
                    {" "}
                    <div className="text-[10px] font-semibold">CHECKOUT</div>
                    <div className="text-[silver] text-[15px]">Add date</div>
                  </div>
                </div>
                <div className="border-[1px] border-[black] rounded-bl-[10px] rounded-br-[10px] flex flex-col px-3 justify-center ic">
                  {" "}
                  <div className="text-[10px] font-semibold">GUESTS</div>
                  <div className="text-[silver] text-[15px]">1 guest</div>
                </div>
              </div>
              <div className="h-[40px] bg-[#F62F58] mt-5 rounded-[10px] flex justify-center items-center text-white font-medium text-[15px]">
                Check availability
              </div>
            </div>
          </div>
          {/* OtherSide */}
        </div>
      </div>
    </div>
    )

  }
  </div>
  );
};

export default About;
