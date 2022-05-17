import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import styles from "./styles/MovieDetail.module.css"
import StarFill from "../../assets/StarFill.svg"
import HomeIcon from "../../assets/Home.svg"
import Loading from "./Loading"
import defaultImage from "../../assets/default_image.jpg"


const Detail = () => {

  const params = useParams()
  const navigate = useNavigate()

  const [detail, setDetail] = useState<any >({})
  const [loading, setLoading] = useState<boolean>(false)

  

  useEffect(() => {
    
    const getDetail = async () => {

      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`)
      
      setDetail(data)

      setLoading(true)

    }
    getDetail()
    
  }, [])

  const insertStars = (n:Number) => {
    const stars = []

    for(let i = 0; i < n ; i++){
      stars.push(<img key={i} src={StarFill}/>)
    }

    return stars
    
  }
  
  

  return (
    <>
    {loading ? 
    <div className={styles.detail_container}>
      <div className={styles.bar}>
        <img onClick={() => navigate("/")} src={HomeIcon} alt="home" />
      </div>
      <div className={styles.stars}>
      {insertStars((Math.round(((Math.round(detail.vote_average)* 10)*5)/100))).map(el => el)}
      </div>

      <h2>{detail.title}</h2>

      <p className={styles.tagline}>{detail.tagline}</p>

      <img src={detail.poster_path ? `https://image.tmdb.org/t/p/w500/${detail.poster_path}` : defaultImage} alt={detail.title} />

      <p className={styles.overview}>{detail.overview}</p>
      
    </div>
    : 
      <Loading/>
}
    </>
  )
}

export default Detail