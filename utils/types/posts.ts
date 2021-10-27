import { AssignmentProps } from "./assignment";
import { User } from "./user";

export type Post = AnnouncementPost | ProblemDiscussionPost | SharedFilePost;

export type AnnouncementPost = {
    type: "announcement",
    id: string,
    body: string
}

export type SharedFilePost = {
    type: "sharedFile",
    id: string,
    annotation: string,
    links: Array<AssignmentProps>,
    usePolicies: {
        "noParaphrase": boolean,
        "noCopy": boolean,
        "noShare": boolean
    },
    file: string
}

export type ProblemDiscussionPost = {
    type: "problemDiscussion",
    id: string,
    annotation: string,
    question: string,
    answers: Array<{
        author: User,
        votes: number,
        body: string
    }>
}