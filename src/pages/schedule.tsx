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
    schedule: Array<Array<{ name: string, teacher: string, periodStart: number, duration?: number }>>
}
const Schedule = ({ schedule }: ScheduleProps) => {
    const router = useRouter();

    type RowProps = {
        row: Array<{ name: string, teacher: string, periodStart: number, duration?: number }>
    }
    const PeriodRow = ({ row }: RowProps) => {
        return (
            <div className={scheduleStyles["row-class"]}>{
                row.map(period => (
                    <div key={period.periodStart} className={scheduleStyles["class"]}
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
    const router = useRouter();

    return (
        <main className={styles["main"]}>
            <section className={styles["filter"]}>
                <Filter items={[
                    { type: "dropdown", label: "Class", list: [
                        { id: 401, text: "401" },
                        { id: 402, text: "402" },
                        { id: 403, text: "403" },
                        { id: 404, text: "404" },
                        { id: 405, text: "405" },
                        { id: 406, text: "406" },
                        { id: 407, text: "407" },
                        { id: 408, text: "408" },
                        { id: 409, text: "409" },
                        { id: 410, text: "410" },
                        { id: 411, text: "411" }
                    ], startsAs: 404, onChange: ((e: number) => router.push(`/schedule?class=${e}&term=${router.query.term}`)) },
                    { type: "dropdown", label: "Term", list: [
                        { id: 20211, text: "1/2021" },
                        { id: 20212, text: "2/2021" }
                    ], startsAs: 20211, onChange: ((e: number) => router.push(`/schedule?class=${router.query.class}&term=${e}`)) }
                ]} />
            </section>
            <Schedule schedule={[
                [
                    { name: "Meeting", teacher: "", periodStart: 1 },
                    { name: "Chem.", teacher: "Thanthapatra", periodStart: 2 },
                    { name: "Core Maths", teacher: "Kritchapon", periodStart: 3, duration: 2 },
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
                    { name: "Football", teacher: "Sakariya", periodStart: 1 },
                    { name: "Biology", teacher: "Thanakorn", periodStart: 2 },
                    { name: "Thai", teacher: "Usa", periodStart: 3 },
                ],
                [
                    { name: "Art", teacher: "Leelawadee", periodStart: 1 },
                    { name: "Social", teacher: "Thanungarn", periodStart: 2 },
                    { name: "English IA", teacher: "Choksarun", periodStart: 3, duration: 2 },
                    { name: "Biology", teacher: "Thanakorn", periodStart: 6, duration: 2 },
                    { name: "Addi Maths", teacher: "Krissada", periodStart: 8, duration: 2 },
                ]
            ]} />
            <div className={styles["details-container"]}>
                <PeriodDetails />
            </div>
        </main>
    );
}

export default SchedulePage;