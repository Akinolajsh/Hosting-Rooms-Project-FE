// http://preview.themeforest.net/item/authfy-responsive-login-and-signup-page-template/full_screen_preview/23182208
import pix from "../../assets/auth-bg-pix.jpg"
import {BsFacebook, BsTwitter, BsGoogle} from "react-icons/bs"

const Register = () => {  
  return (
    // container
    <div className="w-full h-[100vh] flex bg-cover bg-center bg-no-repeat" 
    style={{backgroundImage : `url(${pix})`}}
    >
      {/* cover */}
      <div className="w-full h-[100vh] bg-green-950 bg-opacity-30 flex flex-col justify-center items-center">
        {/* Title */}
        <div className="m-11" >
        <div className="text-[30px] font-bold text-white">JoeDalk</div>
        </div>
        {/* card */}
        <div className="">
          {/* top */}
          <div className="w-[600px] h-[31px] rounded-t-[10px] bg-[#C5C9CA] flex items-center">
            <div className="w-[13px] h-[13px] bg-orange-500 ml-3 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-green-500 ml-1 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-rose-500 ml-1 rounded-[50%]"></div>
          </div>

          {/* Box */}
        <div className="w-[600px] flex">

                {/* left */}
            <div className="w-[40%] h-[350px] px-7 flex flex-col items-center justify-center bg-blue-500 py-[20px]">
{/* logo */}
              <div className="" >
              <div className="text-[20px] font-bold text-white">JoeDalk</div>
              </div>
{/* text  */}
              <div className="text-[12px] font-bold text-white mt-7 mb-3">
          Login using social media to get quick access
             </div>
{/* social Buttons */}
              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-blue-800 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
              <div className="mr-2"><BsFacebook /></div>
                Signin with facebook
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-purple-800 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
              <div className="mr-2"><BsTwitter /></div >
                Signin with twitter
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-orange-800 text-[12px] rounded-lg mt-3 text-white cursor-pointer">
              <div className="mr-2"><BsTwitter /></div>
                Signin with google
              </div>
        </div>

                {/* right */}
                <div className="w-[60%] h-[350px] flex flex-col items-center bg-white">
                            Right
                </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Register
