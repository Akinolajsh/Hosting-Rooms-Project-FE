import { TfiWorld } from "react-icons/tfi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center bg-[#F7F7F7] border-t-2 flex-col pt-[20px]">
      {/*Up*/}
      <div className="w-[90%] h-[50vh] flex border-b-2">
        <div className="mr-[200px]">
          <nav className="font-medium text-[16px] pt-[10px] pb-[6px]">
            Support
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Help Center
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Get help with a safety issue
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            AirCover
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Combating discrimination
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Supporting people with disabilities
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Cancellation options
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Report neighborhood concern
          </nav>
        </div>

        <div className="mr-[200px]">
          <nav className="font-medium text-[16px] pt-[10px] pb-[6px]">
            Hosting
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Airbnb your home
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            AirCover for host
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Hosting resources
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Community forum
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Hosting responsibly
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Airbnb-friendily apartments
          </nav>
        </div>

        <div>
          <nav className="font-medium text-[16px] pt-[10px] pb-[6px]">
            Airbnb
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            News room
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            News features
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Careers
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Investors
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Gift cards
          </nav>
          <nav className="hover:underline hover:cursor-pointer text-[15px] pb-[10px] font-light">
            Airbnb.org disaster relief
          </nav>
        </div>
      </div>

      {/*down*/}
      <div className="w-[90%] h-[10vh] m-[10px] flex justify-between items-center">
        <div>
          <span className="text-[14px]">© 2023 Airbnb, Inc.</span>{" "}
          <span className="hover:underline hover:cursor-pointer ml-[5px] text-[13px] duration-300">
            {" "}
            Terms
          </span>
          <span className="hover:underline hover:cursor-pointer ml-[5px] text-[13px] duration-300">
            {" "}
            Sitemap
          </span>
          <span className="hover:underline hover:cursor-pointer ml-[5px] text-[13px] duration-300">
            {" "}
            Privacy
          </span>
          <span className="hover:underline hover:cursor-pointer ml-[5px] text-[13px] duration-300">
            {" "}
            Your Privacy Choice
          </span>
        </div>
        {/*icons*/}
        <div className="flex items-center justify-center ">
          <TfiWorld className="mr-[7px] text-[20px] hover:cursor-pointer" />
          <span
            className="mr-[7px] text-[14px] font-medium hover:cursor-pointer
            hover:underline duration-300"
          >
            English (US)
          </span>
          <span
            className="mr-[7px] text-[14px] font-medium hover:cursor-pointer
            hover:underline duration-300"
          >
            $ USD
          </span>
          <AiFillFacebook className="mr-[7px] text-[20px] hover:cursor-pointer" />
          <AiFillTwitterSquare className="mr-[7px] text-[20px] hover:cursor-pointer" />
          <FaInstagramSquare className="text-[20px] hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
