export type User = {
    id: string,
    username: string,
    email: string,
    type: "student" | "teacher" | "admin",
    studentID?: string,
    profile?: string,
    bio?: string,
    room: string,  // placeholder
    active: boolean,
    isAdmin: boolean
}