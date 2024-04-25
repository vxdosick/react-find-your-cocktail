import styles from "./Header.module.scss"
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.header__logo} to="/">
                <img src="/img/logo.png" alt="logo" />
                Find Your Cocktail
            </Link>
                <nav className={styles.header__menu}>
                    <ul>
                        <li><Link to="/find">Find</Link></li>
                        <li><Link to="/add">Add</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/generator">Generator</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>
        </header>
    )
}