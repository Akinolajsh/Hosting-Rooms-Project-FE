import img from "../assets/emma.jpg"

const EmmaFirst = () => {
  return (
    <div className="w-full h-[500px] flex justify-center items-center ">
      <div className="w-[90%] h-[500px]">
        <h1 className="text-center font-medium text-[40px] mb-[30px]">Airbnb it easily with Airbnb Setup</h1>
        <div className="w-full h-[400px]">
        <img src={img} className="w-full h-[400px] "/>
        </div>
        
      </div>
    </div>
  );
};

export default EmmaFirst;
