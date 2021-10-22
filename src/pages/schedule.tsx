// External modules import
import { NextPage } from "next";
import dayjs from "dayjs";

// Internal modules import
import { Filter } from "../components/form/filter";

// Style sheets import
import styles from "../styles/pages/schedule.module.scss";
import scheduleStyles from "../styles/components/form/schedule.module.scss";
import { useRouter } from "next/router";

type ScheduleProps = {
    schedule: Array<Array<{ name: string, teacher: string, periodStart: number, duration?: number, isBlank?: boolean }>>
}
const Schedule = ({ schedule }: ScheduleProps) => {
    const router = useRouter();

    type RowProps = {
        row: Array<{ name: string, teacher: string, periodStart: number, duration?: number, isBlank?: boolean }>
    }
    const PeriodRow = ({ row }: RowProps) => {
        return (
            <div className={scheduleStyles["row-class"]}>{
                row.map(period => (
                    <div className={`${scheduleStyles["class"]} ${period.isBlank ? scheduleStyles[`class-${period.isBlank}`] : null}`}
                        style={{ gridColumn: `${period.periodStart} / span ${period.duration || 1}` }}>
                        <h3 className={scheduleStyles["class-name"]}>{period.name}</h3>
                        <p className={scheduleStyles["class-teacher"]}>{period.teacher}</p>
                    </div>
                ))
            }</div>
        );
    }

    const days: Array<string> = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <section className={styles["schedule"]}>
            <div className={scheduleStyles["schedule"]}>{
                schedule.map((row, index) => (
                    <div className={scheduleStyles["row"]}>
                        <div className={scheduleStyles["day"]}>
                            <h2 className={scheduleStyles["day-name"]}>{days[index]}</h2>
                            <time className={scheduleStyles["day-date"]}>{dayjs().day(index).toDate().toLocaleDateString(router.locale)}</time>
                        </div>
                        <PeriodRow row={row} />
                    </div>
                ))
            }</div>
        </section>
    );
}

const PeriodDetails = (): JSX.Element => {
    return (
        <section className={styles["details"]}>
            <div className={styles["details-class"]}>
                <h1>Chemistry</h1>
                <p>Thanthapatra</p>
                <time>08:30-10:10</time>
            </div>
            <div className={styles["details-related"]}>
                <h2>Related Posts</h2>
            </div>
            <div className={styles["details-due"]}>
                <h2>Due This Period</h2>
            </div>
        </section>
    )
}

const SchedulePage: NextPage = () => {
    return (
        <main className={styles["main"]}>
            <section className={styles["filter"]}>
                <Filter />
            </section>
            <Schedule schedule={[
                [
                    { name: "Meeting", teacher: "", periodStart: 1 },
                    { name: "Chem.", teacher: "Thanthapatra", periodStart: 2 },
                    { name: "Core Maths", teacher: "Kritchapon", periodStart: 3, duration: 2 },
                    { name: "", teacher: "", periodStart: 5, isBlank: true },
                    { name: "Thai", teacher: "Usa", periodStart: 6 },
                    { name: "Eng.", teacher: "Richard", periodStart: 7 },
                    { name: "Addi M.", teacher: "Krissada", periodStart: 8 },
                    { name: "Health", teacher: "Rusman", periodStart: 9 },
                ],
                [
                    { name: "Chemistry", teacher: "Thanthapatra", periodStart: 1, duration: 2 },
                    { name: "Earth and Space", teacher: "Natharika", periodStart: 3, duration: 2 },
                    { name: "Chinese", teacher: "Thanyapat", periodStart: 6 },
                    { name: "Guidn.", teacher: "Ampha", periodStart: 7 },
                    { name: "Physics", teacher: "Niruth", periodStart: 8 },
                    { name: "Social", teacher: "Thanungarn", periodStart: 9 },
                    { name: "EPlus+ Meeting", teacher: "", periodStart: 10 },
                ],
                [
                    { name: "Core M.", teacher: "Kritchapon", periodStart: 1 },
                    { name: "E&S", teacher: "Natharika", periodStart: 2 },
                    { name: "Physics", teacher: "Niruth", periodStart: 3, duration: 2 },
                    { name: "IS", teacher: "Akkarach", periodStart: 6 },
                    { name: "SIA", teacher: "Niruth", periodStart: 7 },
                    { name: "Communication", teacher: "Richards", periodStart: 8, duration: 2 },
                ],
                [
                    { name: "", teacher: "", periodStart: 1 },
                    { name: "", teacher: "", periodStart: 2 },
                    { name: "", teacher: "", periodStart: 3 },
                ],
                [
                    { name: "", teacher: "", periodStart: 1 },
                    { name: "", teacher: "", periodStart: 2 },
                    { name: "", teacher: "", periodStart: 3, duration: 2 },
                    { name: "", teacher: "", periodStart: 6, duration: 2 },
                    { name: "", teacher: "", periodStart: 8, duration: 2 },
                ]
            ]} />
            <div className={styles["details-container"]}>
                <PeriodDetails />
            </div>
        </main>
    );
}

export default SchedulePage;