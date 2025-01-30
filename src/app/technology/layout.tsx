import TechnologyNavbar from '@/components/TechnologyNavbar'
import { Metadata } from 'next'
import React from 'react'
type Props = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
        default: 'BBC Technology',
        template: 'BBC Technology - %s'
    },
    description: 'BBC Technology brings you the latest in Technology news and coverage from around the world, including health, environment, AI, and more'
}
function TechnologyNewsLayout({ children }: Props) {
    return (
        <>
            <TechnologyNavbar />
            <main className='container '>
                <h1><span className='text-danger fw-bold'>Technology</span></h1>
                {children}
            </main>

        </>
    )
}
export default TechnologyNewsLayout