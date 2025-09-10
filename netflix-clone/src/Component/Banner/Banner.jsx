import  { useState, useEffect } from 'react'
import axios from '../../Utils/Axios'
import Requastes from '../../Utils/Requastes'
import './banner.css'


const Banner = () => {

    const [Movie, setMovie] = useState({})

    useEffect(() => {
    ( async () => {
        try {
          const request = await axios.get(Requastes.fetchNetflixOriginals);
        //   COME BASE URL FROM AXIOS AND COMBINE WITH LINK OF NETFLIX ORGINAL(CONCATNATE THEM)
        console.log(request)

          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]);
          
        } catch (error) {
          console.log("error", error);
        }
      })()

      
    }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


  return (
    <>
      <div
        className="banner-div"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${Movie.backdrop_path})`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {Movie?.title || Movie?.name || Movie?.original_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button play">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(Movie?.overview, 150)}
          </h1>
        </div>
        
        <div className="banner_fadeBottom" />

      </div>
    </>
  );
}

export default Banner