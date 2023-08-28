import RoomsLocation from "./RoomsLocation";
import About from "./About";
import Reviews from "./Reviews";
import Footer from "../../../Components/Static/Footer";
import Rules from "./Rules";
import Payment from "./Payment";

const Description = () => {
  return (
    <div>
      {/* <Payment/> */}
      <RoomsLocation />
      <About />
      <Reviews />
      <Rules/>
      <Footer/>
    </div>
  );
};

export default Description;
