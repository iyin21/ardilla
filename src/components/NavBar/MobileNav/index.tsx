import { Drawer } from "@mantine/core";
import { IoCloseOutline } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";
import { navLinks } from "../utils/navLinks";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import Button from "../../Button";

interface MobileNavInterface {
    setOpenNav: Dispatch<SetStateAction<boolean>>;
    openNav: boolean;
}
const MobileNav = ({ setOpenNav, openNav }: MobileNavInterface) => {
    return (
        <Drawer
            opened={openNav}
            onClose={() => setOpenNav(false)}
            //size="75%"
            withCloseButton={false}
            //overlayBlur={2}
            //overlayColor="#132013"
            //overlayOpacity={0.5}
        >
            <div className={styles.header}>
                <p>Ardilla</p>
                <Button variant="primary" className={styles.btn}>
                    Create Account
                </Button>
                <div className={styles.closeMenu}>
                    <IoCloseOutline onClick={() => setOpenNav(false)} size="2em" />
                </div>
            </div>
            <hr />
            <div>
                <ul className={styles.nav_link_list}>
                    {navLinks.map((item, index) =>
                        item.submenu ? (
                            <li className={styles.navbar_link_item} key={index}>
                                <NavLink to={item.path || ""} className={styles.navbar_solo_link}>
                                    {item.title}
                                </NavLink>
                                <ul>
                                    {item.submenu.map((item, index) => (
                                        <li key={index} className={styles.submenu}>
                                            <NavLink
                                                to={item.route || ""}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? styles.activeLink
                                                        : styles.navbar_link
                                                }
                                            >
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li
                                className={`${styles.navbar_link_item} ${
                                    item.suffix && styles.betaLink
                                } `}
                                key={index}
                            >
                                <NavLink
                                    to={item.path || ""}
                                    className={({ isActive }) =>
                                        isActive ? styles.activeLink : styles.navbar_link
                                    }
                                >
                                    {item.title}
                                </NavLink>
                                {item.suffix && <p className={styles.beta}>Beta</p>}
                            </li>
                        ),
                    )}
                </ul>
            </div>
        </Drawer>
    );
};

export default MobileNav;
