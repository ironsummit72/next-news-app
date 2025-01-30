"use client"
import { useSideBar } from '@/context/SideBarContext'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
const {toggleSideBar}=useSideBar() 
  const pathname=usePathname();
  const isActive=(path:string)=> pathname===path;
  return (
    <div className='sticky-top'>
        <button className='float-start p-2 no-border my-3 mx-2' onClick={toggleSideBar}><MenuIcon/></button>
      <header title='British Broadcasting Corporation' className='header   w-full bg-light flex  h-166px '>
        <Link href={'/'}>
          <Image alt='brand logo' src='/bbc.svg' height={80} width={80} />
        </Link>
      </header>
      <nav className='navbar bg-white border border-2 shadow-md d-none d-lg-block'>
        <ul className='d-flex justify-content-center  my-2 w-100 gap-4 list-unstyled '>
          <li><Link className={isActive('/')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/'}>Home</Link></li>
          <li><Link className={isActive('/sport')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/sport'}>Sport</Link></li>
          <li><Link className={isActive('/business')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/business'}>Business</Link></li>
          <li><Link className={isActive('/technology')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/technology'}>Technology</Link></li>
          <li><Link className={isActive('/culture')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/culture'}>Culture</Link></li>
          <li><Link className={isActive('/travel')?' underline-gap text-dark fw-bold':'text-decoration-none text-dark fw-bold'} href={'/travel'}>Travel</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar