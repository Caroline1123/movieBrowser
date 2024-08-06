import {useEffect, useState} from "react"
import {fetchData} from "./../../api/useApi"
import { useNavigate } from 'react-router-dom';



const Recommendations = ({ id }: any) => {
    const [recommendations, setRecommendations] = useState<any[]>([]);
    const navigate = useNavigate()

    useEffect(()=> {
        const getRecommendations = async() => {
            try {
                const results = await fetchData(`movie/${id}/recommendations`)
                setRecommendations(results.results.slice(0,10))
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getRecommendations();
    }, [id])

    const handleClick = (id: any) => {
        navigate(`/movie/${id}`)
    }

    console.log(recommendations);

    return (
        <section className="recommendations">
                {!recommendations.length ? 'Loading...' : recommendations.map((recommendation) => (
                    <div key={recommendation.id} className="movie-card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${recommendation.poster_path})` }} id={recommendation.id} onClick={() => handleClick(recommendation.id)}>
                        <div className="title">{recommendation.title}</div>
                    </div>
                ))}
        </section>
    );
}


export {Recommendations}