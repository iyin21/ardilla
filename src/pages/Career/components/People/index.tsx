import styles from "./index.module.scss";
import People1 from "../../assets/images/people1.png"
import People2 from "../../assets/images/people2.png"
import People3 from "../../assets/images/people3.png"

const People=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
            <img src={People1} alt="" className={styles.people1}/>
            <img src={People2} alt="" className={styles.people2}/>
            <img src={People3} alt="" className={styles.people3}/>
            </div>
            
           
        </div>
    )
}

export default People;