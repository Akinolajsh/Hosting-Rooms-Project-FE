import img from "../../../assets/icon2.jpg";
import img1 from "../../../assets/icon2.jpg";
import img2 from "../../../assets/icon2.jpg";
import img3 from "../../../assets/icon2.jpg";
import img4 from "../../../assets/icon2.jpg";
import img5 from "../../../assets/icon2.jpg";
import img6 from "../../../assets/icon2.jpg";
import img7 from "../../../assets/icon2.jpg";
import img8 from "../../../assets/grid001.webp";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
// import { useTanRoom } from "../../../Hook/Room.";
import { Link } from "react-router-dom";


function SampleNextArrow(props:any) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", position:"absolute", top: 100, right: 10}}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "", position:"absolute", top: 100, left: 10, zIndex:10}}
      onClick={onClick}
    />
  );
}



const LandingPage = () => {
  // const { rooms} = useTanRoom()
  const myArr:any = [
      { id: 2, IMG: img1, text: "Amazing pools" },
    { id: 5, IMG: img4, text: "Boat" },
    { id: 6, IMG: img5, text: "island" },
    { id: 1, IMG: img, text: "Earth homes" },
    { id: 7, IMG: img6, text: "farms" },
    { id: 3, IMG: img2, text: "Bed & reakfasts" },
    { id: 8, IMG: img7, text: "Trending" },
    { id: 4, IMG: img3, text: "Top of the world" },
    { id: 9, IMG: img8, text: "Beach" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  }

  return (
                  <div
      className="
    w-full
    min-h-[100vh]
    flex
    flex-col
    justify-center
    items-center
    "
    >
      <div
        className="
        h-[80px]
        w-[95%]
        flex
        justify-between
        items-center
        "
      >
        {
            myArr.map((props:any)=>(
                <div
          className="
            h-[40px]
            w-[150px]
            flex
            flex-col
            justify-center
            items-center
            "
        >
          <div
            className="
                w-[25px]
                h-[30px]
                "
          >
            <img
              src={props.IMG}
              className="
                h-[50px]
                object-contain
                "
            />
          </div>
          <div
            className="
                text-[11px]
                mt-[8px]
            
                "
          >
            {props.text}
          </div>
        </div>
            ))
        }
      </div>





            <div className="
      w-[95%]
      min-h-[100vh]
      ">
        <div className="
        w-[300px]
        h-[390px]
        rounded-[10px]
        ">
          <div className="
          w-[100%]
          h-[73%]
          rounded-[10px]
          ">
            <Slider {...settings}>
      <Link to="/detail">
      <img src={img8} className="
            object-cover
            h-[100%]
            w-[100%]
        rounded-[10px]
            "/>
      </Link>
            <img src={img8} className="
            object-cover
            h-[100%]
            w-[100%]
        rounded-[10px]
            "/>
            </Slider>
           <div className="
           h-[25%]
           W-[100%]
           flex
           justify-between
           ">
             <div className="
             ml-[5px]
             mt-[5px]
             ">
              <div className="
              text-[15px]
              font-[500]
              ">Dublin</div>
            <div className="
            text-[grey]
            text-[15px]
            font-[500]
            ">54,855km Away</div>
            <div className="
            text-[grey]
            text-[15px]

            ">Sep 2-7</div>
           
            <div className="
            grey-
            ">$91 night</div>
            </div>
            <div className="
            mr-[10px]
            m-[10px]
            ">⭐ 5</div>
           </div>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default LandingPage;
