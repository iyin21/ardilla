import styles from "./index.module.scss";
import Button from "../../../../components/Button";
import CalculateInterest from "../../assets/images/calculateInterest.jpg";
import { useNavigate } from "react-router-dom";

const CallToAction1 = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.cta_container}>
            <div>
                <h2 className={styles.purpleTitle}>
                    We’re Keen On <span className={styles.pinkTitle}>Transparency</span>
                </h2>
                <p> Calculate your interests everytime you save on our platform</p>
                <Button
                    variant="primary"
                    className={styles.btn}
                    onClick={() => navigate("/interest-calculator")}
                >
                    Get Started
                </Button>
            </div>
            <img src={CalculateInterest} alt="" />
        </div>
    );
};

export default CallToAction1;
