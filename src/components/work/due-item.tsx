// Internal modules import
import { Status } from "./status";

// Style sheet import
import styles from "../../styles/components/work/due-item.module.scss";

type DueItemProps = {
    name: string,
    subject: string,
    status: number,
    date: Date,
    today: boolean
}

/**
 * 
 * @param name 
 * @param subject 
 * @param status 
 * @param date 
 * @param today 
 */
export const DueItem = ({ name, subject, status, date, today }: DueItemProps): JSX.Element => {
    return (
        <li className={styles["due-item"]}>
            <div className={styles["due-item-title"]}>
                <span className={styles["due-item-name"]}>{name}</span>
                <span className={styles["due-item-subj"]}>{subject}</span>
            </div>
            <div className={styles["due-item-due"]}>
                <time className={styles["due-item-date"]}>{
                    today ? date.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })
                    : date.toLocaleDateString("en-GB")
                }</time>
                <Status status={status} />
            </div>
        </li>
    );
}