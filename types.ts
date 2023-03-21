export interface User {
    name: string,
    id: number
}

export interface UserProp {
    user: User
}

export interface UserDataProp {
    users: User[]
}
