import { Movie } from "../types"
import styles from "./styles/Movies.module.css"
import {useNavigate} from "react-router-dom"
import defaultImage from "../../assets/default_image.jpg"

type MoviesArgs = {
  movies: Array<Movie>,
  title: string,
  query: any  
}

const Movies = (args: MoviesArgs) => {
  
  const navigate = useNavigate()

  const toDetail = (id: any) => {
    navigate(`/movie/${id}`)
  }

  return (
    <>
    {args.title === "trendings" && <h2 className={styles.h2}>Trendings &#128293;</h2>}
    {args.title === "latest" && <h2 className={styles.h2}>Latest &#127916;</h2>}
    {args.title === "top" && <h2 className={styles.h2}>Top rated  &#128285;</h2>}
    {args.title === "search" && <h2 className={styles.h2}>Results for: "{args.query}"</h2>}
    
    
    
    <div className={styles.movies}>
      
      {
        args.movies.map((movie:Movie) => <div key={movie.id}>
          <div className={styles.movie_img}>
          <img onClick={() => toDetail(movie.id)} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImage}/>
          {
            movie.release_date &&
          <div className={styles.year}>
            {movie.release_date?.slice(0,4)}
          </div>  
          }
          </div>  
          <p onClick={() => toDetail(movie.id)}>{movie.title}</p>
        </div>)
      }
      </div>
    </>
  )
}

export default Movies