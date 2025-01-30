import React from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string,
    title: string,
    description: string
    source: string
}
function NewsCard({ imageUrl, title, description, source }: Props) {
    return (
        <a className='text-decoration-none' href={source}>
            <div className="card">
                <Image width={400} height={200} src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </a>
    )
}
export default NewsCard