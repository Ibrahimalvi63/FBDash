export default function BusinessGrowth() {
    const monthlyGrowth = [
        { month: "Jan", growth: 75 },
        { month: "Feb", growth: 78 },
        { month: "Mar", growth: 70 },
        { month: "Apr", growth: 85 },
        { month: "May", growth: 89 },
        { month: "Jun", growth: 90 },
        { month: "Jul", growth: 72 },
        { month: "Aug", growth: 85 },
        { month: "Sep", growth: 100 },
        { month: "Oct", growth: 95 },
        { month: "Nov", growth: 90 },
        { month: "Dec", growth: 98 },
    ]
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded px-2 py-1">
            <div className="flex items-center justify-between  my-1">
                <h2 className="text-lg md:text-xl font-bold">Growth</h2>
                <p className="text-xs">Goal: 100000</p>
            </div>

            <div className="p-1 text-xs">
                {monthlyGrowth.map((item, i) => (
                    <div key={i} className="grid grid-cols-[0.5fr_4fr_0.5fr] mb-1">
                        <p>{item.month}</p>
                        <div className="h-3 mx-3 bg-white/10 shadow-2xl rounded overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500" style={{ width: `${item.growth}%` }} />
                        </div>
                        <p>{item.growth}%</p>

                    </div>
                ))}
            </div>
        </div>
    )
}