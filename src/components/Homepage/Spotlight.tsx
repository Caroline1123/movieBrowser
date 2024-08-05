import {useState, useEffect} from "react"

import playButton from "./../../assets/images/playbtn.png"
import { fetchData } from "./../../api/useApi.ts"

const Spotlight = () => {
    const [popularMovie, setPopularMovie] = useState<any>(null)

    useEffect(() => {
        const getPopularMovie = async () => {
            try {
                const data = await fetchData("movie/popular?language=en-US&page=1")
                setPopularMovie(data.results[0]|| null);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getPopularMovie();
    }, [])

    return(
    <div className="spotlight" style={{
        backgroundImage: popularMovie?.backdrop_path 
            ? `url(https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path})` 
            : 'url(https://wallpapercave.com/wp/wp5620606.jpg)'
    }}>
        <div className="trailer-launch">
            <div className="play-button">
                <img src={playButton}/>
            </div>
            <div className="info">
                <div className="text">
                    Movie Spotlight
                </div>
                <div className="title">
                    {popularMovie?.original_title || 'Loading...'}
                </div>
            </div>
        </div>
    </div>
    );
}

export {Spotlight}