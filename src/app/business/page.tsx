import NewsCard from '@/components/NewsCard'
import { Articles } from '@/Types/NewsApi'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata={
title:'Economy, Tech, AI, Work, Personal Finance, Market news',
description:'BBC Business brings you the latest in Business news and coverage from around the world, including tech, personal finance, companies, employment, the economy and more'
}

async function Business() {
    const response=await fetch(`https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${process.env.API_KEY}`)
    const data=await response.json()

  return (
    <div className="page container con text-center">
    <div className="row ">
        {data.articles.map((article: Articles) => (
            <div className="col-sm col-md-6 col-lg-4 gy-5  d-flex justify-content-center" key={article.url}>
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

export default Business