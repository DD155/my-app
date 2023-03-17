import { NextRouter, useRouter } from 'next/router'

const Doc = () => {
    const router:NextRouter = useRouter()
    const { params = []} = router.query

    if (params.length === 2)
        return (
            <h1> Viewing {params[0]}, {params[1]}</h1>
        )

    return <h1> Docs Home Page </h1>
}

export default Doc

