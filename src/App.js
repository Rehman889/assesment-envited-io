import logo from "./logo.svg";
import "./App.css";
import Landing from "./Pages/LandingPage";
import Events from "./Pages/EventPage";
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./Component/Routes/renderRoutes"

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <BrowserRouter>
          <Landing></Landing>
          {/* MAIN COMPONENT RENDERING */}
          <div className="outlet_wraper">
            <RenderRoutes></RenderRoutes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
