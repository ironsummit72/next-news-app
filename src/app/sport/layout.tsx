import SportsNavbar from '@/components/SportsNavbar'
import { Metadata } from 'next'
import React from 'react'
type Props = {
    children: React.ReactNode
}
export const metadata:Metadata={
    title:{
        default:'Sport - Scores, Fixtures, News - Live Sport',
        template:'BBC Sport - %s'
    },
    description:'Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports.'
  }
function SportNewsLayout({ children }: Props) {
    return (
        <>
            <SportsNavbar />
            <main className='container '>
                <h1><span className='text-danger fw-bold'>Sport News</span></h1>
                {children}
            </main>

        </>
    )
}
export default SportNewsLayout