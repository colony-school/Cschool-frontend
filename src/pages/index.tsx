// External modules import
import type { NextPage } from "next";

// Style sheet import
import styles from "../styles/pages/dashboard.module.scss";

// Dashboard cards
const CurrentClass = (): JSX.Element => {
    return (
        <div className={styles["class-card"]}>
            <h1 className={styles["class-header"]}>Current Class</h1>
            <div className={styles["class-class"]}>
                <h2 className={styles["class-name"]}>Mathematics for Machine Learning</h2>
                <p className={styles["class-teacher"]}>T. Smart Wattanapornmongkol</p>
                <p className={styles["class-no-assgn"]}>2 assignments due</p>
            </div>
        </div>
    );
}

export const Home: NextPage = () => {
    return (
        <main className={styles["dashboard"]}>
            <div>
                <CurrentClass />
            </div>
            <div>
                <CurrentClass />
            </div>
        </main>
    );
}

export default Home;