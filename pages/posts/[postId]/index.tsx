import { NextRouter, useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { Post } from "@/types"
import Link from "next/link"

interface Params extends ParsedUrlQuery {
    postId: string
}

const PageDetails = ({post}:{post: Post}) => {
    const router:NextRouter = useRouter()

    if (router.isFallback) {
        return (
            <>
                <h1> Loading... </h1>
            </>
        )
    }
    //const { postId }:string = router.query



    return <>
        <h1> Post {post.id}</h1>
        <p> {post.title} </p>
        <p> {post.body} </p>

        <Link href='/posts' replace> Go back </Link>
    </>

}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const results = await res.json()

    return {
        paths: results.map((post:Post) => {
            return {
                params: {
                    postId: `${post.id}`
                }
            }
        }),
        fallback: true
    }
}

export const getStaticProps = async ({params}: {params: {postId:string}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}



export default PageDetails