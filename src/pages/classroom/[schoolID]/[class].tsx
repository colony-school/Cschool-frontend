// External modules import
import { NextPage } from "next";

// Style sheet import
import styles from "../../../styles/pages/classroom/colony.module.scss";

const ClassroomHeader = (): JSX.Element => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-card"]}>
                <h1>M.404</h1>
                <p>Moderated by Smart W.</p>
            </div>
        </header>
    );
}

const QuickInfo = (): JSX.Element => {
    return (
        <aside>
            Quick info here
        </aside>
    );
}

const Compose = (): JSX.Element => {
    return (
        <div>
            Compose
        </div>
    );
}

const PostFilter = (): JSX.Element => {
    return (
        <div>
            Filter
        </div>
    );
}

const Feed = (): JSX.Element => {
    return (
        <main>
            Feed
        </main>
    );
}

const Classroom: NextPage = () => {
    return (
        <div className={styles["root"]}>
            <ClassroomHeader />
            <div className={styles["split"]}>
                <QuickInfo />
                <div>
                    <section>
                        <Compose />
                        <PostFilter />
                        <Feed />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Classroom;