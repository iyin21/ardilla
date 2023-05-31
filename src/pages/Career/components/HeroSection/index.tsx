import styles from "./index.module.scss";


const HeroSection=()=>{
    return(
        <div className={styles.heroSection}>
            {/* <div> */}
            <div className={styles.amberHeading}>
                <h2 >Join us in shaping..</h2>
            </div>
            <div className={styles.redHeading}>
            <h2 >The Future..</h2>
            </div>
            <div className={styles.tealHeading}>
            <h2 >Of Finance..</h2> 
            </div>
            {/* </div> */}
            
        </div>
    )
}

export default HeroSection;