import styles from "./index.module.scss";
import Button from "../../../../components/Button";
import Arrow from "../../assets/images/arrow.png";

const UnlimitedInvestment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    Unlimited <span>Investment Opportunities</span>{" "}
                </h2>
                <p>
                    Plan towards your future by investing with ardilla, Grow your money confidently
                    and securely with the available investment oppurtuinities{" "}
                </p>
            </div>
            <Button variant="outline_primary">Invest with ardilla (Coming Soon)</Button>

            <img src={Arrow} alt="" />
        </div>
    );
};
export default UnlimitedInvestment;
