import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Download from "../Download";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const productsLinks = [
        { title: "Savings", route: "products" },
        { title: "Dilla", route: "products" },
        { title: "Financial Coach", route: "products" },
        { title: "Halal", route: "products" },
        { title: "Budgetting", route: "products", suffix: true },
        { title: "Investments", route: "products", suffix: true },
        { title: "Insurance", route: "products", suffix: true },
    ];
    const companyLinks = [
        { title: "About us", route: "/#" },
        { title: "Careers", route: "/Careers" },
        { title: "FAQS", route: "faqs" },
        { title: "Press", route: "/#" },
    ];

    const transparencyLinks = [
        { title: "Terms & conditions", route: "/#" },
        { title: "Information security policy", route: "/#" },
        { title: "Privacy policy", route: "/#" },
        { title: "Interest Tool", route: "/#" },
    ];

    function scrollToFAQ() {
        if (location.pathname === "/interest-calculator") {
            let element = document.getElementById("faqs");
            if (element) {
                let elementOffset = element.getBoundingClientRect().top;
                window.scrollBy(0, elementOffset);
            }
        } else {
            navigate("/interest-calculator");
            setTimeout(function () {
                let element = document.getElementById("faqs");
                if (element) {
                    let elementOffset = element.getBoundingClientRect().top;
                    window.scrollBy(0, elementOffset);
                }
            }, 800);
        }
    }
    function scrollToProducts() {
        if (location.pathname === "/home") {
            let element = document.getElementById("products");
            if (element) {
                let elementOffset = element.getBoundingClientRect().top;
                window.scrollBy(0, elementOffset);
            }
        } else {
            navigate("/");
            setTimeout(function () {
                let element = document.getElementById("products");
                if (element) {
                    let elementOffset = element.getBoundingClientRect().top;
                    window.scrollBy(0, elementOffset);
                }
            }, 800);
        }
    }
    return (
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_section}>
                    <ul>
                        <li className={styles.link_header}>Products</li>
                        {productsLinks.map((item, index) => (
                            <li key={index} className={styles.links}>
                                <Scroll onClick={scrollToProducts} to={item.route} smooth={true}>
                                        {item.title}
                                    </Scroll>
                                {item.suffix && <p className={styles.comming_soon}>Coming Soon</p>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.footer_section}>
                    <ul>
                        <li className={styles.link_header}>Company</li>
                        {companyLinks.map((item, index) =>
                            item.route.includes("/") ? (
                                <li key={index} className={styles.links}>
                                    <Link to={item.route}>{item.title}</Link>
                                </li>
                            ) : (
                                <li className={styles.links} key={index}>
                                    <Scroll onClick={scrollToFAQ} to={item.route} smooth={true}>
                                        {item.title}
                                    </Scroll>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
                <div className={styles.footer_section}>
                    <ul>
                        <li className={styles.link_header}>Transparency</li>
                        {transparencyLinks.map((item, index) =>
                            item.route.includes("/") ? (
                                <li key={index} className={styles.links}>
                                    <Link to={item.route}>{item.title}</Link>
                                </li>
                            ) : (
                                <li className={styles.links} key={index}>
                                    <Scroll
                                        onClick={() => window.location.replace(`/#${item.route}`)}
                                        to={item.route}
                                        smooth={true}
                                    >
                                        {item.title}
                                    </Scroll>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
                <div className={styles.footer_section}>
                    <ul>
                        <li className={styles.link_header}>Developer</li>

                        <li className={styles.links}>
                            <Link to="/#">Connect API</Link>
                            <p className={styles.comming_soon}>Coming Soon</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_section}>
                    <ul>
                        <li className={styles.link_header}>Address</li>

                        <li>33B, Ogundana street, Allen, Ikeja.</li>
                        <li className={`${styles.contact_link_header} `}>Contact</li>
                        <li>support@ardilla.africa</li>
                        <li>(234)801 000 1234</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className={styles.footer_bottom}>
                <p>© 2023 Ardilla. All right reserved</p>
                <div className={styles.footer_social_links_wrapper}>
                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
            <p>
                Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative
                Society, LSC 18245, We provide Savings and Fixed deposit services to our users
            </p>
            <div className={styles.downloadContainer}>
                <Download />
            </div>
        </footer>
    );
};
export default Footer;
