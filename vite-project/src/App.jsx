// import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from "./Componet/Header";
import Home from "./Componet/Home";
import Fitness from "./Componet/Fitness";
import Bestoffer from "./Componet/Bestoffer";
import Services from "./Componet/Services";
import Bestplan from "./Componet/Bestplan";
import Testmonial from "./Componet/Testmonial";
import Footer from "./Componet/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />

      <Fitness />
      <Bestoffer />
      <Services />
      <Bestplan />
      <Testmonial/>
      <Footer/>
    </>
  );
}

export default App;
