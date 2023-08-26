import img from "../assets/Emma1.jpeg"
import img1 from "../assets/Emma2.jpeg"
import img2 from "../assets/Emma3.jpeg"


const EmmaFourth = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center ">
      <div className="w-[90%] h-full flex justify-center items-center flex-col">
        <h1 className="text-center font-bold text-[40px] mb-[20px]">
          Introducing Airbnb-friendly apartments
        </h1>
        <div className="flex justify-center w-full  h-[400px] ">
          <div className="mr-[30px]">
            <img
              src={img2}
              alt=""
              className="w-[300px] h-[300px]  border object-cover rounded-lg"
            />
            <div className="flex justify-center flex-col items-center">
              <h3 className="font-semibold text-[13px]"> Park 12 Apartments</h3>
              <h4 className="text-[10px] font-semibold">
                San Diego, California
              </h4>
            </div>
          </div>
          <div className="">
            <img
              src={img}
              alt=""
              className="w-[300px] h-[300px] border object-cover rounded-lg"
            />
            <div className="flex justify-center flex-col items-center">
              <h3 className="font-semibold text-[13px]">Old Town Apartments</h3>
              <h4 className="text-[10px] font-semibold">Scottsdale, Arizona</h4>
            </div>
          </div>
          <div className="ml-[30px]">
            <img
              src={img1}
              alt=""
              className="w-[300px] h-[300px] border object-cover rounded-lg"
            />
            <div className="flex justify-center flex-col items-center">
              <h3 className="font-semibold text-[13px]"> 525 Olive Apartments</h3>
              <h4 className="text-[10px] font-semibold">
                San Diego, California
              </h4>
            </div>
          </div>
        </div>

        <div className="text-center text-[20px] leading-1">
          We’ve partnered with apartment buildings across the US that let you
          rent a place to live and <br /> Airbnb it part-time. Explore available
          apartments and find out what you can earn.
        </div>
        <button className="w-[120px] h-[40px] flex justify-center items-center border rounded-md border-black
        hover:cursor-pointer m-[20px]">Learn more</button>
      </div>
    </div>
  );
};

export default EmmaFourth;
