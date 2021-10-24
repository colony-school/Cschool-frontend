// External modules import
import { NextPage } from "next";

// Internal modules import
import { DueItem } from "../components/work/due-item";

// Style sheet import
import styles from "../styles/pages/todo.module.scss";
import markdownStyles from "../styles/utils/markdown.module.scss";

/**
 * Exhaustive list of upcoming and past due assignments that are not marked as completed
 */
const ToDoList = (): JSX.Element => {
    return (
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
    );
}

/**
 * The description of the selected assignment
 */
const AssgDesc = () => {
    const DueDate = () => {
        return (
            <div className={styles["main-due"]}>
                <span className={styles["main-due-date"]}>Due: Sep 14, 11:59 PM</span>
                <span className={styles["main-due-countdown"]}>(2 days, 5 hours remaining)</span>
            </div>
        );
    }

    return (
        <section className={styles["main-card"]}>
            <h1>Tideman</h1>
            <DueDate />
            <div className={markdownStyles["markdown"]}>
                <p>The Tideman voting method (also known as “ranked pairs”) is a ranked-choice voting method that’s guaranteed to produce the Condorcet winner of the election if one exists.</p>
                <p>Generally speaking, the Tideman method works by constructing a “graph” of candidates, where an arrow (i.e. edge) from candidate A to candidate B indicates that candidate A wins against candidate B in a head-to-head matchup.</p>
            </div>
        </section>
    );
}

// Main component
const Todo: NextPage = () => {
    return (
        <div className={styles["grid"]}>
            <ToDoList />
            <AssgDesc />
        </div>
    );
}

export default Todo;