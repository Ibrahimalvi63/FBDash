"use client"

import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Password do not match")
            return
        }

        const formData = { name, email, password };
        try {
            const res = await fetch('/api/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message);
                return
            }

            toast.success("Account created successfully");
            window.location.href = "/login";

        } catch (err) {
            toast.error("Something went wrong")
        }
    }


    return (
        <div className="w-full md:w-3/5">

            <div className="border-4 border-blue-400 backdrop-blur-lg bg-blue-300/40 p-5 rounded-2xl ">
                <h3 className="text-2xl font-bold mb-8">Sign up</h3>
                <form onSubmit={handleSignup} className="flex flex-col">
                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Input your name" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Input your email" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Input your password" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="text" name="password" placeholder="Confirm your password" required className="p-2 bg-gray-100 rounded mb-3" />

                    <div className="flex items-center justify-center">
                        <button type="submit" className="mt-5 px-3 py-1 rounded-2xl bg-blue-400 w-4/12">Submit</button>
                    </div>
                </form>
            </div>

            <p className="py-2">Already have an account? <span className="text-blue-400"><Link href={'/login'}>Login</Link></span></p>
        </div>
    )
}