// External modules import
import type { NextPage } from "next";

// Style sheet import
import styles from "../styles/pages/dashboard.module.scss";

// Dashboard cards

/**
 * The current class card
 */
const CurrentClass = (): JSX.Element => {
    return (
        <section className={styles["class-card"]}>
            <h1 className={styles["header"]}>Current Class</h1>
            <div className={styles["class-class"]}>
                <h2 className={styles["class-name"]}>Mathematics for Machine Learning</h2>
                <p className={styles["class-teacher"]}>T. Smart Wattanapornmongkol</p>
                <p className={styles["class-no-assgn"]}>2 assignments due</p>
            </div>
        </section>
    );
}

/**
 * Paid club advertisements and school call to actions
 */
const Featured = (): JSX.Element => {
    return (
        <section className={styles["card"]}>
            <h1 className={styles["header"]}>Featured</h1>
        </section>
    );
}

/**
 * Official announcements from the school on shorten periods, meetings, events
 */
const SchoolAnnouncements = (): JSX.Element => {
    return (
        <section className={styles["card"]}>
            <h1 className={styles["header"]}>School Announcements</h1>
        </section>
    );
}

/**
 * A minified to-do list for the Dashboard
 */
const DueSoon = (): JSX.Element => {
    return (
        <section className={styles["card"]}>
            <h1 className={styles["header"]}>Due Soon</h1>
        </section>
    );
}

// Main component
export const Home: NextPage = () => {
    return (
        <main className={styles["dashboard"]}>
            <div className={styles["dashboard-column"]}>
                <CurrentClass />
                <Featured />
            </div>
            <div className={styles["dashboard-column"]}>
                <SchoolAnnouncements />
                <DueSoon />
            </div>
        </main>
    );
}

export default Home;