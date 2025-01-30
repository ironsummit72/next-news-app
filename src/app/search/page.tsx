
import NewsCard from '@/components/NewsCard';
import { Articles } from '@/Types/NewsApi';
import { Metadata } from 'next';
import React from 'react'
type Props = {
    searchParams:Promise< { [key: string]: string | string[] | undefined }>
}
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const searchQuery=await searchParams
    return {
        title: `Search results for ${searchQuery["q"]}`,
        description: "Visit BBC for trusted reporting on the latest world and US news, sports, business, climate, innovation, culture and much more.",
    }
}
async function page({ searchParams }: Props) {
    const searchQuery=await searchParams
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery['q']}&apiKey=${process.env.API_KEY}`)
    const data = await response.json();
    return (
        <main className="page container con text-center">
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
        </main>
    )
}

export default page