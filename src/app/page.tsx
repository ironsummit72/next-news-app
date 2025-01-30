import NewsCard from "@/components/NewsCard";
import { Articles } from "@/Types/NewsApi";
import {Metadata} from 'next'

export const metadata:Metadata={
  title:"Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio",
  description:"Visit BBC for trusted reporting on the latest world and US news, sports, business, climate, innovation, culture and much more.",
}
export default async function HomePage() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
  const data = await response.json()
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
  );
}
