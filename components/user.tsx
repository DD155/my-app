import { UserProp } from "@/types"

const User = ({user} : UserProp) => {
    return (
        <>
            <p>{user.name}</p>
            <p>{user.id}</p>
        </>
    )
}

export default User