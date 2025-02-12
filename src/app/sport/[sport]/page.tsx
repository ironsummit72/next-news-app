"use client"
import NewsCard from '@/components/NewsCard'
import { Articles } from '@/Types/NewsApi'

import { use,useEffect, useState } from 'react'

type Props = {
  params:Promise< { sport: string }>
}
export default function Sports({ params }: Props) {
  const [data, setData] = useState<Articles[]>([])
  const sport = use(params).sport 
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `/api/sport/${sport}`
        );
        const apidata = await response.json();
        setData(apidata.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    getData();
  }, [sport]);
  return (
    <div className="page container text-center">
      <div className="row">
        {data.length > 0 ? (
          data.map((article) => (
            <div className="col-sm col-md-6 col-lg-3 gy-5 d-flex justify-content-center" key={article.url}>
              <NewsCard
                source={article.url}
                imageUrl={article?.urlToImage}
                title={article.title}
                description={article.description}
              />
            </div>
          ))
        ) : (
          <p>Loading news...</p> 
        )}
      </div>
    </div>
  );
}
