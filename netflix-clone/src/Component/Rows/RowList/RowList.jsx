import React from "react";
import Row from '../Row/Row'
import Requastes from "../../../Utils/Requastes";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requastes.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={Requastes.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requastes.fetchTopRated} />
      <Row title="Movies" fetchUrl={Requastes.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requastes.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requastes.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={Requastes.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requastes.fetchDocumentaries} />
      <Row title="Tv Show" fetchUrl={Requastes.fetchTvShow} />
      {/*  */}
    </>
  );
};

export default RowList;
