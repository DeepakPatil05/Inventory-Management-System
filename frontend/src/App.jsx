import Navbar1 from "./components/Navbar1.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Process from "./components/Process.jsx";
import "@fontsource/inknut-antiqua";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
      <Hero></Hero>
      <Features></Features>
      <Process></Process>
    </div>
  );
}

export default App;
