import React from "react";

const SearchResult = (props) => {
  const { strArtist, strArtistBanner, strBiographyEN, strCountry } =
    props.search;

  return (
    <div>
      <h1 className="text-white mt-5 font-medium text-3xl">{strArtist}</h1>
      <h1 className="text-white mb-5 font-extralight text-base">
        {strCountry}
      </h1>
      <img src={strArtistBanner} alt="" />
      <h1 className="text-white mt-5 font-extralight text-base">
        {strBiographyEN}
      </h1>
    </div>
  );
};

export default SearchResult;
