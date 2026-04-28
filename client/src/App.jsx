import Browser from "./Browse";
import Homepage from "./Homepage";
import IFRAME from "./Iframe";
import WatchLater from "./WatchLater";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/watch" element={<IFRAME />}></Route>
      <Route path="/browser" element={<Browser></Browser>}></Route>
      <Route path="/watchlater" element={<WatchLater></WatchLater>}></Route>



    </Routes>

    
  );
}

export default App;