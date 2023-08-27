import img from "../assets/Emma4.jpeg";

const EmmaSixth = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-[#F7F7F7] p-[40px]">
      <div className="w-[90%] h-full flex justify-between items-center bg-white rounded-t-2xl rounded-r-2xl">
        <img src={img} className="w-[55%] h-full object-cover" />
        <div className="w-[40%] h-full flex  justify-center flex-col">
          <div className="">
            <h1 className="text-[30px] font-bold mb-[10px]">
              Still have questions?
            </h1>
            <h3 className="text-[17px] font-normal mb-[10px]">
              Get answers from an experienced Superhost near you.
            </h3>
            <button
              className="w-[220px] h-[40px] flex justify-center items-center
                border rounded-md hover:cursor-pointer border-black"
            >
              Match with a Superhost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmmaSixth;
