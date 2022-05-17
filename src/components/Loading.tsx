import styles from "./styles/Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.lds_container}>
    <div className={styles.lds_ring}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading