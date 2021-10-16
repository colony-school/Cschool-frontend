// External modules import
import type { NextPage } from "next";

// Internal modules import
import { Dropdown } from "../components/global/dropdown";

// Style sheets import
import styles from "../styles/pages/test.module.scss";

/**
 * This page is used to test out components
 */
const Test: NextPage = () => {
    return (
        <main>
            <div className={styles["dropdown"]}>
                <Dropdown list={[
                    {id: 0, text: "Show"},
                    {id: 1, text: "Censored before show"},
                    {id: 2, text: "Don't show"}
                ]} startsAs={0} onChange={() => console.log("hi")} />
            </div>
        </main>
    );
}

// Exports
export default Test;