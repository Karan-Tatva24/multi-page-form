import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Previwe from "./components/Previwe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/preview" element={<Previwe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
