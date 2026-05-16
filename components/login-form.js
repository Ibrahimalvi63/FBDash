"use client"

import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message)
                return
            }

            toast.success("Login successful")
            window.location.href = "/dashboard";

        } catch (err) {
            toast.error("Something went wrong")
            console.error(err)
        }
    }

    return (
        <div className="w-full md:w-3/5">

            <div className="border-4 border-blue-400 backdrop-blur-lg bg-blue-300/40 p-5 rounded-2xl ">
                <h3 className="text-2xl font-bold mb-8">Login</h3>
                <form onSubmit={handleLogin} className="flex flex-col">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Input your email" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Input your password" required className="p-2 bg-gray-100 rounded mb-3" />

                    <div className="flex items-center justify-center">
                        <button type="submit" className="mt-5 px-3 py-1 rounded-2xl bg-blue-400 w-4/12">Login</button>
                    </div>
                </form>
            </div>

            <p className="py-2">If you don't have any account. <span className="text-blue-400"><Link href={'/signup'}>Sign up</Link></span></p>
        </div>
    )
}