// Style sheets import
import styles from "../../styles/components/form/filter.module.scss";
import { Dropdown } from "./dropdown";

/**
 * The blue filter at the top of pages that reacts to changes
 */
export const Filter = (): JSX.Element => {
    return (
        <div className={styles["filter"]}>
            <div className={styles["item"]}>
                <label className={styles["item-label"]}>Dropdown</label>
                <div className={styles["item-input"]}>
                    <Dropdown
                        list={[
                            { id: 0, text: "Hello" },
                            { id: 1, text: "World" },
                            { id: 2, text: "Jimmy" }
                        ]}
                        startsAs={0}
                        onChange={() => console.log("hi")}
                    />
                </div>
            </div>
            <div className={styles["item"]}>
                <label className={styles["item-label"]}>Text</label>
                <div className={styles["item-input"]}>
                    <input type="text" className={styles["item-text"]} />
                </div>
            </div>
        </div>
    );
}