"use client"

import { useRouter } from "next/navigation"

export default function Button({ name, href, color }) {
    const router = useRouter();
    const handleNavigation = () => {
        router.push(`/${href}`)
    }
    return (
        <button style={{ backgroundColor: `${color}` }} onClick={handleNavigation} className={`mt-6 hover:bg-blue-700 text-white px-8 py-2 rounded-4xl transition`}>
            {name}
        </button>
    )
}