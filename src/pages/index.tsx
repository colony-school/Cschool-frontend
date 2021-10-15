import type { NextPage } from "next";
import styles from "../styles/pages/dashboard.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles["card"]}>
            Colonized!
        </div>
    );
}

export default Home;