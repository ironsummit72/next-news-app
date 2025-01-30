"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
function BusinessNavbar() {
const pathname=usePathname();
const isActive=(path:string)=> pathname===path
    return (
        <nav className='w-100 border border-2'>
            <ul className='d-flex justify-content-center   w-100 gap-4 list-unstyled  border-2 d-none d-lg-flex'>
                <li><Link className={isActive('/business/executive-lounge')?'underline-gap text-dark fw-bold':' text-decoration-none text-dark fw-bold'} href={'/business/executive-lounge'}>Executive Lounge</Link></li>
                <li><Link className={isActive('/business/technology')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/business/technology'}>Technology of Business</Link></li>
                <li><Link className={isActive('/business/future')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/business/future'}>Future of Business</Link></li>
                <li><Link className={isActive('/business/stockmarket')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/business/stockmarket'}>Stock Market</Link></li>
            </ul>
        </nav>
    )
}
export default BusinessNavbar