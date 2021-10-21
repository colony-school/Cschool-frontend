// External modules import
import { NextPage } from "next";

// Internal modules import
import styles from "../styles/pages/schedule.module.scss";
import scheduleStyles from "../styles/components/form/schedule.module.scss";

type ScheduleProps = {
    schedule: Array<Array<{ name: string, teacher: string, periodStart: number, duration?: number, isBlank?: boolean }>>
}
const Schedule = ({ schedule }: ScheduleProps) => {
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
        <section className={`${styles["schedule"]} ${scheduleStyles["schedule"]}`}>
            <div className={scheduleStyles["schedule"]}>{
                schedule.map((row, index) => (
                    <div className={scheduleStyles["row"]}>
                        <div className={scheduleStyles["day"]}>
                            <h2 className={scheduleStyles["day-name"]}>{days[index]}</h2>
                            <time className={scheduleStyles["day-date"]}>18/10/2021</time>
                        </div>
                        <PeriodRow row={row} />
                    </div>
                ))
            }</div>
        </section>
    );
}

const SchedulePage: NextPage = () => {
    return (
        <main>
            <Schedule schedule={[
                [
                    { name: "Meeting", teacher: "", periodStart: 1 },
                    { name: "Chem.", teacher: "Thanthapatra", periodStart: 2 },
                    { name: "Core Maths", teacher: "Kritchapon", periodStart: 3, duration: 2 },
                    { name: "", teacher: "", periodStart: 5, isBlank: true },
                    { name: "Thai", teacher: "Usa", periodStart: 6 },
                    { name: "Comm.", teacher: "Richard", periodStart: 7 },
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
                    { name: "", teacher: "", periodStart: 1 },
                    { name: "", teacher: "", periodStart: 2 },
                    { name: "", teacher: "", periodStart: 3, duration: 2 },
                    { name: "", teacher: "", periodStart: 6 },
                    { name: "", teacher: "", periodStart: 7 },
                    { name: "", teacher: "", periodStart: 8, duration: 2 },
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
        </main>
    );
}

export default SchedulePage;