import "./App.css";
import LandingPage from "./Routes/Route";
import { useEffect } from "react";


function App() {

  const ScrollToTopOnReload = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App;
