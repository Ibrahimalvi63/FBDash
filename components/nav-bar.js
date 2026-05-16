
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NavBar() {
    const [display, setDisplay] = useState('hidden')
    const router = useRouter()

    const handleDisplay = () => {
        setDisplay(display == 'hidden' ? 'block' : 'hidden')
    }

    const handleLogOut = async () => {
        const data = await fetch("/api/logout", { method: "POST" })
        router.push("/login");
    }
    return (
        <div className="bg-violet-800 fixed bottom-0 w-full md:flex md:justify-center md:gap-10 z-50">

            <ul className={`text-white flex items-center justify-around md:gap-10`}>
                <li className="flex-1 active:bg-green-500/40 text-center p- text-xl"><Link href={'/dashboard'}><div className="flex flex-col"><div>📱</div><div className="text-xs">Dashboard</div></div></Link></li>
                <li className="flex-1 active:bg-green-500/40 text-center p-1 text-xl"><Link href={'/dashboard/orders'}><div className="flex flex-col"><div>📦</div><div className="text-xs">Orders</div></div></Link></li>
                <li className="flex-1 active:bg-green-500/40 text-center p-1 text-xl"><Link href={'/dashboard/customers'}><div className="flex flex-col"><div>👤</div><div className="text-xs">Customers</div></div></Link></li>
                <li className="flex-1 active:bg-green-500/40 text-center p-1 text-xl relative md:hidden"><button onClick={handleDisplay}><div className="flex flex-col"><div>⌘</div><div className="text-xs">Options</div></div></button></li>
            </ul>

            <ol onClick={handleDisplay} className={`${display} text-black md:text-white fixed right-5 bottom-16 md:flex md:justify-around md:static md:gap-10`}>
                <li className="mb-1 p-1 active:bg-blue-400/40 text-xl"><Link href={'/dashboard/delivery'}><div className="flex items-center gap-1 md:flex-col"><div>🚚</div><div className="text-xs">Delivery</div></div></Link></li>
                <li className="mb-1 p-1 active:bg-blue-400/40 text-xl"><Link href={'/dashboard/analytics'}><div className="flex items-center gap-1 md:flex-col"><div>📊</div><div className="text-xs">Analytics</div></div></Link></li>
                <li className="mb-1 p-1 active:bg-blue-400/40 text-xl"><Link href={'/dashboard/ai'}><div className="flex items-center gap-1 md:flex-col"><div>🤖</div><div className="text-xs">AI Robot</div></div></Link></li>
                <li className="mb-1 p-1 active:bg-blue-400/40 text-xl"><Link href={'/dashboard/setting'}><div className="flex items-center gap-1 md:flex-col"><div>⚙️</div><div className="text-xs">Setting</div></div></Link></li>
                <li className="mb-1 p-1 active:bg-blue-400/40 text-xl"><button onClick={handleLogOut}><div className="flex items-center gap-1 md:flex-col"><div>🔓</div><div className="text-xs">Logout</div></div></button></li>
            </ol>

        </div>
    )
}