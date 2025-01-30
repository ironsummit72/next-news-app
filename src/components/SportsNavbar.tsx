"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
function SportsNavbar() {
const pathname=usePathname();
const isActive=(path:string)=> pathname===path
    return (
        <nav className='bg-warning w-100 sportnav '>
            <ul className='d-flex justify-content-center   w-100 gap-4 list-unstyled  border-2 '>
                <li><Link className={isActive('/sport')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport'}>Home</Link></li>
                <li><Link className={isActive('/sport/football')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport/football'}>Football</Link></li>
                <li><Link className={isActive('/sport/cricket')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport/cricket'}>Cricket</Link></li>
                <li><Link className={isActive('/sport/formula1')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport/formula1'}>Formula One</Link></li>
                <li><Link className={isActive('/sport/golf')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport/golf'}>Golf</Link></li>
                <li><Link className={isActive('/sport/tennis')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport/tennis'}>Tennis</Link></li>
            </ul>
        </nav>
    )
}
export default SportsNavbar