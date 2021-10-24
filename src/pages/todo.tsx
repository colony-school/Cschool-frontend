// External modules import
import { NextPage } from "next";

// Internal modules import
import { DueItem } from "../components/work/due-item";

// Style sheet import
import styles from "../styles/pages/todo.module.scss";

const Todo: NextPage = () => {
    return (
        <div className={styles["grid"]}>
            <section className={styles["todo-card"]}>
                <h1>To-do</h1>
                <ul className={styles["todo-list"]}>
                    <DueItem
                        name="Tideman"
                        subject="CS50"
                        status={2}
                        date={new Date(2021, 10, 6)}
                        today={false}
                    />
                    <DueItem
                        name="Page 169-420"
                        subject="Addi M."
                        status={0}
                        date={new Date(2021, 10, 8)}
                        today={false}
                    />
                    <DueItem
                        name="Suicide"
                        subject="Guidance"
                        status={1}
                        date={new Date(2021, 10, 12)}
                        today={false}
                    />
                </ul>
            </section>
            <section className={styles["main-card"]}>
                <h1>Tideman</h1>
            </section>
        </div>
    );
}

export default Todo;