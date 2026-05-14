"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NavBar() {
    const [display, setDisplay] = useState('hidden');
    const router = useRouter()

    const handleDisplay = () => {
        setDisplay(display == 'hidden' ? 'block' : 'hidden')
    }

    const handleLogOut = () => {
        router.push('/')
    }
    return (
        <div className="bg-violet-800 absolute bottom-0 w-full md:flex md:justify-center z-50">

            <ul className={`flex items-center justify-around md:gap-10`}>
                <li className="flex-1 active:bg-green-500/40 text-center p-4 text-2xl"><Link href={'/dashboard'}>📱</Link></li>
                <li className="flex-1 active:bg-green-500/40 text-center p-4 text-xl"><Link href={'/dashboard/orders'}>📦</Link></li>
                <li className="flex-1 active:bg-green-500/40 text-center p-4 text-xl"><Link href={'/dashboard/customers'}>👤</Link></li>
                <li onClick={handleDisplay} className="flex-1 active:bg-green-500/40 text-center p-4 text-2xl relative md:hidden">⌘</li>
            </ul>

            <ol onClick={handleDisplay} className={`${display} absolute right-5 bottom-16 md:flex md:justify-around md:static md:gap-10`}>
                <li className="mb-1 p-4 active:bg-blue-400/40 text-2xl"><Link href={'/dashboard/delivery'}>🚚</Link></li>
                <li className="mb-1 p-4 active:bg-blue-400/40 text-2xl"><Link href={'/dashboard/analytics'}>📊</Link></li>
                <li className="mb-1 p-4 active:bg-blue-400/40 text-2xl"><Link href={'/dashboard/ai'}>🤖</Link></li>
                <li className="mb-1 p-4 active:bg-blue-400/40 text-2xl"><Link href={'/dashboard/setting'}>⚙️</Link></li>
                <li onClick={handleLogOut} className="mb-1 p-4 active:bg-blue-400/40 text-2xl">↩️</li>
            </ol>

        </div>
    )
}