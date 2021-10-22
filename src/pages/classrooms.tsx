// External modules import
import type { NextPage } from "next";
import Link from "next/link";

// Style sheet import
import styles from "../styles/pages/classrooms.module.scss";

// Internal modules import
import { Dropdown } from "../components/form/dropdown";

// Main component
const Classrooms: NextPage = () => {
    return (
        <section className={styles["classrooms-card"]}>
            <div className={styles["school-filter"]}>
            </div>
            <div className={styles["grade-card"]}>
                <h2 className={styles["grade"]}>M.1</h2>
                <div className={styles["program-container"]}>
                    <h3 className={styles["program"]}>E-Plus</h3>
                    <Link href="/classroom/1/404">
                        <a className={styles["classes"]}>404</a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Exports
export default Classrooms;