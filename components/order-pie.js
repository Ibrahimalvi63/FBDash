"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export default function OrderPie() {
    const orderData = [
        { name: "Delivered", value: 40 },
        { name: "Processing", value: 30 },
        { name: "Pending", value: 25 },
        { name: "Cancelled", value: 5 },
    ]
    const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"]
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
            <h2 className="text-lg md:text-xl font-bold my-2">Order Status</h2>

            <div className="p-2">
                <ResponsiveContainer width="100%" height={120}>
                    <PieChart>
                        <Tooltip />
                        <Pie data={orderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} innerRadius={30} stroke="#1E293B" strokeWidth={2} label={false}>
                            {orderData.map((item, i) => (
                                <Cell key={i} fill={COLORS[i]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-2 gap-2 mt-5">
                    {orderData.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <p style={{ backgroundColor: `${COLORS[i]}` }} className="h-2 w-2 rounded-full"></p>
                            <p className="text-sm md:text-xs">
                                <span style={{ color: `${COLORS[i]}` }} className="font-bold">{item.name}:</span>
                                {"  "}
                                <span>{item.value}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}