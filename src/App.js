import "./App.css";
import TopNav from "./Components/Nav/TopNav";
import Nav from "./Components/Nav/Nav";
import MainImage from "./Components/Main/MainImage";
import Slider from "./Components/Main/Slider";
import Paragraph from "./Components/Main/Paragraph";
import SubImage from "./Components/Main/SubImage";
import BottomLogoArea from "./Components/Main/BottomLogoArea";
import ContactAndQuickLinks from "./Components/Main/ContactAndQuickLinks";
import Footer from "./Components/Main/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Nav />
      <MainImage />
      <Slider />
      <Paragraph />
      <SubImage />
      <BottomLogoArea />
      <ContactAndQuickLinks />
      <Footer />
    </div>
  );
}

export default App;
