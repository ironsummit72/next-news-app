import NewsCard from '@/components/NewsCard'
import { Articles } from '@/Types/NewsApi'
import { Metadata } from 'next'
import React from 'react'
type Props = {
    params: Promise<{ others: string }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { others } = await params
    const response = await fetch(`https://newsapi.org/v2/everything?q=${others}&apiKey=${process.env.API_KEY}`)
    const data = await response.json()
    return {
        title: data.articles[0].title ? data.articles[0].title : "unknown",
        description: data.articles[0].description ? data.articles[0].description : "unknown"
    }
}
async function OtherNews({ params }: Props) {
    const { others } = await params
    const response = await fetch(`https://newsapi.org/v2/everything?q=${others}&apiKey=${process.env.API_KEY}`)
    const data = await response.json()
    return (
        <div className="page container con text-center">
            <div className="row ">
                {data.articles.map((article: Articles) => (
                    <div className="col-sm col-md-6 col-lg-3 gy-5  d-flex justify-content-center" key={article.url}>
                        <NewsCard
                            source={article.url}
                            imageUrl={article?.urlToImage}
                            title={article.title}
                            description={article.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherNews