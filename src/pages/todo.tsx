// External modules import
import { NextPage } from "next";

// Style sheet import
import styles from "../styles/pages/todo.module.scss";

const Todo: NextPage = () => {
    return (
        <div className={styles["grid"]}>
            <section className={styles["todo-card"]}>
                <h1>To-do</h1>
            </section>
            <section className={styles["main-card"]}>
                <h1>Tideman</h1>
            </section>
        </div>
    );
}

export default Todo;