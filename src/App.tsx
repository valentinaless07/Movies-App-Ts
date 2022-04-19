import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [movies, setMovies] = useState<Array<object>>([])

  useEffect( () => {
    const getMovies = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      setMovies(data.results)
    }
    getMovies()
    
  }, [])

  

  return (
    <div className="App">
   
    </div>
  )
}

export default App
