import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "./components/Carousel"
import "./App.css";
import Movies from './components/Movies';
import { Movie } from './types';

function App() {


  const [popularMovies, setPopularMovies] = useState<Array<Movie>>([])
  const [latestMovies, setLatestMovies] = useState<Array<Movie>>([])
  const [topMovies, setTopMovies] = useState<Array<Movie>>([])

  useEffect( () => {

    // Petición de las películas más populares actualmente

    const getPopular = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      setPopularMovies(data.results)
      

    }

    const getLatest = async () => {
      const {data} = await axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`)
      setLatestMovies(data.results)
    }

    const getTopRated = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      setTopMovies(data.results)
    }



    getPopular()
    getLatest()
    getTopRated()
    
  }, [])

 

  

  return (
    <div className="App">
      
      <Carousel/>
      <Movies movies={popularMovies} title={"trendings"}/>
      <Movies movies={latestMovies} title={"latest"}/>
      <Movies movies={topMovies} title={"top"}/>

     
    </div>
  )
 
}

export default App

