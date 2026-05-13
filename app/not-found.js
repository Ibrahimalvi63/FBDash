"use client"

import Link from "next/link"


export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-blue-300 flex items-center justify-center">
            <div className="p-4 w-5/6 bg-white rounded-2xl relative shadow-2xl">
                <p className="absolute h-25 w-25 flex items-center justify-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white font-bold text-4xl rounded-full">404</p>
                <p className="mt-15 text-center font-bold text-2xl">Page not found</p>
                <p className="text-gray-900">The page you are looking for doesn't exist or has been removed</p>
                <div className="flex items-center justify-around mt-5 mb-2">
                    <Link href={'/'}>
                        <button className="px-5 py-1 text-white rounded-4xl shadow hover:shadow-amber-400 bg-green-500 hover:bg-green-600">Go home</button>
                    </Link>
                    <button onClick={() => window.history.back()} className="px-5 py-1 text-white rounded-4xl shadow hover:shadow-amber-400 bg-green-500 hover:bg-green-600">Go back</button>
                </div>
            </div>
        </div>
    )
}