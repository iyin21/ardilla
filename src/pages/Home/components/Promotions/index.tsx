import styles from "./index.module.scss";
import Frame from "../../assets/images/Frame.png";
import Zikoko from "../../assets/icons/zikoko.svg";
import TechCrunchLogo from "../../assets/icons/techCrunchLogo.svg";
import TheGuardian from "../../assets/icons/theGuardian.svg";

const Promotions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo_wrapper}>
                <img src={Zikoko} alt="Zikoko" />
                <img src={TechCrunchLogo} alt="TechCrunch" />
                <img src={TheGuardian} alt="The Guardian" />
                <p>Press reviews</p>
            </div>
            <div className={styles.wrapper}>
                <h4>Also Available on the Web</h4>
                <p>
                    Increase your bread & butter on the app or on the web.The Ardilla app services
                    are also available on the web.
                </p>
                <img src={Frame} alt="" />
            </div>
        </div>
    );
};
export default Promotions;
