import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const SplashPage = () => {
  return (
    <div className="bg-white transition duration-300 ease-in-out dark:bg-black">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default SplashPage;
