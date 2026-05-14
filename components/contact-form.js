"use client"

import Link from "next/link"

export default function ContactForm() {
    return (
        <div>

            <div className="border-4 border-blue-400 backdrop-blur-lg bg-blue-300/40 p-5 rounded-2xl ">
                <h3 className="text-2xl font-bold mb-8">Sign up</h3>
                <form className="flex flex-col">
                    <input type="text" name="name" placeholder="Input your name" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input type="text" name="email" placeholder="Input your email" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input type="text" name="password" placeholder="Input your password" required className="p-2 bg-gray-100 rounded mb-3" />
                    <input type="text" name="password" placeholder="Confirm your password" required className="p-2 bg-gray-100 rounded mb-3" />

                    <div className="flex items-center justify-center">
                        <button className="mt-5 px-3 py-1 rounded-2xl bg-blue-400 w-4/12">Submit</button>
                    </div>
                </form>
            </div>

            <p className="py-2">Already have an account? <span className="text-blue-400"><Link href={'/login'}>Login</Link></span></p>
        </div>
    )
}