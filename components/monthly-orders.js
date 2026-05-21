"use client"

import Link from "next/link";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function MonthlyOrders() {
    const monthlyOrders = [
        { month: "Jan", orders: 120 },
        { month: "Feb", orders: 100 },
        { month: "Mar", orders: 110 },
        { month: "Apr", orders: 90 },
        { month: "May", orders: 80 },
        { month: "Jun", orders: 90 },
        { month: "Jul", orders: 95 },
        { month: "Aug", orders: 115 },
        { month: "Sep", orders: 120 },
        { month: "Oct", orders: 100 },
        { month: "Nov", orders: 95 },
        { month: "Dec", orders: 100 },
    ]
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded px-2 py-1">
            <div className="flex items-start justify-between  my-1">
                <h2 className="text-lg md:text-xl font-bold">Monthly Orders</h2>
                <Link className="text-sm text-blue-400" href={'/dashboard/orders'}>View all</Link>
            </div>

            <diV>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={monthlyOrders}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip />
                        <Bar dataKey="orders" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </diV>
        </div>
    )
}