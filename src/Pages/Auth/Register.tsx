// http://preview.themeforest.net/item/authfy-responsive-login-and-signup-page-template/full_screen_preview/23182208
import { useState } from "react"
import pix from "../../assets/auth-bg-pix.jpg"
import dummy from "../../assets/dummy Image.png"
import {BsFacebook, BsTwitter, BsGoogle, BsCamera} from "react-icons/bs"
import { Link } from "react-router-dom"

const Register = () => {  

  const [image, setImage] = useState("")
  const [avatar, setAvatar] = useState(dummy)

  const onChangeImage = (e : any)=>{
    let saveImage = e.target.files[0]
    let localImage = URL.createObjectURL(saveImage)

    setImage(saveImage)
    setAvatar(localImage)

    console.log(image);
    
  }

  return (
    // container
    <div className="w-full h-[100vh] flex bg-cover bg-center bg-no-repeat" 
    style={{backgroundImage : `url(${pix})`}}
    >
      {/* cover */}
      <div className="w-full h-[100vh] bg-green-950 bg-opacity-30 flex flex-col justify-center items-center">
        {/* Title */}
        <div className="m-5" >
        <div className="text-[30px] font-bold text-white">JoeDalk</div>
        </div>

        {/* card */}
        <div className="">

          {/* top */}
          <div className="w-[580px] h-[31px] rounded-t-[10px] bg-[#C5C9CA] flex items-center">
            <div className="w-[13px] h-[13px] bg-orange-500 ml-3 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-green-500 ml-1 rounded-[50%]"></div>
            <div className="w-[13px] h-[13px] bg-rose-500 ml-1 rounded-[50%]"></div>
          </div>

          {/* Box */}
        <div className="w-[580px] flex">

                {/* left */}
            <div className="w-[40%] px-7 flex flex-col items-center justify-center bg-blue-500 py-[20px]">
{/* logo */}
              <div className="" >
              <div className="text-[20px] font-bold text-white">JoeDalk</div>
              </div>
{/* text  */}
              <div className="text-[12px] font-bold text-white mt-8 mb-3">
          Login using social media to get quick access
             </div>
{/* social Buttons */}
              <div className=" flex items-center justify-center px-2 w-[100%] h-[36px] bg-blue-800 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
              <div className="mr-2"><BsFacebook /></div>
                Signin with facebook
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-purple-800 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
              <div className="mr-2"><BsTwitter /></div >
                Signin with twitter
              </div>

              <div className=" flex items-center justify-center px-4 w-[100%] h-[35px] bg-orange-800 text-[12px] rounded-lg mt-5 text-white cursor-pointer">
              <div className="mr-2"><BsGoogle /></div>
                Signin with google
              </div>
            </div>

                {/* right */}
            <div className="w-[60%] flex flex-col items-center bg-white justify-center p-7">
{/* title */}
              <div className="font-bold text-[18px] mb-5">Sign Up for Free!</div>

              {/* image */}
              <img className="object-cover  w-[70px] h-[70px] rounded-[35px] bg-slate-500 " src={avatar}/>

          <input type="file" className="hidden" id="id" accept="image/jpg, image/jpeg image/png" onChange={onChangeImage}/>
          <label htmlFor="id" className="mr-[60px] mb-4 text-gray-500 cursor-pointer text-[20px]"> <BsCamera /></label>

              {/* inputs */}
{/* full name */}
            <div className="border-b-2 h-[40px] w-full">
            <input className=" outline-none w-full placeholder: text-[13px]" placeholder="Full Name" />
            </div>
{/* email */}
            <div className="border-b-2 h-[40px] w-full mt-6">
            <input className=" w-full outline-none placeholder: text-[13px]" placeholder="Email Address" />
            </div>
{/* password */}
            <div className="border-b-2 h-[40px] w-full mt-6 flex items-center">
            <input className=" outline-none w-full placeholder: text-[13px] placeholder: mb-2" placeholder="password" />
            <BsCamera className="text-gray-600 cursor-pointer mb-2" />
            </div>
{/* confirm password */}
            <div className="border-b-2 h-[40px] w-full mt-6">
            <input className=" outline-none w-full placeholder: text-[13px]" placeholder="confirm password" />
            </div>

            {/* Button */}
            <button className="w-full bg-blue-700 h-[40px] rounded-md text-white text-[14px] cursor-pointer mt-4 "> Sign Up with email</button>

{/* to Signin */}
          <Link to="/sign-in">
            <div className=" text-blue-700 text-[13px] cursor-pointer mt-4 ">Already have an account?</div>
          </Link>
            </div>

        </div>

        </div>
      </div>
    </div>
  )
}

export default Register
