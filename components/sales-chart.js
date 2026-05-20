"use client"

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip

} from "recharts";

export default function SalesChart() {
    const salesData = [
        { month: "Jan", sales: 4000 },
        { month: "Feb", sales: 3000 },
        { month: "Mar", sales: 4500 },
        { month: "Apr", sales: 5000 },
        { month: "May", sales: 6000 },
        { month: "Jun", sales: 4000 },
        { month: "Jul", sales: 5500 },
        { month: "Aug", sales: 6500 },
        { month: "Sep", sales: 4500 },
        { month: "Oct", sales: 5000 },
        { month: "Nov", sales: 3000 },
        { month: "Dec", sales: 5000 },
    ]

    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
            <div className="flex items-start justify-between my-2">
                <h2 className="text-lg md:text-xl font-bold">Sales overview</h2>
                <select className="p-1 border border-gray-100/10 rounded">
                    <option>This week</option>
                    <option>This month</option>
                    <option>This year</option>
                </select>
            </div>
            <div className="w-full">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}