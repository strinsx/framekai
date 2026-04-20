import Homepage from "./Homepage";
import IFRAME from "./Iframe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/watch" element={<IFRAME />}></Route>
    </Routes>
  );
}

export default App;