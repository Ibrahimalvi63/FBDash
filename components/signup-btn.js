"use client"

import { useRouter } from "next/navigation"

export default function SignUpBtn() {
    const router = useRouter();
    const handleSignUp = () => {
        router.push('/signup')
    }
    return (
        <button onClick={handleSignUp} className="mt-2 px-9 py-2 border-0 outline-0 text-white bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Sign up</button>
    )
}