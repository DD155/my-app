import { useEffect, useState } from "react";

const Dashboard = () => {
    type DashboardData = {
        posts: number,
        likes: number,
        followers: number,
        following: number
    }

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [dashboardData, setDashboardData] = useState<DashboardData>()

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:4000/dashboard")
            const data = await res.json()
            setDashboardData(data)
            setIsLoading(false) 
        })()
    }, [])

    return (
        <>
            { dashboardData && 
            <div>
                <h1> Welcome to the Dashboard</h1>
                <p>You are following {dashboardData.following} people</p>
                <p>You have {dashboardData.followers} followers</p>
                <p>You have created {dashboardData.posts} posts</p>
                <p>You have {dashboardData.likes} likes</p>
            </div>
            }
        
        </>
    )
}

export default Dashboard