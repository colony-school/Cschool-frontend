import { AssignmentProps } from "./assignment";
import { User } from "./user";

export type Post = SharedFilePost | AnnouncementPost;

export type SharedFilePost = {
    type: "sharedFile",
    annotation: string,
    links: Array<AssignmentProps>,
    usePolicies: [
        "noParaphrase"?,
        "noCopy"?,
        "noShare"?
    ],
    file: string
}

export type AnnouncementPost = {
    type: "announcement",
    body: string
}

export type ProblemDiscussionPost = {
    type: "problemDiscussion",
    annotation: string,
    question: string,
    answers: Array<{
        author: User,
        votes: number,
        body: string
    }>
}