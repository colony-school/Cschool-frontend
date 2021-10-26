// External modules import
import type { NextPage } from "next";
import Link from "next/link";
import { FunctionComponent } from "react";

// Style sheet import
import styles from "../styles/pages/classrooms.module.scss";

// Internal modules import
import { Filter } from "../components/form/filter";

type Classroom = {
    id: number,
    name: string
}

function ClassroomRow({ classes }: { classes:Array<Classroom> }) {
    return (
        <>
            {classes.map(classroom => (
                <Link href="/classroom/1/404">
                    <a className={styles["class-pill"]}>404</a>
                </Link>
            ))}
        </>
    )
}



// Main component
const Classrooms: NextPage = () => {

    let m4elpus:Array<Classroom> = [
        {id: 1, name:"404"},
        {id: 2, name:"405"},
    ];


    return (
        <section className={styles["classrooms-card"]}>
            <div className={styles["school-filter"]}>
            </div>
            <div className={styles["grade-card"]}>
                <h2 className={styles["grade"]}>M.1</h2>
                <div className={styles["program-container"]}>
                    <h3 className={styles["program"]}>E-Plus</h3>
                    <div className={styles["classes"]}>
                        <ClassroomRow classes={m4elpus} />
                    </div>
                </div>
                
            </div>
        </section>
    );
}




// Exports
export default Classrooms;