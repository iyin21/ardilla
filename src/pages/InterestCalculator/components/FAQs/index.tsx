import styles from "./index.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

const FAQs = () => {
    const questions = [
        "What are your interest rates?",
        "What happens to my interest when i switch to Halal?",
        "What is the minimum interest rate I am entitled to?",
        "What is Ardilla",
        "What is Ardilla",
    ];
    return (
        <div className={styles.container} id="faqs" >
            <h4>Questions We Have been Asked</h4>
            {questions.map((item, index) => (
                <div key={index} className={styles.questionContainer}>
                    <p>{item}</p>
                    <AiOutlinePlus color="#3D0072" />
                </div>
            ))}
        </div>
    );
};

export default FAQs;
