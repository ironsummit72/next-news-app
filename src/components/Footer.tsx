import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
    return (
        <div className='footer border-top border-2  border-black mt-5'>
            <div className="container">
                <Link href={'/'}>
                 <Image alt='brand logo' src='/bbc.svg' height={80} width={80} />
                 </Link>
                 <ul className="row list-unstyled ">
                    <div className='gap-4 d-flex justify-content-sm-center justify-content-md-start'>
                    <li><Link className='text-none fw-bold text-dark' href={'/'}>Home</Link></li>
                    <li><Link className='text-none fw-bold text-dark' href={'/sport'}>Sport</Link></li>
                    <li><Link className='text-none fw-bold text-dark' href={'/business'}>Business</Link></li>
                    <li><Link className='text-none fw-bold text-dark' href={'/technology'}>Technology</Link></li>
                    <li><Link className='text-none fw-bold text-dark' href={'/culture'}>Culture</Link></li>
                    <li><Link className='text-none fw-bold text-dark' href={'/travel'}>Travel</Link></li>
                    </div>
                 </ul>
                <hr className=' border  border-black'/>
                <span className='footer-text'>{`Copyright ${new Date().getFullYear()} BBC. All rights reserved.  The BBC is not responsible for the content of external sites. Read about our approach to external linking.`}</span>
            </div>
        </div>
    )
}

export default Footer