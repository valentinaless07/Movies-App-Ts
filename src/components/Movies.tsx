import { Movie } from "../types"
import styles from "./styles/Movies.module.css"


type MoviesArgs = {
  movies: Array<Movie>
}

const Movies = (args: MoviesArgs) => {
  
  

  return (
    <>
    <h2 className={styles.h2}>Trendings &#128293;</h2>
    
    <div className={styles.movies}>
      
      {
        args.movies.map((movie:Movie) => <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </div>)
      }
      </div>
    </>
  )
}

export default Movies