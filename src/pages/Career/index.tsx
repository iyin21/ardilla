import NavBar from "../../components/NavBar";
import HeroSection from "./components/HeroSection";
import styles from "./index.module.scss";
import People from "./components/People";
import Footer from "../../components/Footer";

const Career = () => {
    return (
        <div className={styles._}>
            <header>
                <NavBar activeLinkStyle={styles.activeLink} variant="light" />
                <HeroSection />
            </header>
            <People />
            <Footer />
        </div>
    );
};

export default Career;
