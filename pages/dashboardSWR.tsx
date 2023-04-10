
import useSWR from 'swr'

const fetcher = async () => {
    const res = await fetch("http://localhost:4000/dashboard")
    const data = await res.json()
    return data
}

const DashboardSWR = () => {
    const {data, error} = useSWR('dashboard', fetcher)

    if (error) return "Error"

    return (
        <>
            { data && 
            <div>
                <h1> Welcome to the Dashboard-SWR</h1>
                <p>You are following {data.following} people</p>
                <p>You have {data.followers} followers</p>
                <p>You have created {data.posts} posts</p>
                <p>You have {data.likes} likes</p>
            </div>
            }
        
        </>
    )
}

export default DashboardSWR
