import {FaAirbnb} from "react-icons/fa"
import {BiHomeAlt2} from "react-icons/bi"

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center" >
        <div className="w-[90%] h-[70px] flex justify-between items-center">
<div>
  <FaAirbnb/>
</div>
<div className="flex items-center">
  <button className="font-semibold ">Ready to Airbnb it?</button>
  <div>
    <BiHomeAlt2 style={{fontSize:"18px"}}/>
  <button className="w-[150px] h-[40px] border flex justify-center items-center
  bg-[#E41D57] rounded-md hover:cursor-pointer duration-300 ml-[10px] text-white"> Airbnb Setup</button>
  </div>

</div>
        </div>
    </div>
  )
}

export default Header