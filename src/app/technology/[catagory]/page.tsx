import NewsCard from '@/components/NewsCard'
import { Articles } from '@/Types/NewsApi'
import React from 'react'
import { Metadata } from 'next'
type Props={
  params:Promise<{catagory:string}>
}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {catagory}=await params
  const response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${process.env.API_KEY}`)
  const data=await response.json()
  return {
    title:data.articles[0].title?data.articles[0].title:catagory,
    description:data.articles[0].description?data.articles[0].description:catagory
  }
}
async function Technology({params}:Props) {
const {catagory}=await params
  const response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${process.env.API_KEY}`)
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
export default Technology