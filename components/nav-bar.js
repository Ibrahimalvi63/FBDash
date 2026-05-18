
"use client"

import { ShoppingCart, Crown } from "lucide-react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function NavBar() {
    const [active, setActive] = useState('dashboard')
    const [display, setDisplay] = useState('hidden')
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        setActive(pathName)
    }, [pathName])

    const handleDisplay = () => {
        setDisplay(display == 'hidden' ? 'block' : 'hidden')
    }
    const optionHide = () => {
        setDisplay('hidden')
    }

    const handleLogOut = async () => {
        const data = await fetch("/api/logout", { method: "POST" })
        router.push("/login");
        toast.success("Thank you, Welcome back again")
    }
    return (
        <div className="md:w-45 text-gray-300 bg-violet-950 md:bg-blue-900/10 md:border md:border-blue-500/20 md:px-2 fixed left-0 bottom-0 md:top-0 w-full md:min-h-screen md:flex md:flex-col z-50">

            <div className="hidden md:flex md:items-center md:justify-center md:gap-2 mt-5 mb-10">
                <div className="flex items-center justify-center bg-blue-500/40 w-12 h-12 rounded-full">
                    <ShoppingCart size={22} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-blue-500">FBDash</h1>
                    <p className="text-sm">Smart Business</p>
                </div>
            </div>

            <ul className={`md:block flex items-center justify-around md:gap-10`}>
                <li onClick={() => setActive('dashboard')} className={`flex-1 md:mb-3 ${active == '/dashboard' ? 'bg-blue-500/50' : ''} ${active == 'dashboard' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard'}><div onClick={optionHide} className="flex items-center gap-1 flex-col md:flex-row"><div>📱</div><div className="text-xs">Dashboard</div></div></Link></li>
                <li onClick={() => setActive('orders')} className={`flex-1 md:mb-3 ${active == '/dashboard/orders' ? 'bg-blue-500/50' : ''} ${active == 'orders' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/orders'}><div onClick={optionHide} className="flex items-center gap-1 flex-col md:flex-row"><div>📦</div><div className="text-xs">Orders</div></div></Link></li>
                <li onClick={() => setActive('customers')} className={`flex-1 md:mb-3 ${active == '/dashboard/customers' ? 'bg-blue-500/50' : ''} ${active == 'customers' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/customers'}><div onClick={optionHide} className="flex items-center gap-1 flex-col md:flex-row"><div>👤</div><div className="text-xs">Customers</div></div></Link></li>
                <li onClick={() => setActive('options')} className={`flex-1 md:mb-3 ${active == 'options' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl relative md:hidden`}><button onClick={handleDisplay}><div className="flex items-center gap-1 flex-col md:flex-row"><div>⌘</div><div className="text-xs">Options</div></div></button></li>
            </ul>

            <ol onClick={handleDisplay} className={`${display} fixed right-5 bottom-16 md:block md:static`}>
                <li className={`mb-3 ${active == '/dashboard/delivery' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/delivery'}><div className="flex items-center gap-1"><div>🚚</div><div className="text-xs">Delivery</div></div></Link></li>
                <li className={`mb-3 ${active == '/dashboard/analytics' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/analytics'}><div className="flex items-center gap-1"><div>📊</div><div className="text-xs">Analytics</div></div></Link></li>
                <li className={`mb-3 ${active == '/dashboard/ai' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/ai'}><div className="flex items-center gap-1"><div>🤖</div><div className="text-xs">AI Robot</div></div></Link></li>
                <li className={`mb-3 ${active == '/dashboard/setting' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={'/dashboard/setting'}><div className="flex items-center gap-1"><div>⚙️</div><div className="text-xs">Setting</div></div></Link></li>
                <li onClick={() => setActive('logout')} className={`mb-3 ${active == 'logout' ? 'bg-blue-500/50' : ''} rounded text-center p-1 text-xl`}><Link href={''} onClick={handleLogOut}><div className="flex items-center gap-1"><div>🔓</div><div className="text-xs">Logout</div></div></Link></li>
            </ol>

            <div className="mx-1 my-5 p-1 hidden md:block rounded bg-white/5 backdrop-blur-2xl border border-gray-500/50 shadow-2xl">
                <div className="flex items-center gap-2 text-blue-600 my-2">
                    <Crown size={20} />
                    <h3 className="font-bold text-sm">Upgrade to pro</h3>
                </div>
                <p className="text-xs text-gray-400/90 my-1">Unlock more feature and grow your business faster</p>
                <Link href={'/pricing'}><button className="text-center w-full p-1 text-gray-300 bg-blue-500/50 shadow hover:shadow-amber-500 rounded text-sm">Upgrade Now</button></Link>
            </div>

        </div >
    )
}