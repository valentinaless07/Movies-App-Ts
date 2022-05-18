import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import Movies from './Movies'
import Searchbar from './Searchbar'
import HomeIcon from "../../assets/Home.svg"
import styles from "./styles/SearchMovies.module.css"

const SearchMovies = () => {

  const params = useParams()
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean> (true)
  const [error, setError] = useState<string>("")
  const [movies, setMovies] = useState([])

  useEffect(() => {

    if(!params.query || params.query.length === 0) navigate("/")
    
    const getMovie = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${params.query}`)
      setMovies(data.results)
      setLoading(false)
      

    }
    getMovie()
  
  }, [params.query])
  

  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.icon_container}> 

        <img onClick={() => navigate("/")} src={HomeIcon} alt="home" />
        </div>
        <div className={styles.searchbar_container}>
        <Searchbar/>
        </div>
      </div>
      {
        loading ?
        <Loading/>
        : 
        <>
        {
          movies ?
          <Movies movies={movies} title={`search`} query={params.query}/>
          :
          <div>

          </div>
        }
        </>
      }
    </div>
  )
}

export default SearchMovies