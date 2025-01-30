import NewsCard from '@/components/NewsCard';
import React from 'react'
type Props = {
    params: Promise<{ country: string }>
}
import { Articles } from '@/Types/NewsApi';
async function TopNews({ params }: Props) {
    const {country}=await params
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`)
    const data = await response.json();
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

export default TopNews