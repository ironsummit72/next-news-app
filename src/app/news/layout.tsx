import Link from 'next/link'
import { Metadata } from 'next'
import React from 'react'
type Props = {
    children: React.ReactNode
}
export const metadata: Metadata = {
    title: {
        default: "BBC",
        template: 'BBC News %s'
    },
    description: 'Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.'

}

function CountryNewsLayout({ children }: Props) {
    return (
        <>
            <nav className='bg-white h-20 w-100'>
                <ul className='d-flex justify-content-center  w-100 gap-4 list-unstyled border border-2 '>
                    <li><Link className='text-decoration-none text-dark' href={'/news/us'}>US</Link></li>
                    <li><Link className='text-decoration-none text-dark' href={'/news/uk'}>United Kingdom</Link></li>
                    <li><Link className='text-decoration-none text-dark' href={'/news/in'}>India</Link></li>
                    <li><Link className='text-decoration-none text-dark' href={'/news/au'}>Australia</Link></li>
                    <li><Link className='text-decoration-none text-dark' href={'/news/ca'}>Canada</Link></li>
                </ul>
            </nav>
            <main className='container'>
                <h1><span className='text-danger fw-bold'>News</span></h1>
                {children}
            </main>

        </>
    )
}

export default CountryNewsLayout