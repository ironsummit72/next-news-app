"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
function TechnologyNavbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path
    return (
        <nav className='w-100'>
            <ul className='d-flex justify-content-center   w-100 gap-4 list-unstyled  border-2 d-none d-lg-flex'>
                <li><Link className={isActive('/technology') ? 'underline-gap text-dark fw-bold' : ' text-decoration-none text-dark fw-bold'} href={'/technology'}>Technology</Link></li>
                <li><Link className={isActive('/technology/science') ? ' underline-gap text-dark fw-bold' : 'text-decoration-none text-dark fw-bold'} href={'/technology/science'}>{"Science & Health"}</Link></li>
            </ul>
        </nav>
    )
}
export default TechnologyNavbar