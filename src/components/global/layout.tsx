// Internal modules import
import { Menu } from "./menu";

// Style sheets import
import styles from "../../styles/components/layout/layout.module.scss";

interface LayoutProps {
    children: JSX.Element
}
export const Layout = ({ children }: LayoutProps): JSX.Element  => {
    return (
        <div>
            <Menu pages={[
                {name: "Dashboard", url: "/"},
                {name: "Events", url: "/events"},
                {name: "Subjects", url: "/schedule?school=1&class=405"},
                {name: "To-do", url: "/to-do"},
                {name: "Classrooms", url: "/classrooms?school=1&class=405"}
            ]} />
            <div>
                <main className={styles["main"]}>
                    {children}
                </main>
            </div>
        </div>
    );
}