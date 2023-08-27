import {FaAirbnb} from "react-icons/fa"
import {BiHomeAlt2} from "react-icons/bi"

const Header = () => {
  return (
    <div className="w-[100%] h-[70px] flex justify-center items-center z-20 " >
        <div className="w-[90%] h-[70px] flex justify-between items-center">
<div>
  <FaAirbnb style={{fontSize:"40px", color:"#E41D57"}} className="hover:cursor-pointer"/>
</div>
<div className="flex items-center justify-center ">
  <button className="font-semibold ">Ready to Airbnb it?</button>
  <div className="flex text-white w-[170px] h-[50px] border justify-center items-center
  bg-[#E41D57] rounded-md hover:cursor-pointer duration-300 ml-[20px] ">
    <BiHomeAlt2 style={{fontSize:"30px", color:"white" }}/>
  <div className=" flex items-center justify-center text-[17px] mt-[5px] font-semibold"> 
  Airbnb Setup</div>
  </div>

</div>
        </div>
    </div>
  )
}

export default Header