"use client"
import { useSideBar } from '@/context/SideBarContext'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
function SideNavBar() {
    const { isSideBarOpen,toggleSideBar } = useSideBar()
    const [value, setValue] = useState<string>('')
    const [isOpenSports, setIsOpenSports] = useState<boolean>(false)
    const [isOpenBusiness, setIsOpenBusiness] = useState<boolean>(false)
    const [isOpenTechnology, setIsOpenTechnology] = useState<boolean>(false)
    const router = useRouter();
    return (
        <div className={isSideBarOpen ? 'wrapper z-3 collapse.show' : 'collapse'}>
            <aside className='position-fixed h-screen w-sm-50 w-md-25 w-lg-25 bg-white z-3 '>
                <ul className='d-flex flex-column justify-content-center  w-100 gap-4 list-unstyled mx-2 '>
                    <div title='Search news,topics and more' className='d-flex gap-2 w-100 my-4 '><input className='border-3' value={value} onChange={(e) => { setValue(e.target.value) }} type="text" placeholder='Search news,topics and more' /><button onClick={() => { router.push(`/search?q=${value}`) 
                        toggleSideBar()
                    }} className="btn bg-dark "><Search color='white' /></button></div>
                    <li><Link className='text-decoration-none text-dark p-2' href={'/'}>Home</Link></li>
                    <li>
                        <button
                            className="btn text-dark w-100 text-start p-2"
                            onClick={() => setIsOpenSports(!isOpenSports)}
                            aria-expanded={isOpenSports}
                            aria-controls="sportsMenu"
                        >
                            Sports <span>{isOpenSports ? "▲" : "▼"}</span>
                        </button>
                        <div id="sportsMenu" className={`collapse ${isOpenSports ? "show" : ""}`}>
                            <ul className="list-unstyled ps-3">
                                <li>
                                    <Link href="/sport" className="text-black text-decoration-none d-block p-2">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sport/football" className="text-black text-decoration-none d-block p-2">
                                        Football
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sport/cricket" className="text-black text-decoration-none d-block p-2">
                                        Cricket
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sport/formula1" className="text-black text-decoration-none d-block p-2">
                                        Formula One
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sport/golf" className="text-black text-decoration-none d-block p-2">
                                        Golf
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sport/tennis" className="text-black text-decoration-none d-block p-2">
                                        Tennis
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button
                            className="btn text-dark w-100 text-start p-2"
                            onClick={() => setIsOpenBusiness(!isOpenBusiness)}
                            aria-expanded={isOpenBusiness}
                            aria-controls="sportsMenu"
                        >
                            Business <span>{isOpenBusiness ? "▲" : "▼"}</span>
                        </button>
                        <div id="sportsMenu" className={`collapse ${isOpenBusiness ? "show" : ""}`}>
                            <ul className="list-unstyled ps-3">
                                <li>
                                    <Link href="/business/executive-lounge" className="text-black text-decoration-none d-block p-2">
                                        Executive Lounge
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business/technology" className="text-black text-decoration-none d-block p-2">
                                        Technology Of Business
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business/future" className="text-black text-decoration-none d-block p-2">
                                        Future of Business
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business/stockmarket" className="text-black text-decoration-none d-block p-2">
                                        Stock Market
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button
                            className="btn text-dark w-100 text-start p-2"
                            onClick={() => setIsOpenTechnology(!isOpenTechnology)}
                            aria-expanded={isOpenTechnology}
                            aria-controls="sportsMenu"
                        >
                            Technology <span>{isOpenTechnology ? "▲" : "▼"}</span>
                        </button>
                        <div id="sportsMenu" className={`collapse ${isOpenTechnology ? "show" : ""}`}>
                            <ul className="list-unstyled ps-3">
                                <li>
                                    <Link href="/technology/science" className="text-black text-decoration-none d-block p-2">
                                        {"Science & Health"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/culture" className="text-black text-decoration-none d-block p-2">
                            Culture
                        </Link>
                    </li>
                    <li>
                        <Link href="/travel" className="text-black text-decoration-none d-block p-2">
                            Travel
                        </Link>
                    </li>


                </ul>
            </aside>

        </div>
    )
}
export default SideNavBar