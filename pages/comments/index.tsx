import { useEffect, useState } from "react"

const CommentsPage = () => {
    type CommentData = {
        id: number, 
        text: string
    }

    const [comments, setComments] = useState<CommentData[]>()
    const [comment, setCommment] = useState<string>('')

    const submitComment = async () => {
        const res = await fetch("http://localhost:3000/api/comments", {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
        window.location.reload()
    }
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const text:string = event.target.value
        setCommment(text)
    }

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch("http://localhost:3000/api/comments")
            const data = await res.json()
            console.log(data)
            setComments(data)
        }
        fetchComments()
    }, [])

    return (
        <>
            { comments && 
            <div> 
                <h1> Comments Page </h1>
                {comments.map(comment => {
                    return <div key={comment.id}>
                        Comment {comment.id} - {comment.text}
                    </div>
                })}
            </div>
            }

            <div>
                <label> Enter a comment</label>
                <input type='textarea' onChange={inputHandler}>
                </input>
                <button onClick={submitComment}> Submit </button>

            </div>

        </>
    )
}

export default CommentsPage