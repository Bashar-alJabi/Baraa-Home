"use client"

import { useEffect, useRef } from "react";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {

    const scrollRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= 300 ? scrollRef.current.classList.add(styles.show) : scrollRef.current.classList.remove(styles.show);
        };
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll); };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <span className={styles.scroll} ref={scrollRef} onClick={handleScrollToTop}>⇑</span>
    );
};

export default ScrollToTop;