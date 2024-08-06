import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';

import {fetchData} from "./../../../src/api/useApi"
import {ReadMore} from "./ReadMore"
import {Recommendations} from "./Recommendations"

import playButton from "./../../assets/images/playbtn.png"
import star from "./../../assets/images/rating.svg"
import clock from "./../../assets/images/clock.svg"

const DetailsPage = () => {
    const defaultMovieDetails = {
        backdrop_path: null,
        runtime: 'N/A',
        vote_average: 'N/A',
        genres : [
            {
                id: "N/A",
                name: "N/A"
            }
        ],
        original_title: 'Unknown Title',
        release_date: 'N/A',
        overview: 'N/A'
    };

    const [movieDetails, setMovieDetails] = useState(defaultMovieDetails)
    const {id} : any = useParams();
    
    useEffect (() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchData(`movie/${id}`)
                setMovieDetails(data)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getMovieDetails()
    }, [id])

    const formatDate = (date : string) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const [year, month, day] = date.split('-');
        const monthName = months[parseInt(month, 10) - 1];

        return `${monthName} ${parseInt(day, 10)}, ${year}`;
    }

    return(
        <>
        <div className="banner" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`
        }}>
            <img className="playbtn" src={playButton} ></img>
        </div>
        <div className="movie-details">
            <section className="title">
                {movieDetails.original_title}
            </section>
            <section className="general-info">
                <span className="duration"><img src={clock} alt="duration"></img>{movieDetails.runtime} minutes</span>
                <span className="rate"><img src={star} alt="rating"></img>{parseFloat(movieDetails.vote_average).toFixed(1)} (IMDb)</span>
            </section>
            <section className="release-info">
                <div className="release">
                    <span className="col-title">
                        Release date
                    </span>
                    <span className="date">
                        {formatDate(movieDetails.release_date)}
                    </span>
                </div>
                <div className="genres">
                    <span className="col-title">
                        Genre
                    </span>
                    <span className="genres-list">
                    {movieDetails.genres.map((genre) => 
                    <span className="genre" key={genre.id}>
                        {genre.name}
                    </span>)}
                    </span>
                </div>
            </section>
            <section className="synopsis">
                <div className="section-title">
                    Synopsis
                </div>
                <ReadMore>{movieDetails.overview}</ReadMore>
            </section>
        </div>

        <section className="related">
            <div className="section-title">
                Related Movies
            </div>
            <Recommendations id={id} />
        </section>
        </>
    )
}

export default DetailsPage;
