import Movies from './Movies';
import Carousel from "./Carousel"
import { Movie } from '../types';
import Searchbar from './Searchbar';
import Loading from './Loading';


type HomeArgs = {
    popularMovies: Array<Movie>,
    latestMovies: Array<Movie>,
    topMovies: Array<Movie>,
  }

const Home = (args: HomeArgs) => {
    
  return (
    <div>
         <Carousel/>
         <Searchbar/>
         {
           args.popularMovies.length > 0 ?
           <>
           <Movies movies={args.popularMovies} title={"trendings"} query={undefined}/>
           <Movies movies={args.latestMovies} title={"latest"} query={undefined}/>
           <Movies movies={args.topMovies} title={"top"} query={undefined}/>
           </>
          : <Loading/>
         }
    </div>
  )
}

export default Home