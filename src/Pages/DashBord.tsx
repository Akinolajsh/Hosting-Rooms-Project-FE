import {BsExclamationCircle, BsPersonCircle} from "react-icons/bs"
import {LiaGreaterThanSolid, LiaLessThanSolid} from "react-icons/lia"
import {GiHypersonicBolt} from "react-icons/gi"
import {TbBookmark} from "react-icons/tb"
import pix from "../assets/jecint.jpeg"
import picture from "../assets/jecin.jpeg"
import img from "../assets/jeci.jpg"
import { Link } from "react-router-dom"


const DashBoard = () => {
  return (
    <div className="w-[100%] h-[100vh]">
     
        {/* welcome part */}
        <div className="  bg-[#FFFFFF] flex justify-center items-center">
        <div className=" mt-20 h-[280px] p-3 w-[80%]  ">
          <div className="text-[#222222] text-[30px] font-semibold ">Welcome, Igboanuba!</div>
          <div className="text-[#717171] text-[14px] mt-[10px] ">Guests can reserve your place 24 hours after you publish—here’s how to prepare.</div>
            {/* litte border  */}

         <div className="mt-[35px] border w-[280px] h-[95px] rounded-[10px] p-3  ">
      <div className="text-[15px] font-semibold ">Confirm important details</div>
      <div className=" flex justify-between items-center ">
        <div className="text-[13px] font-light text-red-400">Required to publish</div>
        <div>
          <BsExclamationCircle className="text-[22px] font-bold text-red-700 mt-[5px] "/>
        </div>
      </div>
     <Link to="/detail">
     <div className="text-[15px] font-semibold underline mt-[2px] ">Start</div>
     </Link>
         </div>
            {/*end litte border  */}
        </div>
        </div>
         {/*end welcome part */}
        {/* secondPart */}
         <div className="bg-[#E9DED4] w-[100%] h-[70vh] mt-[50px] flex justify-center  ">
          <div className=" w-[80%] p-5">
            <div className="mt-[60px] flex justify-between">
              <div className="text-[#222222] font-semibold text-[22px]">Your next steps</div>
              <div className="flex gap-[10px]">
                <LiaGreaterThanSolid className="bg-[#FFFFFF] p-2 rounded-[50%] text-[23px] hover:cursor-pointer hover:transition-all hover:scale-(1.0)  "/>
                <LiaLessThanSolid className="bg-[#FFFFFF] p-2 rounded-[50%] text-[23px] hover:cursor-pointer hover:transition-all hover:scale-(1.0)  " />
              </div>
            </div>
            <div className="text-[#222222] font-light   ">It's time to review a couple of current settings.</div>
            {/* smallCard */}
              <div className="mt-[100px] flex gap-[15px]">
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px] ">Turn Instant Book
                 
                  </div>
                  <div className="text-[13px] font-semibold "> on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px] ">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold ">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold ">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold ">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
              </div>
             {/* smallCard */}
          </div>
         </div>
        {/* end secondPart */}
        {/* third private name() { */}
        <div className="bg-[#FFFFFF] w-[100%] h-[70vh]  flex justify-center ">
          <div className="mt-[60px] w-[80%]  ">
            <div>
              <div className=" text-[25px] font-semibold ">We’re here to help </div>
              {/* smallestCard */}
           <div className="flex gap-[20px]">
           <div className="mt-[20px] w-[400px] h-[110px] border-[1px] border-[silver] rounded-[10px] p-3 flex items-center gap-[10px]">
                  <div>
                    <BsPersonCircle  className="text-[30px] font-semibold  "/>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold  ">Guardian from a Super Host</div>
                    <div className="text-[15px] font-lighttext-grey  ">We will match u with an experienced Host who can help u get Started.</div>
                  </div>
              </div>
              <div className="mt-[20px] w-[400px] h-[110px] border-[1px] border-[silver] rounded-[10px] p-3 flex items-center gap-[10px]">
                  <div>
                    <GiHypersonicBolt  className="text-[30px] font-semibold  "/>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold  ">Contact spaecialized Support</div>
                    <div className="text-[15px] font-lighttext-grey  ">As a new Host, you get one-tap access to a specially trained support Team,</div>
                  </div>
              </div>
           </div>
              {/* end smallestCard */}

              {/*end LogCard */}
          <div className=" mt-[70px]">

          <div className="font-semibold text-[20px]">
            Resources and tips
          </div>

         <div className="flex gap-[20px] mt-[2opx] ">

         <div className="w-[300px] h-[320px border mt-[40px] rounded-[15px] shadow-xl hover:cursor-pointer overflow-hidden">
            <img className="w-full h-[250px] rounded-[15px]  object-cover hover:scale-[1.1] duration-500"
              src={picture} 
              />
              <div className="text-[15px] font-semibold flex justify-center mt-[30px]  ">How to get paid for Hosting</div>
            </div>
         <div className="w-[300px] h-[320px border mt-[40px] rounded-[15px] shadow-xl hover:cursor-pointer overflow-hidden">
            <img className="w-full h-[250px] rounded-[15px]  object-cover hover:scale-[1.1] duration-500"
              src={pix} 
              />
              <div className="text-[15px] font-semibold flex justify-center mt-[30px]  ">How to take great photos with 
              ur phone</div>
            </div>
         <div className="w-[300px] h-[320px border mt-[40px] rounded-[15px] shadow-xl hover:cursor-pointer overflow-hidden">
            <img className="w-full h-[250px] rounded-[15px]  object-cover hover:scale-[1.1] duration-500"
              src={img} 
              />
              <div className="text-[15px] font-semibold flex justify-center mt-[30px]  ">The best way to set ur
               calenders and bookings setting</div>
            </div>
         <div className="w-[300px] h-[320px border mt-[40px] rounded-[15px] shadow-xl hover:cursor-pointer overflow-hidden">
            <img className="w-full h-[250px] rounded-[15px]  object-cover hover:scale-[1.1] duration-500"
              src={pix} 
              />
              <div className="text-[15px] font-semibold flex justify-center mt-[30px]  ">How to write a listing 
              descriptions that works</div>
            </div>
             
         </div>

          </div>
              {/* LogCard */}

            </div>
          </div>
        </div>

 {/* third private name() { */}
 
    </div>
  )
}

export default DashBoard