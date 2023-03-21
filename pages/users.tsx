import { GetStaticProps } from 'next'
import User from '@/components/user'
import { UserDataProp } from '@/types'
import { InferGetStaticPropsType } from 'next'

type User = {
    id: string,
    name: string
}

const UserList = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(data)
    return <>
        <h1> Users </h1>
       {data.map((user:User) => {
            return (
                <div key={user.id}>
                    <h1> {user.name}</h1>
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