import styles from "./index.module.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "light" | "outline_light" | "outline_primary";
}

const Button = ({ style, variant, children, className, ...rest }: ButtonProps) => {
    return (
        <button
            style={style}
            className={
                (className ? `${className} ` : "") +
                `${styles[`${variant}`]}`
            }
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
