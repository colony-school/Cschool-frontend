// Style sheets import
import styles from "../../styles/components/work/status.module.scss";

// Main component
interface StatusProps {
    status: number
}
export const Status = ({ status }: StatusProps): JSX.Element => {
    const statusKeys: Array<String> = ["Not started", "Started", "Past due"];
    return (
        <span className={styles[`status-${status}`]}>
            {statusKeys[status]}
        </span>
    );
}