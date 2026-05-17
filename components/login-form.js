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
        <div className="w-full md:w-3/5 mb-50">

            <div className="border-4 border-blue-400 backdrop-blur-lg bg-blue-300/40 p-5 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Login</h3>

                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="mt-10 text-3xl font-bold">Welcome Back</h1>
                    <p className="text-sm">Login to your account to continue</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col mt-10">
                    <label className="flex flex-col">
                        <p className="font-semibold">Username or Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Input your email" required className="p-2 bg-gray-100 border-0 outline-0 shadow rounded mb-3" />
                    </label>

                    <label className="flex flex-col mt-1">
                        <p className="font-semibold">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Input your password" required className="p-2 bg-gray-100 border-0 outline-0 shadow rounded mb-3" />
                    </label>

                    <div className="flex justify-between items-center">
                        <label className="flex gap-2">
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link className="text-blue-600" href={'/'}>Forgot password?</Link>
                    </div>

                    <div className="flex items-center justify-center">
                        <button type="submit" className="mt-8 px-3 py-1 rounded-2xl bg-blue-400 w-5/12 border-0 outline-0 shadow-2xl hover:shadow hover:shadow-amber-400">Login</button>
                    </div>
                </form>
            </div>

            <p className="py-2">If you don't have any account. <span className="text-blue-400"><Link href={'/signup'}>Sign up</Link></span></p>
        </div>
    )
}