import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Post } from "../../types"
import { NextRouter, useRouter } from "next/router"

const PostList = ( {posts}:InferGetStaticPropsType<typeof getStaticProps> ) => {
    const router:NextRouter = useRouter()

    const navigateToPost = (id:string) => {
        router.push(`/posts/${id}`)
    }
    return <>
        <h1> Posts </h1>
        {
            posts.map((post:Post) => {
                return (
                    <div onClick={() => navigateToPost(post.id)} key={post.id}>
                        <p> {post.title}</p>
                    </div>
                )
            })
        }
    </>
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            posts: data.slice(0, 5)
        }
    }
}

export default PostList