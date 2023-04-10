import User from '../components/user'
import { UserType } from '../types'
import { InferGetStaticPropsType } from 'next'

const UserList = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(data)
    return <>
        <h1> Users </h1>
       {data.map((user:UserType) => {
            return (
                <div key={user.id}>
                    <User user={user}/>
                </div>
            )
       })}
    </>
}

export default UserList

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    console.log(data)

    return {
        props: {data},
    }
}