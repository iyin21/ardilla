import styles from "./index.module.scss";
import Button from "../../../../components/Button"
import Phone from "../../assets/images/phone.png"

const HeroSection=()=>{
    return(
        <div className={styles.heroSection}>
            <h1>Your Access To More</h1>
            <p>Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>
            <div className={styles.btnContainer}>
            <Button variant="light" className={styles.btn}>Get Started</Button>
            </div>
            
            <img src={Phone} alt=""/>
        </div>
    )
}

export default HeroSection;