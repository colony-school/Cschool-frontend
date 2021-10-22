// External modules import
import { useRouter } from "next/router";

// Internal modules import
import React, { ReactNode } from "react";
import { Menu } from "./menu";
import { motion } from "framer-motion";

// Style sheets import
import styles from "../../styles/components/layout/layout.module.scss";

type LayoutProps = {
    children: ReactNode
}
export const Layout = ({ children }: LayoutProps): JSX.Element  => {
    const router = useRouter();

    const variants = {
        hidden: { opacity: 0, x: -100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 100, y: 0 },
    }

    return (
        <div>
            <Menu pages={[
                {name: "Dashboard", url: "/"},
                {name: "Events", url: "/events"},
                {name: "Subjects", url: "/schedule?school=1&class=405"},
                {name: "To-do", url: "/to-do"},
                {name: "Classrooms", url: "/classrooms?school=1&class=405"}
            ]} />
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={styles["main"]}
            >
                {children}
            </motion.main>
        </div>
    );
}