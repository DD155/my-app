import { Article } from "../../../types"
import { GetServerSidePropsContext } from "next"

const CategoryPage = ({category, articles}:{category:string, articles:Article[]}) => {
    console.log(category, articles)
    return (
        <>
            <h1>Category: {category[0].toUpperCase() + category.substring(1)}</h1>
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

export const getServerSideProps = async (/*{params}: {params: {category: string}},*/context:GetServerSidePropsContext) => {
    const { req, res, query } = context
    const { params } = context

    console.log(req.headers.cookie,)
    res.setHeader('Set-Cookie', ['status=healthy'])
    const result = await fetch("http://localhost:4000/news")
    const data = await result.json()

    let articles = data
    let category:string = 'Category'
    if (params) {
        articles = data.filter((article:Article) => article.category.toLowerCase() === params.category)
        category = params.category as string
    }

    /*
    const articles = data.filter((article:Article) => article.category.toLowerCase() === params.category)
    return {
        props: {
            articles: articles,
            category: params.category
        }
    }
    */
    return {
        props: {
            articles: articles,
            category: category
        }
    }
}

export default CategoryPage