import styles from "./index.module.scss";
import Frame1 from "../../assets/images/frame1.png";
import Frame2 from "../../assets/images/frame2.png";
import Frame3 from "../../assets/images/frame3.png";

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <h2>
                Don’t Take Our <span>Word</span> For It
            </h2>
            <p>Listen to testimonials from Ardilla users building wealth</p>
            <div className={styles.imageWrapper}>
                <img src={Frame1} alt="" className={styles.img1} />
                <img src={Frame3} alt="" className={styles.img2} />
                <img src={Frame2} alt="" className={styles.img2} />
            </div>
        </div>
    );
};
export default Testimonials;
