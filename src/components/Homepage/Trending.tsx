import {useState, useEffect} from "react"

import star from "./../../assets/images/rating.svg"
import { fetchData } from "./../../api/useApi.ts"


const Trending = () => {
    const [popularMovies, setPopularMovies] = useState<any>(null)

    useEffect(() => {
        const getPopularMovie = async () => {
            try {
                const data = await fetchData("movie/popular?language=en-US&page=1")
                setPopularMovies(data.results.slice(1,6)|| null);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getPopularMovie();
        console.log(popularMovies)
    }, [])

    return(
        <div className= "trending">
            <h2 className="main-title">Trending</h2>
            <div className="carousel">
                { !popularMovies ? 'Loading...' : popularMovies.map((movie: any)=> 
                <div className="movie-card" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`}}  key={movie.id}>
                    <div className="rating">
                        <span className="imdbRate">IMDb</span>
                        <span className="rate"><img src={star} alt="Rating" /><span>{movie.vote_average.toFixed(1)}</span></span>
                    </div>
                    <div className="title">{movie.title}</div>
                </div>
                )}
            </div>
        </div>
    )
}

export {Trending}