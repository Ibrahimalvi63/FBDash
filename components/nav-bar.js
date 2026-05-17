
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NavBar() {
    const [active, setActive] = useState('dashboard')
    const [display, setDisplay] = useState('hidden')
    const router = useRouter()

    const handleDisplay = () => {
        setDisplay(display == 'hidden' ? 'block' : 'hidden')
    }

    const handleLogOut = async () => {
        const data = await fetch("/api/logout", { method: "POST" })
        router.push("/login");
        toast.success("Thank you, Welcome back again")
    }
    return (
        <div className="md:w-30 text-gray-300 bg-violet-950 md:bg-blue-900/10 md:border md:border-blue-500/20 md:px-2 md:py-40 fixed left-0 bottom-0 w-full md:h-screen md:flex md:flex-col z-50">

            <ul className={`md:block flex items-center justify-around md:gap-10`}>
                <li onClick={() => setActive('dashboard')} className={`flex-1 md:mb-3 ${active == 'dashboard' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard'}><div onClick={handleDisplay} className="flex items-center gap-1 flex-col md:flex-row"><div>📱</div><div className="text-xs">Dashboard</div></div></Link></li>
                <li onClick={() => setActive('orders')} className={`flex-1 md:mb-3 ${active == 'orders' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/orders'}><div className="flex items-center gap-1 flex-col md:flex-row"><div>📦</div><div className="text-xs">Orders</div></div></Link></li>
                <li onClick={() => setActive('customers')} className={`flex-1 md:mb-3 ${active == 'cutomers' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/customers'}><div className="flex items-center gap-1 flex-col md:flex-row"><div>👤</div><div className="text-xs">Customers</div></div></Link></li>
                <li onClick={() => setActive('options')} className={`flex-1 md:mb-3 ${active == 'options' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl relative md:hidden`}><button onClick={handleDisplay}><div className="flex items-center gap-1 flex-col md:flex-row"><div>⌘</div><div className="text-xs">Options</div></div></button></li>
            </ul>

            <ol onClick={handleDisplay} className={`${display} fixed right-5 bottom-16 md:block md:static`}>
                <li onClick={() => setActive('delivery')} className={`mb-3 ${active == 'delivery' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/delivery'}><div className="flex items-center gap-1"><div>🚚</div><div className="text-xs">Delivery</div></div></Link></li>
                <li onClick={() => setActive('analytics')} className={`mb-3 ${active == 'analytics' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/analytics'}><div className="flex items-center gap-1"><div>📊</div><div className="text-xs">Analytics</div></div></Link></li>
                <li onClick={() => setActive('ai')} className={`mb-3 ${active == 'ai' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/ai'}><div className="flex items-center gap-1"><div>🤖</div><div className="text-xs">AI Robot</div></div></Link></li>
                <li onClick={() => setActive('setting')} className={`mb-3 ${active == 'setting' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/setting'}><div className="flex items-center gap-1"><div>⚙️</div><div className="text-xs">Setting</div></div></Link></li>
                <li onClick={() => setActive('logout')} className={`mb-3 ${active == 'logout' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={''} onClick={handleLogOut}><div className="flex items-center gap-1"><div>🔓</div><div className="text-xs">Logout</div></div></Link></li>
            </ol>

        </div>
    )
}