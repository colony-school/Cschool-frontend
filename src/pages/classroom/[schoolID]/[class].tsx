// External modules import
import { NextPage } from "next";

// Types import
import { post } from "../../../../utils/types";

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

const Feed = ({ feed }: { feed: Array<post.Post> }): JSX.Element => {
    return (
        <main>{
            feed.map(post => {
                <article>
                    Hi
                </article>
            })
        }</main>
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
                        <Feed feed={[

                        ]} />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Classroom;