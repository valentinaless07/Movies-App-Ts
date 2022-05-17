import Movies from './Movies';
import Carousel from "./Carousel"
import { Movie } from '../types';
import Searchbar from './Searchbar';


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
        <Movies movies={args.popularMovies} title={"trendings"} query={undefined}/>
        <Movies movies={args.latestMovies} title={"latest"} query={undefined}/>
        <Movies movies={args.topMovies} title={"top"} query={undefined}/>
    </div>
  )
}

export default Home