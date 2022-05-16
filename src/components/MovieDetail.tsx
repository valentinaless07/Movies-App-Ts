import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import styles from "./styles/MovieDetail.module.css"
import StarFill from "../../assets/StarFill.svg"
import HomeIcon from "../../assets/Home.svg"



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

      <p>{detail.tagline}</p>

      <img src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} alt={detail.title} />

      <p className={styles.overview}>{detail.overview}</p>
      
    </div>
    : 
    <div className={styles.lds_container}>
    <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
    </div>
}
    </>
  )
}

export default Detail