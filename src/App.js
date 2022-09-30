import logo from "./logo.svg";
import "./App.css";
// import Layout from "./Component/Layout";
import Events from "./Pages/EventPage";
import Landing from "./Pages/LandingPage";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Layout> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </Router>
      {/* <Landing /> */}
      {/* </Layout> */}
    </div>
  );
}

export default App;
