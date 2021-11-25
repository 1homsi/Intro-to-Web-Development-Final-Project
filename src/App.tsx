import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import FourOFourScreen from "./views/404Screen";
import Footer from "./components/Footer/Footer";

// Screen Imports
import AboutScreen from "./views/AboutScreen";
import HomeScreen from "./views/HomeScreen";
import ComingSoon from "./views/ComingSoon";
import CovidT from "./views/Covid-19 tracker/covidtracker"
import CryptoT from "./views/CryptoTracker/CryptoT"
import liveevent from "./views/LiveEvent/liveevent";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <main>
          <Switch>
            <Route path="/about" component={AboutScreen} exact></Route>
            <Route path="/comingsoon" component={ComingSoon}></Route>
            <Route path="/ctracker" component={CovidT} ></Route>
            <Route path="/Cryptot" component={CryptoT}></Route>
            <Route path="/liveE" component={liveevent}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route component={FourOFourScreen} exact></Route>
          </Switch>
        </main>
        <Footer></Footer>
        <br></br>
      </div>
    </BrowserRouter>
  );
}