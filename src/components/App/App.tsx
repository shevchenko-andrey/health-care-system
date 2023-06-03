import Competence from "../Competence/Competence";
import DeliveryTeam from "../DeliveryTeam/DeliveryTeam";
import { Demo } from "../Demo";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Organizations } from "../Organizations";
import { StopRacism } from "../StopRacism";

export const App = () => {
  return (
    <>
      <Header />

      <Hero />

      <Organizations />

      <StopRacism />

      <Competence />

      <DeliveryTeam />

      <Demo />

      <Footer />
    </>
  );
};
