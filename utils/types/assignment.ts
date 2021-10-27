import { Post } from "./posts";

export type AssignmentStatus = "notStarted" | "started" | "pastDue";

export type AssignmentProps = {
    name: string,
    desc: string,
    due: Date,
    status: AssignmentStatus,
    related: Array<Post>,
    ggc?: string
}