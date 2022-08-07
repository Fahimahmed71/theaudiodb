import React, { useEffect, useState } from "react";
import "./ArtiestInfo.css";
import { useParams } from "react-router-dom";
import ArtiestData from "./ArtiestData/ArtiestData";

const ArtiestInfo = () => {
  const { idArtist } = useParams();
  const [artiest, setArtiest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${idArtist}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArtiest(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idArtist]);

  if (loading) {
    return (
      <p className="text-center font-semibold text-8xl mt-10 text-red-500">
        Data is loading...
        <br />
        🐉
      </p>
    );
  }

  const artiestData = artiest.artists;

  if (artiestData === undefined) {
    return [];
  }

  return (
    <div className="artiestInfo">
      {artiestData.map((artiestData) => (
        <ArtiestData
          key={artiestData.idLabel}
          artiestData={artiestData}
        ></ArtiestData>
      ))}
    </div>
  );
};

export default ArtiestInfo;
