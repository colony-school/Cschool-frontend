// External modules import
import type { NextPage } from "next";
import Link from "next/link";

// Style sheet import
import styles from "../styles/pages/classrooms.module.scss";

// Internal modules import
import { Filter } from "../components/form/filter";

type Classroom = {
    id: number,
    name: string
}

function ClassroomRow({ classes, program }: { classes: Array<Classroom>, program: string }) {
    return (
        <div className={styles["program-container"]}>
            <h3 className={styles["program"]}>{program}</h3>
            <div className={styles["classes"]}>
                {classes.map(classroom => (
                    <Link href={`/classroom/1/${classroom.name}`} key={classroom.id}>
                        <a className={styles["class-pill"]}>{classroom.name}</a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

// Main component
const Classrooms: NextPage = () => {

    let m4elpus:Array<Classroom> = [
        {id: 1, name:"404"},
        {id: 2, name:"405"},
    ];

    let m4gate:Array<Classroom> = [
        {id: 3, name:"401"},
        {id: 4, name:"402"},
        {id: 5, name:"403"},
        {id: 6, name:"404"},
    ];


    return (
        <section className={styles["classrooms-card"]}>
            <div className={styles["school-filter"]}>
            </div>
            <div className={styles["grade-card"]}>
                <h2 className={styles["grade"]}>M.1</h2>
                <ClassroomRow classes={m4gate} program="Gate" />
                <ClassroomRow classes={m4elpus} program="E-Plus" />
            </div>
        </section>
    );
}

// Exports
export default Classrooms;