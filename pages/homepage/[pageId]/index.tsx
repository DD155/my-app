import { NextRouter, useRouter } from 'next/router'

const Page = () => {
    const router:NextRouter = useRouter()
    const pageId = router.query.pageId
    
    
    return (
        <h1> Page {pageId} </h1>
    )
}

export default Page