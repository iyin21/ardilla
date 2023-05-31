import Button from "../Button";
import Phone from "../../assets/images/phone.png";
import styles from "./index.module.scss";

const Download = () => {
    return (
        <div className={styles.container}>
            <div>
                <h4>Download for free Start saving Today</h4>
                <Button variant="light" className={styles.btn}>
                    Download for free
                </Button>
            </div>
            <img src={Phone} alt="" className={styles.btn} />
        </div>
    );
};

export default Download;
