import {FiSearch} from "react-icons/fi" 
import {TbMenu2} from "react-icons/tb" 
import {TfiWorld} from "react-icons/tfi" 
import {IoMdContact} from "react-icons/io" 
import {CgOptions} from "react-icons/cg" 
import { useState } from "react"

const Headers = () => {
    const [state,setState] = useState<boolean>(false)

    const onClick = ()=>{
        setState(!state)
    }
  return (
    <div className="
    w-full
    h-[75px]
    flex
    justify-center
    items-center
    bg-white
    border-b-[1px]
    border-b-[grey]
    ">
        <div className="
        w-[95%]
        h-[100%]
        flex
        justify-between
        items-center
        ">
            <div className="
           hidden
           medium:flex
           justify-center
           items-center
           w-full
           h-full
            ">
                <div className="
                w-[90%]
                h-[80%]
                bg-white
                drop-shadow
                rounded-[50px]
                flex
                items-center
                ">
                    <FiSearch className="
                    ml-[20px]
                    text-[20px]
                    "/>
                    <div className="
                    flex
                    items-center
                    w-[89%]
                    justify-between
                    ">
                        <div className="
                        ml-[15px]
                        leading-4
                        ">
                        <div className="
                        text-[14px]
                        font-[500]
                        ">Anywhere</div>
                        <div className="
                        text-[11px]
                        text-[grey]
                        font-[400]
                        ">Any week . Add guest</div>
                        </div>
                        <div className="
                        h-[40px]
                        w-[40px]
                        shadow
                        rounded-[50%]
                        flex
                        justify-center
                        items-center
                        ">
                            <CgOptions className="
                            text-[20px]
                            "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
            text-[25px]
            text-[#FF385C]
            font-[500]
            medium:hidden
            ">JoeDalk</div>
            <div className="
            flex
            items-center
            justify-around
            h-[70%]
            w-[350px]
            rounded-[50px]
            shadow
            medium:hidden

            ">

                <div className="
                text-[14px]
                font-[500]
                ml-[10px]
                ">Anywhere</div>
                <hr className="
                w-[1px]
                h-[20px]
                border-[1px]
                border-[grey]
                
                "/>
                <div className="
                text-[14px]
                font-[500]
                ">Any week</div>
                <hr className="
                w-[1px]
                h-[20px]
                border-[1px]
                border-[grey]
                "/>
                <div className="
                text-[14px]
                font-[450]
                text-[grey]
                ">Add guest</div>
                <div className="
                w-[40px]
                h-[40px]
                rounded-[50%]
                flex
                justify-center
                items-center
                bg-[#FF385C]
                ">
                    <FiSearch className="
                    text-white
                    "/>
                </div>
            </div>
            <div className="
            flex
            justify-around
            items-center
           min-w-[310px]
           medium:hidden

            ">
                <div className="
                text-[14px]
                font-[500]
                w-[170px]
                h-[35px]
                flex
                justify-center
                items-center
               rounded-[50px]
               hover:bg-[#efefef]
                ">JoeDalk your home</div>
                <TfiWorld className="
                text-[18px]
                "/>
                <div className="
                flex
                justify-around
                items-center
                w-[70px]
                h-[35px]
                border-[1px]
                border-[grey]
                rounded-[50px]
                hover:shadow
                "
                onClick={onClick}
                >
                    <TbMenu2 className="
                    text-[20px]
                    "/>
                    <IoMdContact className="
                    text-[30px]
                    "/>
                    {
                        state ? <div className="
                        h-[185px]
                        w-[250px]
                        bg-white
                        absolute
                        top-[60px]
                        right-[70px]
                        shadow
                        rounded-[10px]
                       
                        ">
                            <div className="
                            text-[15px]
                            font-[500]
                            h-[35px]
                            w[100%]
                            hover:bg-[#e9e9e9]
                            rounded-t-[10px]
                            flex
                            items-center
                            pl-[10px]
                            ">Log in</div>
                            <div className="
                            text-[15px]
                            font-[500]
                            h-[35px]
                            w[100%]
                            hover:bg-[#e9e9e9]
                            flex
                            items-center
                            pl-[10px]
                            "> Sign up</div>
                            <hr className="
                            mt-[10px]
                            mr-[10px]
                            border-[1px]
                            border-[#c1c1c1]
                            "/>
                            <div className="
                            text-[15px]
                            font-[500]
                            h-[35px]
                            w[100%]
                            hover:bg-[#e9e9e9]
                            flex
                            items-center
                            pl-[10px]
                            mt-[12px]
                            ">JoeDalk your home</div>
                            <div className="
                            text-[15px]
                            font-[500]
                            h-[35px]
                            w[100%]
                            hover:bg-[#e9e9e9]
                            flex
                            items-center
                            pl-[10px]
                            ">Help center</div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headers