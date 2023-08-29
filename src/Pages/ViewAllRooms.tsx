import { AiOutlineSearch, AiOutlineCaretUp,AiOutlineCheckCircle  } from "react-icons/ai"
import {FaCaretDown, FaAngleDown} from "react-icons/fa"
import {MdOutlineSettings} from "react-icons/md"
import {GrInProgress} from "react-icons/gr"

const ViewAllRooms = () => {
  return (
    <div className="bg-white w-[100%] h-[100vh] flex justify-center   ">
        <div className="w-[90%]  ">
            {/* listing */}
            <div className="flex justify-between mt-[30px]">
                <div className="text-[22px] font-medium  ">1Listing</div>
                <button className="border-[1px] border-[black] p-2 rounded">+ Create listining</button>
            </div>
            {/*end listing */}

            {/* search */}
            <div className="flex gap-[30px]">
                {/* input */}
                <div className="w-[400px] h-[38px] rounded-[20px] flex border justify items-center gap-[10px] hover:border-[2px] hover:border-[black]  ">
                    <AiOutlineSearch className="text-[20px] ml-[15px] "/>
                    <input className=" h-[33px] w-[350px] rounded-[20px] p-2 text-[14px] outline-none "
                    type="Search"
                    placeholder="Search Listings"
                     />
                </div>
                 {/*end input */}
                 {/* circle  */}
                <div className="border-[1px] border-[silver] flex justify-center  items-center w-[180px] h-[40px] rounded-[20px] p-1 hover:cursor-pointer hover:border-[2px] hover:border-[black]  ">
                    <div className="text-[14px] font-light text-black  ">Rooms and Beds</div>
                    <div>
                    <FaAngleDown className="text-[15px] text-[black] font-bold mt-[4px]"/>
                    </div>
                </div>
                  {/*end circle  */}
            </div>
            {/*end search */}

            {/* checkbox */}
            <div className="mt-[30px] flex justify-between items-center p-3 border-b-[1px] border-b-[#d4cccc] ">
                <div className="flex gap-[10px] ">
                    <input className="hover:cursor-pointer"
                     type="checkbox" />
                    <div className="text-[13px] font-semibold hover:cursor-pointer ">LISTING </div>
                    <div>
                        <FaCaretDown className="mt-[3px] hover:cursor-pointer "/>
                        {/* <AiOutlineCaretUp/> */}
                    </div>
                </div>
                {/* status */}

                <div className="flex">
                    <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black]">Status</div>
                    <div className="">
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                    </div>
                </div>
                {/* end status */}

                {/* <Todo></Todo> */}
                <div>
                    <div className="text-[#b6b2b2] text-[13px] font-semibold">TO DO</div>
                </div>
                {/*end <Todo></Todo> */}

                {/* <BigDiv></BigDiv> */}
                <div className="flex gap-[20px]">
                    <div className="flex">
                        <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black] uppercase">Instant Book</div>
                        <div>
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black] uppercase">BedRooms</div>
                        <div>
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black] uppercase"> Beds</div>
                        <div>
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black] uppercase"> Baths</div>
                        <div>
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="text-[13px] text-[#b6b2b2] font-semibold hover:cursor-pointer hover:text-[black] uppercase"> Location</div>
                        <div>
                        <AiOutlineCaretUp className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    <FaCaretDown className="text-[#b6b2b2] text-[15px] hover:cursor-pointer"/>
                        </div>
                    </div>
                    <div>
                        <MdOutlineSettings className="text-[20px] font-bold text-[#1d1c1c] hover:cursor-pointer hover:text-[black] transition-all"/>
                    </div>
                </div>
                {/* <BigDiv></BigDiv> */}
            </div>
            {/*end checkbox */}
            

            {/* Rooms Booked  */}
            <div className="mt-[30px] flex justify-between items-center p-3 border-b-[1px] border-b-[#d4cccc] ">
                <div className="flex justify-center items-center gap-[10px] ">
                    <input className="hover:cursor-pointer"
                     type="checkbox" />
                     <img className="w-[60px] h-[50px] border rounded-[10px] "
                     src="" alt="" />
                    <div className="text-[13px] font-bold hover:cursor-pointer ">Jecinta </div>
                   
                </div>
                {/* inProgress */}

                <div className="flex gap-[10px]">
                <div className="">
                        <GrInProgress className="text-[#b6b2b2] text-[13px] hover:cursor-pointer "/>
                    </div>
                    <div className="text-[13px] text-[#222020] font-light  ">In Progress </div>
                   
                </div>
                {/* end Inprogress */}

                {/* <finish></finish> */}
                <div>
                    <div className="text-[#1a1919] text-[14px] border-[1px] border-[black] rounded-[7px] p-[7px] font-semibold">Finish</div>
                </div>
                {/*end <finish></finish> */}

                {/* <BigDiv></BigDiv> */}
                <div className="flex gap-[54px] items-center p-3 border-b-[1px] border-b-[#d4cccc">
                    <div className="flex justify-center items-center gap-[5px]">
                    <div >
                        <AiOutlineCheckCircle className="text-[#b6b2b2] text-[15px] hover:cursor-pointer "/>
                        </div>
                        <div className="text-[15px] text-[#181717] font-light "> Off</div>
                    
                    </div>

                    <div className="">
                        <div className="text-[14px]-semibold text-[black] ">1</div>
                    </div>

                    <div className="">
                        <div className="text-[14px] text-[black] font-light"> 1</div>
                    </div>

                    <div className="">
                        <div className="text-[14px] text-[black] font-light"> 1.5</div>
                    </div>

                    <div className="flex">
                        <div className="text-[13px] font-light text-[black] "> Ikeja, Nigeria</div>
                    </div>

                    <div>
                        <MdOutlineSettings className="text-[20px] font-bold text-[#1d1c1c] hover:cursor-pointer hover:text-[black] transition-all"/>
                    </div>
                </div>
                {/* <BigDiv></BigDiv> */}
            </div>
            {/* Rooms Booked  */}
        </div>
    </div>
  )
}

export default ViewAllRooms