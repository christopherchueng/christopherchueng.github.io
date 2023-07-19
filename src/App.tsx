import { BrowserRouter, Route } from "react-router-dom";
import Content from "./components/SplashPage/Content";
import Header from "./components/SplashPage/Header";
import Footer from "./components/SplashPage/Footer";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Route path='/'>
      <Header />
      <Content />
      <Footer />
    </Route>
  </BrowserRouter>
);

export default App;
