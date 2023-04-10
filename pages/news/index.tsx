import { GetServerSideProps } from "next"
import { Article } from "../../types"

const NewsPage = ({articles}:{articles:Article[]}) => {
    return (
        <>
            <h1 >Articles </h1>
            {
                articles.map((article:Article) => {
                    return (
                        <div key={article.id}>
                            <p> {article.title} | {article.description} </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async () => {
    const res = await fetch("http://localhost:4000/news")
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

export default NewsPage