//React Router Imports
import { Route, Switch, useLocation } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import FourOFourScreen from "./views/404Screen";
import Footer from "./components/Footer/Footer";

// Screen Imports
import AboutScreen from "./views/AboutScreen";
import HomeScreen from "./views/HomeScreen";
import CovidT from "./views/Covid-19 tracker/covidtracker";
import CryptoT from "./views/CryptoTracker/CryptoT";
import Liveevent from "./views/LiveEvent/liveevent";
import MainGame from "./views/Snake Game/GameScreen";

//Framer Motion Imports
import { AnimatePresence, motion } from "framer-motion";

interface LocationState {
  from: {
    pathname: string;
  };
}

export default function App() {
  const location = useLocation<LocationState>();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div className="App">
        <NavBar></NavBar>
        <main>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" exact>
              <motion.div
                initial={{ scaleY: 0, scaleX: 0 }}
                animate={{ scaleY: 1, scaleX: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AboutScreen />
              </motion.div>
            </Route>
            <Route path="/ctracker">
              <CovidT />
            </Route>
            <Route path="/Cryptot">
              <CryptoT />
            </Route>
            <Route path="/liveE">
              <Liveevent />
            </Route>
            <Route path="/" exact>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.7 }}
              >
                <HomeScreen />
              </motion.div>
            </Route>
            <Route path="/game">
              <MainGame></MainGame>
            </Route>
            <Route exact>
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FourOFourScreen />
              </motion.div>
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
        <br></br>
      </div>
    </AnimatePresence>
  );
}
