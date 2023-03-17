import { NextRouter, useRouter } from 'next/router'

const Review = () => {
    const router:NextRouter = useRouter()
    const {pageId, reviewId} = router.query
    
    
    return (
        <h1> Review {reviewId} from Page {pageId} </h1>
    )
}

export default Review