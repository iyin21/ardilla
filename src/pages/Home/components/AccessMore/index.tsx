import styles from "./index.module.scss";
import Button from "../../../../components/Button";
import Dib from "../../assets/icons/dibIcon.svg";
import Dreams from "../../assets/icons/dreamsIcon.svg";
import Vault from "../../assets/icons/vaultIcon.svg";
import Grit from "../../assets/icons/gritIcon.svg";
import LearnIcon from "../../assets/icons/learnIcon.svg";

const AccessMore = () => {
    const data = [
        {
            icon: Dib,
            title: "Vault",
            text: "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
        },
        {
            icon: Dreams,
            title: "Dreams",
            text: "Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.",
        },
        {
            icon: Vault,
            title: "Vault",
            text: "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.",
        },
        {
            icon: Grit,
            title: "Grit",
            text: "Become a VIP when you save more money with us. Enjoy better benefits.",
        },
    ];
    return (
        <div className={styles.container}>
            <h2>Access More With Your Money</h2>
            <p>
                Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities
                than ever at your finger tips. Why not take advantage today?
            </p>
            <Button variant="outline_light" className={styles.btn}>
                Learn more about savings <img src={LearnIcon} alt="" />
            </Button>
            <div className={styles.grid_container}>
                {data.map((item, index) => (
                    <div key={index} className={styles.grid_box}>
                        <div>
                            <img src={item.icon} alt="" />
                        </div>

                        <h5>{item.title}</h5>
                        <p className={styles.text}>{item.text}</p>
                        <p className={styles.learnMore}>Learn More</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default AccessMore;
