import Map from "./Maps/Map";
import "./Home.scss";
import WelcomeTitle from "./WelcomeTitle/WelcomeTitle";
import { POIsProvider } from "../context/POIsContext";

function Home() {
  return (
    <POIsProvider>
      <div className="mainContainer">
        <WelcomeTitle />
        <Map />
      </div>
    </POIsProvider>
  );
}

export default Home;
