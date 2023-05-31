import NavBar from "../../components/NavBar";
import HeroSection from "./components/HeroSection"
import styles from "./index.module.scss";
import HowItWorks from "./components/HowItWorks"
import FAQs from "./components/FAQs"
import Footer from "../../components/Footer"

const InterestCalculator=()=>{
    return(
        <div className={styles._}>
            <header>
                <NavBar activeLinkStyle={styles.activeLink} variant="light"/>
                <HeroSection/>          
            </header>
            <HowItWorks/>
            <FAQs/>
            <Footer/>
        </div>
    )
}

export default InterestCalculator;