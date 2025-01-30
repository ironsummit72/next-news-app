import NewsCard from '@/components/NewsCard'
import { Articles } from '@/Types/NewsApi'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
    title:'Sport - Scores, Fixtures, News - Live Sport',
    description:'Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports.'
}

async function Sports() {
  const response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.API_KEY}`)
  const data=await response.json()
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

export default Sports