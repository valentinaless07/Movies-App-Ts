import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "./components/Carousel"
import "./App.css";

function App() {

  const [movies, setMovies] = useState<Array<object>>([])

  useEffect( () => {
    const getMovies = async () => {
      // const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      // setMovies(data.results)
      // localStorage.setItem("popularMovies", JSON.stringify(data.results));
      
      let res = JSON.parse(localStorage.getItem('popularMovies') || '[{}]')

      setMovies(res || [])

    }
    getMovies()
    
  }, [])

  

  return (
    <div className="App">
      <Carousel/>
     
    </div>
  )
}

export default App
