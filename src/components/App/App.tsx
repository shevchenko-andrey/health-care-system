import Competence from "../Competence/Competence";
import DeliveryTeam from "../DeliveryTeam/DeliveryTeam";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Organizations } from "../Organizations";
import { Solution } from "../Solution";
import { StopRacism } from "../StopRacism";

export const App = () => {
  return (
    <>
      <Header />

      <Hero />

      <Organizations />

      <StopRacism />

      <Solution />

      <Competence />

      <DeliveryTeam />

      {/* <Demo /> */}

      <Footer />
    </>
  );
};
