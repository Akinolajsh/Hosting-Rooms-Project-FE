const Congratulation = () => {
  return (
    <div className="w-full h-[100vh] flex bg-slate-700">
      <div className="h-[100%] w-[50%] bg-[red] flex justify-center items-center relative">
        <video src="" controls  className="absolute w-full h-full"></video>
      </div>
      <div className="h-[100%] w-[50%] bg-[black] flex flex-col  justify-center pl-5 relative">
        <h1 className="text-white text-[48px] flex pl-[45px]  font-[600]  leading-0">
          Congratulations <br /> kehinde ,
        </h1>

        <p className="text-white text-[16px] mt-4  pl-[45px] ">
          From one Host to another - welcome on board. Thank you for <br />
          sharing your home and helping you to create incredible experiences{" "}
          <br /> our guest{" "}
        </p>
        <div >
           <div className=" flex justify-center items-center px-4 py-2 w-[200px] h-[45px] rounded text-white bg-[#c73850] absolute bottom-0 right-10 font-bold ">Let's get started</div>
        </div>
      </div>
                                                                                   </div>
  );
};

export default Congratulation;
