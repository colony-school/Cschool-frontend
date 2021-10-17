// External modules import
import { useState } from "react";

// Internal modules import
import { Menu } from "./menu";
import { Sidebar } from "./sidebar";

// Style sheets import
import styles from "../../styles/components/layout/layout.module.scss";

interface LayoutProps {
    children: JSX.Element
}
export const Layout = ({ children }: LayoutProps): JSX.Element  => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div>
            <Menu pages={[
                {name: "Dashboard", url: "/"},
                {name: "Events", url: "/events"},
                {name: "Subjects", url: "/schedule?school=1&class=405"},
                {name: "To-do", url: "/to-do"},
                {name: "Classrooms", url: "/classrooms?school=1&class=405"}
            ]} />
            <div className={styles[`grid-openned-${sidebarOpen}`]}>
                <div className={styles["main"]}>
                    {children}
                </div>
                <Sidebar openned={sidebarOpen} />
            </div>
        </div>
    );
}