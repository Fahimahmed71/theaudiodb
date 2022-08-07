import React from "react";
import { useNavigate } from "react-router-dom";
import "./Chainsmokers.css";

const Chainsmokers = (props) => {
  const { strAlbumThumb, strAlbum, intYearReleased, idArtist } =
    props.chainsmokers;

  const navigate = useNavigate();
  const artistDetails = () => {
    const path = `/artiest/${idArtist}`;
    navigate(path);
  };

  return (
    <div
      onClick={artistDetails}
      className="audio bg-neutral-800 hover:bg-neutral-700 hover:animate-pulse cursor-pointer py-5 px-4 block max-w-xs rounded-lg "
    >
      <img src={strAlbumThumb} alt="" />
      <h1 className="text-center text-white text-xl mt-2 font-semibold ">
        {strAlbum}
      </h1>
      <h1 className="text-center text-neutral-400 text-xl">
        {intYearReleased}
      </h1>
    </div>
  );
};

export default Chainsmokers;
