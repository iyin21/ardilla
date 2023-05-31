import styles from "./index.module.scss";
import CountUp from "react-countup";
import {useState} from "react";
const Traction = () => {
    const [end, setEnd]=useState(false)
    const autoStart = (
        <CountUp start={100} end={1100} delay={2} prefix="₦"
        duration={1} onEnd={()=>setEnd(true)}>
            {({ countUpRef }) => (
                <div>
                    <span ref={countUpRef} />
                </div>
            )}
        </CountUp>
    );
    const countdown = (
        <CountUp start={100} end={0} delay={2} suffix="%"
        duration={1}>
            {({ countUpRef }) => (
                <div>
                    <span ref={countUpRef} />
                </div>
            )}
        </CountUp>
    );
    return (
        <div className={styles.container}>
            <h2>Traction</h2>
            <p>Our products and investments grossed 1.1 billion in 2022</p>
            <div className={styles.traction_container}>
                <div className={styles.investment}>
                    <p>
                        Investment in <span>2022</span>
                    </p>

                    <h2>₦ 100 M</h2>
                </div>

                <div className={styles.risk_management}>
                    <p>
                        Risk <span>Management</span>{" "}
                    </p>
                    <h2>{countdown}Risk</h2>
                </div>
                <div className={styles.investment_paid}>
                    <p>
                        Investment in <span>paid back</span>{" "}
                    </p>
                    <h2>
                        {end === true ? "₦ 1.1 " : autoStart}
                        <span>{end === true ?"B":"M"}</span>
                    </h2>
                    
                </div>
            </div>
        </div>
    );
};
export default Traction;
