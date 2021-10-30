// External modules import
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Internal modules import
import { post } from "../../../utils/types";

// Icons import
import { ciAnnouncement, ciAttachedFile } from "../../../public/icons";

// Style sheets import
import styles from "../../styles/components/post/post.module.scss";
import markdownStyles from "../../styles/utils/markdown.module.scss";

export const AnnouncementPost = ({ post }: { post: post.AnnouncementPost }) => {
    return (
        <article className={`${styles["post"]} ${styles["post-announcement"]}`} key={post.id}>
            <div className={styles["post-type"]}>
                <div className={styles["post-icon"]}>
                    <Image src={ciAnnouncement} />
                </div>
                <span>Announcement</span>
            </div>
            <div className={styles["post-content"]}>
                <ReactMarkdown className={markdownStyles["markdown"]}>
                    {post.body}
                </ReactMarkdown>
            </div>
        </article>
    );
}

export const SharedFilePost = ({ post }: { post: post.SharedFilePost }) => {
    return (
        <article className={styles["post"]} key={post.id}>
            <div className={styles["post-type"]}>
                <div className={styles["post-icon"]}>
                    <Image src={ciAttachedFile} alt="Shared File" />
                </div>
                <span>Shared File</span>
            </div>
            <div className={styles["post-content"]}>
                <ReactMarkdown className={markdownStyles["markdown"]}>
                    {post.annotation}
                </ReactMarkdown>
            </div>
        </article>
    );
}