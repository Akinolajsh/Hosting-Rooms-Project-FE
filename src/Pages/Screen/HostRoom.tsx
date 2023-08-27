import Footer from "../../Components/static/Footer";
import EmmaFifth from "../../EmmaProps/EmmaFifth";
import EmmaFirst from "../../EmmaProps/EmmaFirst";
import EmmaFourth from "../../EmmaProps/EmmaFourth";
import Header from "../../EmmaProps/EmmaHeader";
import EmmaHero from "../../EmmaProps/EmmaHero";
import EmmaSecond from "../../EmmaProps/EmmaSecond";
import EmmaSixth from "../../EmmaProps/EmmaSixth";
import EmmaThird from "../../EmmaProps/EmmaThird";

const HostRoom = () => {
  return (
    <div>
      <Header />
      <EmmaHero />
      <EmmaFirst />
      <EmmaSecond />
      <EmmaThird />
      <EmmaFourth />
      <EmmaFifth />
      <EmmaSixth />
      <Footer/>
    </div>
  );
};

export default HostRoom;
