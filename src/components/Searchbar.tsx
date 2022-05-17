import styles from "./styles/Searchbar.module.css"
import Search from "../../assets/Search.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Searchbar = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState("")
  
  const handleClick = (e:any) => {
    e.preventDefault()
    if(input.length > 0){
      navigate(`/search/${input}`)
    }
  }

  return (
    <div className={styles.search_container}>
      
        <form onSubmit={handleClick}>
        <input type="text" placeholder="Buscar películas..." value={input} onChange={e => setInput(e.target.value)}/>
        
        <img src={Search} alt="search" onClick={handleClick}/>
        

        </form>
      
    </div>
  )
}

export default Searchbar