import { BrowserRouter } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <SplashPage />
    </BrowserRouter>
  );
};

export default App;
