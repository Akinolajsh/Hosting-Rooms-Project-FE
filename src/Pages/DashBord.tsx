import {BsExclamationCircle, BsPersonCircle} from "react-icons/bs"
import {LiaGreaterThanSolid, LiaLessThanSolid} from "react-icons/lia"
import {GiHypersonicBolt} from "react-icons/gi"
import {TbBookmark} from "react-icons/tb"
import pix from "../assets/jecint.jpeg"
import picture from "../assets/jecin.jpeg"
import img from "../assets/jeci.jpg"

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
      <div className="text-[15px] font-semibold underline mt-[2px] ">Start</div>
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
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold mt-[10px]">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold mt-[10px]">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold mt-[10px]">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold mt-[10px]">on or off</div>
                  <div className="text-[13px] font-light text-[grey]">Choose how guests will Book</div>
                </div>
                <div className="w-[200px] h-[170px] bg-[#FFFFFF]  rounded-[15px] p-2">
                  <div>
                    <TbBookmark className = "text-[35px]"/>
                  </div>
                  <div className="text-[13px] font-semibold mt-[10px]">Turn Instant Book</div>
                  <div className="text-[13px] font-semibold mt-[10px]">on or off</div>
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
          <div className="flex gap-[15px]">
          <img className="w-[300px] h-[320px] bg-[#e9e4e4] rounded-[15px] mt-[40px] object-cover"
              src={pix}
              />
              <img className="w-[300px] h-[320px] bg-[#e9e4e4] rounded-[15px]  object-cover mt-[40px]"
              src={picture}
              />
              <img className="w-[300px] h-[320px] bg-[#e9e4e4] rounded-[15px] mt-[40px] object-cover"
              src={img} alt={img}
              />
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