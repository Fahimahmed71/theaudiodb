import React from "react";

const ArtiestData = (props) => {
  const { strArtist, strArtistBanner, strBiographyEN, strCountry } =
    props.artiestData;

  console.log(props);

  return (
    <div>
      <h1 className="text-white font-semibold text-4xl underline">
        {strArtist}
      </h1>
      <h1 className="text-white mt-3">{strCountry}</h1>

      <img className="block mx-auto mt-5" src={strArtistBanner} alt="" />

      <h1 className="text-white mt-4">{strBiographyEN}</h1>
    </div>
  );
};

export default ArtiestData;
