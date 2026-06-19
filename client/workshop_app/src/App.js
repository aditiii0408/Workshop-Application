import Hero from "./Hero";
import WorkshopDetails from "./WorkshopDetails";
import LearningOutcomes from "./LearningOutcomes";
import FAQ from "./FAQ";
import RegistrationForm from "./RegistrationForm";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
    </>
  );
}

export default App;
