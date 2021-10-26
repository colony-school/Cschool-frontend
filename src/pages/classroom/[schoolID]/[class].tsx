// External modules import
import { NextPage } from "next";

// Style sheet import
import styles from "../../../styles/pages/classroom/colony.module.scss";

const ClassroomHeader = (): JSX.Element => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-card"]}>
                <h1>M.404</h1>
                <p>Moderated by Smart W.</p>
            </div>
        </header>
    );
}

const Classroom: NextPage = () => {
    return (
        <div className={styles["root"]}>
            <ClassroomHeader />
        </div>
    );
}

export default Classroom;