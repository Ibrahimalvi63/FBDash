"use client"

import { useRouter } from "next/navigation"

export default function LogInBtn() {
    const router = useRouter();
    const handleLogIn = () => {
        router.push('/login')
    }
    return (
        <button onClick={handleLogIn} className="mt-2 px-5 py-2 border-0 outline-0 text-white bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Get started</button>
    )
}