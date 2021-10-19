// External modules import
import type { NextPage } from "next";
import ProgressBar from "@ramonak/react-progress-bar";

// Style sheet import
import styles from "../styles/pages/dashboard.module.scss";
import { Status } from "../components/work/status";

/**
 * The current class card
 */
const CurrentClass = (): JSX.Element => {
    return (
        <section className={styles["class-card"]}>
            <h1 className={styles["header"]}>Current Class</h1>
            <div className={styles["class-class"]}>
                <h2 className={styles["class-name"]}>Mathematics for Machine Learning</h2>
                <p className={styles["class-teacher"]}>T. Smart Wattanapornmongkol</p>
                <p className={styles["class-no-assgn"]}>2 assignments due</p>
                <div className={styles["class-time"]}>
                    <p className={styles["class-time-label"]}>08:30–09:20</p>
                    <ProgressBar completed={25} isLabelVisible={false} />
                </div>
            </div>
            <div className={styles["class-button-container"]}>
                <div className={styles["class-button"]}>
                    <button className={styles["class-button-join"]}>Join Meet</button>
                    <button className={styles["class-button-ggc"]}>Classroom</button>
                </div>
            </div>
        </section>
    );
}

/**
 * Paid club advertisements and school call to actions
 */
const Featured = (): JSX.Element => {
    type FeaturedCardProps = {
        header: string,
        desc: string,
        color: string
    }
    const FeaturedCard = ({ header, desc, color }: FeaturedCardProps): JSX.Element => {
        return (
            <li className={styles["featured-item-card"]} style={{ background: `linear-gradient(90deg, ${color}, #FFFFFF 10rem)` }}>
                <div />
                <div className={styles["featured-item-content"]}>
                    <h2 className={styles["featured-item-header"]}>{header}</h2>
                    <p className={styles["featured-item-desc"]}>{desc}</p>
                    <div className={styles["featured-cta-container"]}>
                        <button className={styles["featured-cta"]} style={{ background: color }}>Register</button>
                    </div>
                </div>
            </li>
        );
    }

    return (
        <section className={styles["featured-card"]}>
            <h1 className={styles["header"]}>Featured</h1>
            <ul className={styles["featured-list"]}>
                <FeaturedCard
                    header="Get your Pfizer shot"
                    desc="Pfizer shots are now available for registeration"
                    color="#0073A5" />
                <FeaturedCard
                    header="Join the Imsad Club!"
                    desc="We can be Im and be sad together at the Imsad club!"
                    color="#A00000" />
            </ul>
        </section>
    );
}

/**
 * Official announcements from the school on shorten periods, meetings, events
 */
const SchoolAnnouncements = (): JSX.Element => {
    const month: Array<string> = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    type AnnouncementProps = {
        title: string,
        desc?: string,
        date: Date,
        source?: string,
        main: boolean
    }
    const Announcement = ({ title, desc, date, source, main }: AnnouncementProps): JSX.Element => {
        return (
            <div className={styles["announcements-item-card"]}>
                <div className={styles["announcements-item-date"]}>
                    <div className={styles["announcements-item-date-number"]}>{date.getDate()}</div>
                    <div className={styles["announcements-item-date-month"]}>{month[date.getMonth() - 1]}</div>
                </div>
                {main
                    ? <div className={styles["announcements-item-content"]}>
                        <h2 className={styles["announcements-item-header"]}>{title}</h2>
                        <p className={styles["announcements-item-desc"]}>{desc}</p>
                        <div className={styles["announcements-item-buttons"]}>
                            <a href={source} target="_blank" rel="noreferrer"
                                className={styles["announcements-item-read"]}>
                                Read more
                            </a>
                        <button className={styles["announcements-item-share"]}>Share</button>
                    </div>
                    </div>
                    : <div className={styles["announcements-item-content"]}>
                        <h2 className={styles["announcements-item-header"]}>{title}</h2>
                    </div>
                }
            </div>
        );
    }

    return (
        <section className={styles["announcements-card"]}>
            <h1 className={styles["header"]}>School Announcements</h1>
            <Announcement
                title="Shortened periods from period 4 onwards"
                desc="Shortened periods due to a school-wide teacher meeting at 16:00"
                date={new Date(2021, 9, 12)}
                source="https://imsad.dev"
                main={true}
            />
            <Announcement
                title="Banana Eating Contest at lunch, no periods cut or shortened"
                date={new Date(2021, 9, 14)}
                main={false}
            />
            <Announcement
                title="Periods 4 and onwards is completely cut"
                date={new Date(2021, 9, 31)}
                main={false}
            />
        </section>
    );
}

/**
 * A minified to-do list for the Dashboard
 */
const DueSoon = (): JSX.Element => {
    type DueItemProps = {
        name: string,
        subject: string,
        status: number,
        date: Date,
        today: boolean
    }
    const DueItem = ({ name, subject, status, date, today }: DueItemProps): JSX.Element => {
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

    return (
        <section className={styles["due-card"]}>
            <div className={styles["due-content"]}>
                <div>
                    <h1 className={styles["header"]}>Due Soon</h1>
                    <div className={styles["due-later-card"]}>
                        <ul className={styles["due-list"]}>
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
                    </div>
                </div>
                <div className={styles["due-today-card"]}>
                    <h2>Today</h2>
                    <ul className={styles["due-list"]}>
                            <DueItem
                                name="Tideman"
                                subject="CS50"
                                status={0}
                                date={new Date(2021, 8, 10, 14, 20)}
                                today={true}
                             />
                    </ul>
                </div>
            </div>
        </section>
    );
}

// Main component
const Dashboard: NextPage = () => {
    return (
        <main className={styles["dashboard"]}>
            <div className={styles["dashboard-column"]}>
                <CurrentClass />
                <Featured />
            </div>
            <div className={styles["dashboard-column"]}>
                <SchoolAnnouncements />
                <DueSoon />
            </div>
        </main>
    );
}

export default Dashboard;