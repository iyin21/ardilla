import styles from "./index.module.scss";
import Plan from "../../assets/plan.png";
import Interest from "../../assets/interest.png";
import Target from "../../assets/target.png";

const HowItWorks=()=>{
    
    return(
        <div className={styles.container}>
            <h3>How It Works</h3>  
            <div className={styles.image_wrapper}>
                <img src={Plan} alt=""/>
                <img src={Target} alt=""/>
                <img src={Interest} alt=""/>
            </div>
            
           
        </div>
    )
}

export default HowItWorks;