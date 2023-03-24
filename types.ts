export type UserType = {
    id: string,
    name: string,
    username: string,
    phone: string,
}

export type UserProp = {
    user: UserType
}

export type Post = {
    userId: string,
    id: string,
    title: string,
    body: string
}