"use client"

import Link from "next/link"
import { useEffect } from "react"


export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
            <div className="p-4 w-5/6 bg-white/5 backdrop-blur-lg rounded-2xl relative shadow-2xl">
                <h1 className="text-center text-6xl">😵</h1>
                <h2 className="text-xl text-center font-bold mt-5 mb-3">Something broke, but we're fix it 😅</h2>
                <p>Don't worry, it happens sometimes. Try again or go back home</p>

                <div className="flex items-center justify-around mt-5 mb-2">
                    <Link href={'/'}>
                        <button className="px-5 py-1 text-white rounded-4xl shadow hover:shadow-amber-400 bg-green-500 hover:bg-green-600">Go home</button>
                    </Link>
                    <button onClick={() => reset()} className="px-5 py-1 text-white rounded-4xl shadow hover:shadow-amber-400 bg-green-500 hover:bg-green-600">Reset</button>
                </div>
            </div>
        </div>
    )
}