import logo from "../assets/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
import {BiChevronDown} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import profile from "../assets/966.jpg"
const DashBoardHeader = () => {
  return (
    <div className="w-[100%] h-[60px] flex justify-end  ">
        <div className="w-[90%] flex justify-between items-center">
            <div>
                <img src={logo} alt={logo} />
            </div>
            <div>
                <div>Today</div>
                <div>
                    <div>Menu</div>
                    <BiChevronDown/>
                </div>
                
            </div>
            <div>
                <div>
                    <BsBell/>
                </div>
                <div className="h-[50px] w-[50px] rounded-[50%] border   ">
                    <img className="object-cover"
                    src={profile} alt={profile} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoardHeader