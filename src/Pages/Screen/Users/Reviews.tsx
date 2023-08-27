import { AiFillStar } from "react-icons/ai";
import avatar from "../../../assets/dummy-prod-1.jpg";
import avatar1 from "../../../assets/Emma3.jpeg";

const Reviews = () => {
  const data: any = [
    {
      avatar: { avatar },
      name: "Boris",
      date: "May 2030",
      text: "Excelente servicio",
    },
    {
      avatar: { avatar1 },
      name: "Adriana",
      date: "May 2030",
      text: "Foi uma boa estadia, com um pequeno problema com outros hóspedes que foi prontamente resolvido com a anfitriã, muito solicita!",
    },
    {
      avatar: { avatar },
      name: "Raul",
      date: "May 2030",
      text: "Roberta é uma ótima anfitriã, o local é extremamente agradável e tranquilo. Nota 10",
    },
    {
      avatar: { avatar },
      name: "Nathalia",
      date: "May 2030",
      text: "Foi a nossa segunda estadia e com certeza outras virão. A Roberta é uma excelente anfitriã.",
    },
    {
      avatar: { avatar },
      name: "Raul",
      date: "May 2020",
      text: "Local muito bom para descansar. Ótima infraestrutura e muito verde.",
    },
    {
      avatar: { avatar },
      name: "Caio José",
      date: "May 2010",
      text: "O lugar é muito bonito e fomos muito bem recebidos. Recomendo.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center  h-[800px] ">
      <div className="w-[80%] justify-center flex flex-col border-[#e1e0e0] border-t-[1px] h-full border-b-[1px]">
        <div className="w-full h-[200px]  ">
          <div className="flex gap-2  items-center my-5">
            <div>
              <AiFillStar />
            </div>
            <div className="text-[18px] font-medium">4.89 . 9 reviews</div>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="w-[450px] flex justify-between items-center ">
              <div>Cleanliness</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2 ">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>4.9</div>
              </div>
            </div>
            <div className="w-[450px] flex justify-between items-center ">
              <div>Accuracy</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>4.8</div>
              </div>
            </div>
            <div className="w-[450px] flex justify-between items-center ">
              <div>Communication</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>4.9</div>
              </div>
            </div>
            <div className="w-[450px] flex justify-between items-center ">
              <div>Location</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>5.0</div>
              </div>
            </div>
            <div className="w-[450px] flex justify-between items-center ">
              <div>Check-in</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>5.0</div>
              </div>
            </div>
            <div className="w-[450px] flex justify-between items-center ">
              <div>Value</div>
              <div className="flex w-[150px] justify-between items-center  mr-11 my-2">
                <div className="h-[3px] w-[120px] bg-black"></div>
                <div>4.8</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[550px] w-full flex flex-wrap justify-between">
          {data?.map((props: any) => (
            <div className="w-[520px] flex  px-2 py-2 h-[150px]  my-3 mx-2 flex-col">
              <div className="flex ">
                <div className="h-[50px] w-[50px] rounded-[50%] object-cover overflow-hidden mb-2">
                  <img src={avatar} />
                </div>
                <div className="ml-2">
                  <div className="font-semibold">{props.name}</div>
                  <div className="text-[12px]">{props.date}</div>
                </div>
              </div>
              <div className="font-light">{props.text}</div>
            </div>
          ))}
        </div>
        <div className="h-[50px] w-[200px] border-[1px] border-[black] flex justify-center items-center rounded-[10px]">
          Show all 9 reviews
        </div>
      </div>
    </div>
  );
};

export default Reviews;
