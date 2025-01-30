import BusinessNavbar from '@/components/BusinessNavbar'
import { Metadata } from 'next'

import React from 'react'
type Props = {
    children: React.ReactNode
}
export const metadata: Metadata = {
    title: {
        default: ' Business',
        template: 'BBC Business | %s'
    },
    description: 'BBC Business brings you the latest in Business news and coverage from around the world, including tech, personal finance, companies, employment, the economy and more'
}
function BusinessNewsLayout({ children }: Props) {
    return (
        <>
            <BusinessNavbar />
            <main className='container'>
                <h1><span className='text-danger fw-bold'>Business News</span></h1>
                {children}
            </main>

        </>
    )
}
export default BusinessNewsLayout