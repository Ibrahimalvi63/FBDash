"use client"

import Link from "next/link";
import { useState } from "react"

export default function LandingNav() {
    const [display, setDisplay] = useState('hidden');
    const [button, setButton] = useState(true);

    const handleMenu = () => {
        setDisplay(display == 'hidden' ? 'block' : 'hidden');
        setButton(!button)
    }
    return (
        <div className="w-full px-5 py-2 bg-blue-500 text-gray-200">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl text-gray-200 font-bold">FBDash</h1>
                    <h2 className="text-gray-200">Smart solution for facebook bussiness</h2>
                </div>

                <div className="relative z-50">
                    <button className="md:hidden" onClick={handleMenu}>
                        {button ? <div className="text-2xl font-bold px-2 border rounded">☰</div> : <div className="text-2xl font-bold px-2 border rounded">✕</div>}
                    </button>

                    <ul className={`${display} md:flex items-center justify-around gap-10 absolute md:static mt-6 md:mt-0 right-0 bg-white/20 md:bg-transparent backdrop-blur-sm px-10 py-5 rounded`}>
                        <li className="border-b md:border-0 mb-2" onClick={handleMenu}><Link href={'/'}>Home</Link></li>
                        <li className="border-b md:border-0 mb-2" onClick={handleMenu}><Link href={'/pricing'}>Pricing</Link></li>
                        <li className="border-b md:border-0 mb-2" onClick={handleMenu}><Link href={'/signup'}>SignUp</Link></li>
                        <li className="border-b md:border-0" onClick={handleMenu}><Link href={'/login'}>LogIn</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}