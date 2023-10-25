import "./App.css";
import Footer from "./components/home/Footer";
import { NavbarSimple } from "./components/home/navBarMenu";
import IndexTravel from "./components/primetravel/IndexTravel";

function App() {
  return (
    <div>
      <NavbarSimple />
      <IndexTravel />
      <Footer />
    </div>
  );
}

export default App;
