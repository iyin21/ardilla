import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { BiCaretDown } from "react-icons/bi";
export interface SubmenuProps {
    title: string;
    route: string;
}

interface Iprop {
    route: string;
    menu: string;
    submenu: SubmenuProps[];
}
const NavBarDropdownSubmenu = ({ route, menu, submenu }: Iprop) => {
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setDropdown(!dropdown);
    return (
        <li className={styles._}>
            <NavLink
                to={route || ""}
                style={{
                    display: "flex",
                    padding: "1rem",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "white",
                }}
                className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
                onClick={handleClick}
            >
                {menu}
                <span>
                    <BiCaretDown />
                </span>
            </NavLink>
            <ul className={`${dropdown ? styles.open : styles.closed} `}>
                {submenu.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) => (isActive ? styles.active : styles.link)}
                            to={item.route}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
};
export default NavBarDropdownSubmenu;
