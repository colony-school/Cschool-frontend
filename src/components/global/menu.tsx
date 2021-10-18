// External modules import
import Link from "next/link";
import Image from "next/image";

// Style sheets import
import styles from "../../styles/components/layout/menu.module.scss";

// Photos import
import logo from "../../../public/photos/logo.svg";

interface MenuProps {
    pages: Array<{ name: string, url: string }>
}
export const Menu = ({ pages }: MenuProps): JSX.Element => {
    return (
        <div className={styles["menu-container"]}>
            <div className={styles["menu"]}>
                <Image src={logo} />
                <nav className={styles["menu-link-container"]}>
                    {pages.map(page => (
                        <Link href={page.url}>
                            <a className={styles["item"]}>
                                {page.name}
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}