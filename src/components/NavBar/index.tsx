import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import Button from "../Button";
import Logo from "../../assets/icons/logo.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import NavBarDropdownSubmenu from "../NavBarDropdownSubmenu";
import { RxCaretDown } from "react-icons/rx";
import { navLinks } from "./utils/navLinks";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const NavBar = ({
    activeLinkStyle,
    variant,
}: {
    activeLinkStyle: string;
    variant: "primary" | "light" | "outline_light" |  "outline_primary";
}) => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt="" />

            <ul className={styles.nav_link_list}>
                {navLinks.map((item, index) =>
                    item.submenu ? (
                        <NavBarDropdownSubmenu
                            menu={item.title}
                            route={item.path || ""}
                            submenu={item.submenu}
                            key={index}
                        />
                    ) : (
                        <li className={styles.navbar_link_item} key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? activeLinkStyle : styles.navbar_link
                                }
                            >
                                {item.title}
                            </NavLink>
                            {item.suffix && <p className={styles.beta}>Beta</p>}
                        </li>
                    ),
                )}
                <li className={`${(styles.navbar_link_item, styles.sigin)}`}>
                    <NavLink
                        to="/#"
                        className={({ isActive }) =>
                            isActive ? activeLinkStyle : styles.navbar_link
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
            </ul>
            <Button variant={variant} className={styles.btn}>
                Create Account
            </Button>
            <div className={styles.globeContainer}>
                <img src={GlobeIcon} alt="" className={styles.globe} />
                <RxCaretDown color="white" size="22px" />
            </div>
            <div className={styles.menu}>
                <HiMenuAlt2 size={28} onClick={() => setOpenNav(true)} color="white" />
            </div>
            <MobileNav setOpenNav={setOpenNav} openNav={openNav} />
        </nav>
    );
};

export default NavBar;
