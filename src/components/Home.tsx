import Movies from './Movies';
import Carousel from "./Carousel"
import { Movie } from '../types';


type HomeArgs = {
    popularMovies: Array<Movie>,
    latestMovies: Array<Movie>,
    topMovies: Array<Movie>,
  }

const Home = (args: HomeArgs) => {
    
  return (
    <div>
         <Carousel/>
        <Movies movies={args.popularMovies} title={"trendings"}/>
        <Movies movies={args.latestMovies} title={"latest"}/>
        <Movies movies={args.topMovies} title={"top"}/>
    </div>
  )
}

export default Home