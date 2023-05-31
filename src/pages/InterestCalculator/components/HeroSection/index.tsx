import styles from "./index.module.scss";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../../../../components/Button";
import Graph from "../../assets/graph.png";

const HeroSection = () => {
    const [duration, setDuration] = useState("");
    const [selected, setSelected] = useState("monthly");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // console.log('duration', duration);
        // console.log("How often are you saving", selected)
        // console.log('amount', amount);,
        alert(`${duration}, ${selected}, ${amount} Form submitted succesfully`);
    };
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h4>Calculate Your Interests</h4>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>How often are you saving?</label>
                    <select
                        required
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                            setSelected(e.target.value)
                        }
                    >
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                    <label>How much are you saving?</label>

                    <input
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                        type="text"
                    />

                    <label>How long are you saving for? (In months)</label>

                    <input
                        required
                        type="number"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDuration(e.target.value)}
                    />

                    <Button variant="primary" type="submit" className={styles.btn}>
                        Submit
                    </Button>
                </form>
            </div>
            <div className={styles.analyticsContainer}>
                <p>Total Balance</p>
                <h6>N6,600 </h6>
                <p className={styles.subtext}>
                    Saving ₦2,000 monthly for 3 months will result in a balance of{" "}
                    <span>₦6,600</span>{" "}
                </p>
                <p className={styles.subtext}>Interest</p>
                <h6>
                    N600 <span>( 2%)</span>{" "}
                </h6>
                <p className={styles.subtext}>Total Savings</p>
                <h6>
                    N,6000 <span>( 2%)</span>{" "}
                </h6>
                <img src={Graph} alt="" />
                <Button variant="primary" className={styles.btn}>
                    Start Saving Now
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
