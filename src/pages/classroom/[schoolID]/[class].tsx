// External modules import
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";

// Types import
import { post } from "../../../../utils/types";

// Style sheet import
import styles from "../../../styles/pages/classroom/colony.module.scss";
import markdownStyles from "../../../styles/utils/markdown.module.scss";

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
        <aside className={styles["quickinfo"]}>
            Quick info here
        </aside>
    );
}

const Compose = (): JSX.Element => {
    return (
        <div className={styles["compose"]}>
            Compose
        </div>
    );
}

const PostFilter = (): JSX.Element => {
    return (
        <div className={styles["filter"]}>
            Filter
        </div>
    );
}

const Feed = ({ feed }: { feed: Array<post.Post> }): JSX.Element => {
    return (
        <main className={styles["feed"]}>{
            feed.map(post => {
                if (post.type === "announcement") {
                    return (
                        <article className={`${styles["post"]} ${styles["post-announcement"]}`} key={post.id}>
                            <span>Announcement</span>
                            <div className={styles["post-content"]}>
                                <ReactMarkdown className={markdownStyles["markdown"]}>
                                    {post.body}
                                </ReactMarkdown>
                            </div>
                        </article>
                    );
                } else if (post.type === "sharedFile") {
                    return (
                        <article className={styles["post"]} key={post.id}>
                            <span>Shared File</span>
                            <div className={styles["post-content"]}>
                                <p>{post.annotation}</p>
                            </div>
                        </article>
                    );
                }
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
                    <section className={styles["content"]}>
                        <Compose />
                        <PostFilter />
                        <Feed feed={[
                            {
                                type: "announcement",
                                id: "1",
                                body: "# Breaking news: Jimmy Watches Porn"
                            },
                            {
                                type: "sharedFile",
                                id: "2",
                                annotation: "Spent a lot of time one this. Use responsibly!",
                                links: [],
                                file: "https://firebasestorage.googleapis.com/v0/b/siravit-p.appspot.com/o/portfolio%2FEmocial.png?alt=media&token=040736c3-afba-4847-8b9f-a08363c9cc8d",
                                usePolicies: {
                                    "noParaphrase": false,
                                    "noCopy": true,
                                    "noShare": true
                                }
                            }
                        ]} />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Classroom;