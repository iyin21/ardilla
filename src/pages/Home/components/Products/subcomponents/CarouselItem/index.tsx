import styles from "./index.module.scss";
import { FaCheckCircle } from "react-icons/fa";

export interface CarouselItemProps {
    title: string;
    subtitle: string;
    text: string;
    productItems: string[];
    imgSource: string;
}
const CarouselItem = ({ title, subtitle, text, productItems, imgSource }: CarouselItemProps) => {
    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.text}>{text}</p>
                <div>
                    {productItems.map((item, index) => (
                        <div key={index} className={styles.product_item_container}>
                            <FaCheckCircle color="#E6366E" size="20px" />
                            <p className={styles.product_item}>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <img src={imgSource} alt="Phone" />
        </div>
    );
};

export default CarouselItem;
