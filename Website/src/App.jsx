import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/Navbar";
import LandingPage from "../components/LandingPage/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <LandingPage />
    </>
  );
}

export default App;
