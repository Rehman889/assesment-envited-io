import logo from "./logo.svg";
import "./App.css";
import Layout from "./Component/Layout";
import Events from "./Pages/EventPage";
import Landing from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing />
      </Layout>
      <Events />
    </div>
  );
}

export default App;
