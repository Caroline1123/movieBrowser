import {useState, useEffect} from "react"

import { useNavigate } from 'react-router-dom';

import star from "./../../assets/images/rating.svg"
import { fetchData } from "./../../api/useApi.ts"


const Trending = () => {
    const [popularMovies, setPopularMovies] = useState<any>(null)
    const navigate = useNavigate()

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
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = parseInt(e.currentTarget.id);
        navigate(`/movie/${id}`);
    }

    return(
        <div className= "trending">
            <h2 className="main-title">Trending</h2>
            <div className="carousel">
                { !popularMovies ? 'Loading...' : popularMovies.map((movie: any)=> 
                <div className="movie-card" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}  key={movie.id} id={movie.id} onClick={handleClick}>
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