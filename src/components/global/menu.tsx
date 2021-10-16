import Link from "next/link";
import styles from "../../styles/components/layout/menu.module.scss";

interface MenuProps {
    pages: Array<{ name: string, url: string }>
}
export const Menu = ({ pages }: MenuProps): JSX.Element => {
    return (
        <div className={styles["menu-container"]}>
            <nav className={styles["menu"]}>
                {pages.map(page => (
                    <Link href={page.url}>
                        <a className={styles["item"]}>
                            {page.name}
                        </a>
                    </Link>
                ))}
            </nav>
        </div>
    );
}