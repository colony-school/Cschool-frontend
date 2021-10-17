import styles from "../../styles/components/layout/sidebar.module.scss"

interface OpennedProps {
    openned: boolean
}
export const Sidebar = ({ openned }: OpennedProps): JSX.Element => {
    return (
        <div className={styles[`sidebar-openned-${openned}`]}>
            <div className={styles["header"]}>
                <span>Sidebar</span>
            </div>
        </div>
    );
}