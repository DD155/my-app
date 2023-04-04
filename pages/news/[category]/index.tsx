import { Article } from "@/types"

const CategoryPage = ({category, articles}:{category:string, articles:Article[]}) => {
    return (
        <>
            <h1>{category}</h1>
            {
                articles.map((article:Article) => {
                    return (
                        <>
                            <p key={article.id}> {article.title} | {article.description} </p>
                            <hr/>
                        </>
                    )
                })
            }
        </>
    )
}

export const getServerSideProps = async ({params}: {params: {category: string}}) => {
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()

    const articles = data.filter((article:Article) => article.category.toLowerCase() === params.category)
    return {
        props: {
            articles: articles,
            category: params.category
        }
    }
}

export default CategoryPage