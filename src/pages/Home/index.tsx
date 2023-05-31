import styles from "./index.module.scss";
import NavBar from "../../components/NavBar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import CallToAction1 from "./components/CallToAction1";
import AccessMore from "./components/AccessMore";
import UnlimitedInvestment from "./components/UnlimitedInvestment";
import Testimonial from "./components/Testimonials";
import Promotions from "./components/Promotions";
import Traction from "./components/Traction";
import Footer from "../../components/Footer";
const Home = () => {
    return (
        <div className={styles._}>
            <header >
                <NavBar activeLinkStyle={styles.activeLink} variant="primary" />
                <HeroSection />
                <Products />
            </header>
            <CallToAction1 />
            <UnlimitedInvestment />
            <AccessMore />
            <Testimonial />
            <Promotions />
            <Traction />
            <Footer />
        </div>
    );
};

export default Home;
