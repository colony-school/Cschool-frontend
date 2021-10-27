import { AssignmentProps } from "./assignment";

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
        author: string,  // placeholder
        votes: number,
        body: string
    }>
}