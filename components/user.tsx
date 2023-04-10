import { UserProp } from "../types"

const User = ({user} : UserProp) => {
    return (
        <>
            <h1>{user.name}</h1>
            <p>{user.username} : {user.phone}</p>
        </>
    )
}

export default User