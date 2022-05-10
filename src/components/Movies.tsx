import { Movie } from "../types"
import styles from "./styles/Movies.module.css"


type MoviesArgs = {
  movies: Array<Movie>,
  title: string
}

const Movies = (args: MoviesArgs) => {
  
  

  return (
    <>
    {args.title === "trendings" && <h2 className={styles.h2}>Trendings &#128293;</h2>}
    {args.title === "latest" && <h2 className={styles.h2}>Latest &#127916;</h2>}
    {args.title === "top" && <h2 className={styles.h2}>Top rated  &#128285;</h2>}
    
    
    <div className={styles.movies}>
      
      {
        args.movies.map((movie:Movie) => <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
          <p>{movie.title}</p>
          <div className={styles.year}>
            2022
          </div>  
        </div>)
      }
      </div>
    </>
  )
}

export default Movies