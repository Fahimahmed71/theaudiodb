import React, { useEffect, useState } from "react";
import Bts from "./Audio/Bts/Bts";
import Chainsmokers from "./Audio/Chainsmokers/Chainsmokers";
import Coldplay from "./Audio/Coldplay/Coldplay";
import TaylorSwift from "./Audio/TaylorSwift/TaylorSwift";
import Yoasobi from "./Audio/Yoasobi/Yoasobi";
import "./Home.css";

const Home = () => {
  const [taylorSwift, setSwift] = useState([""]);
  const [chainsmokers, setChainsmokers] = useState([""]);
  const [coldplay, setColdplay] = useState([""]);
  const [bts, setBts] = useState([""]);
  const [yoasobi, setYoasobi] = useState([""]);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=111352")
      .then((req) => req.json())

      .then((data) => setSwift(data.album));
  }, []);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=128263")
      .then((req) => req.json())

      .then((data) => setChainsmokers(data.album));
  }, []);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=111239")
      .then((req) => req.json())

      .then((data) => setColdplay(data.album));
  }, []);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=145459")
      .then((req) => req.json())

      .then((data) => setBts(data.album));
  }, []);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/2/album.php?i=165789")
      .then((req) => req.json())

      .then((data) => setYoasobi(data.album));
  }, []);

  return (
    <div className="home">
      <h1 className="text-white text-3xl font-medium">
        {taylorSwift[0].strArtist}
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {taylorSwift.map((taylorSwift) => (
          <TaylorSwift
            taylorSwift={taylorSwift}
            key={taylorSwift.idAlbum}
          ></TaylorSwift>
        ))}
      </div>
      <h1 className="text-white text-3xl font-medium mt-5">
        {chainsmokers[0].strArtist}
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {chainsmokers.map((chainsmokers) => (
          <Chainsmokers
            chainsmokers={chainsmokers}
            key={chainsmokers.idAlbum}
          ></Chainsmokers>
        ))}
      </div>

      <h1 className="text-white text-3xl font-medium mt-5">
        {coldplay[0].strArtist}
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {coldplay.map((coldplay) => (
          <Coldplay coldplay={coldplay} key={coldplay.idAlbum}></Coldplay>
        ))}
      </div>

      <h1 className="text-white text-3xl font-medium mt-5">
        {bts[0].strArtist}
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {bts.map((bts) => (
          <Bts bts={bts} key={bts.idAlbum}></Bts>
        ))}
      </div>

      <h1 className="text-white text-3xl font-medium mt-5">
        {yoasobi[0].strArtist}
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-5">
        {yoasobi.map((yoasobi) => (
          <Yoasobi yoasobi={yoasobi} key={yoasobi.idAlbum}></Yoasobi>
        ))}
      </div>
    </div>
  );
};

export default Home;
