// External modules import
import type { NextPage } from "next";

// Style sheet import
import styles from "../styles/pages/classrooms.module.scss";

// Internal modules import
import { Dropdown } from "../components/form/dropdown";


const Classrooms = (): JSX.Element => {
    return (
        <section className={styles["classrooms-card"]}>
            <div className={styles["school-filter"]}>
            </div>
            <div className={styles["grade-card"]}>
                <h2 className={styles["grade"]}>M.1</h2>
                <div className={styles["program-container"]}>
                    <h3 className={styles["program"]}>error</h3>
                    <span className={styles["classes"]}>404</span>
                </div>
            </div>
        </section>
    );
}

// Exports
export default Classrooms;