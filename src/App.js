import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/MusicContainer/Home/Home";
import Tab from "./components/Tab/Tab";
import Search from "./components/MusicContainer/Search/Search";
import ArtiestInfo from "./components/MusicContainer/Home/ArtiestInfo/ArtiestInfo";

function App() {
  return (
    <div className="App grid">
      <Tab />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="artiest/:idArtist" element={<ArtiestInfo />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
