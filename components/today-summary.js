import { Car, DollarSign, ShoppingBag, User } from "lucide-react";

export default function TodaysSummary() {
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
            <h2 className="text-lg md:text-xl font-bold my-2">Todays Summary</h2>

            <div className="p-2 md:p-1 text-xs">
                <div className="my-1 grid grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr] items-center">
                    <div className="flex items-center gap-3 p-1">
                        <div className="p-2 rounded bg-orange-300/20 w-fit">
                            <ShoppingBag size={20} className="text-orange-400" />
                        </div>
                        <p>New Orders</p>
                    </div>
                    <p className="px-5">45</p>
                </div>

                <div className="my-1 grid grid-cols-[3fr_1fr]  md:grid-cols-[2fr_1fr] items-center">
                    <div className="flex items-center gap-3 p-1">
                        <div className="p-2 rounded bg-violet-300/20 w-fit">
                            <DollarSign size={20} className="text-violet-400" />
                        </div>
                        <p>Revenue</p>
                    </div>
                    <p className="px-5">56000</p>
                </div>

                <div className="my-1 grid grid-cols-[3fr_1fr]  md:grid-cols-[2fr_1fr] items-center">
                    <div className="flex items-center gap-3 p-1">
                        <div className="p-2 rounded bg-green-300/20 w-fit">
                            <User size={20} className="text-green-400" />
                        </div>
                        <p>New Customer</p>
                    </div>
                    <p className="px-5">5</p>
                </div>

                <div className="my-1 grid grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr] items-center">
                    <div className="flex items-center gap-3 p-1">
                        <div className="p-2 rounded bg-blue-300/20 w-fit">
                            <Car size={20} className="text-blue-400" />
                        </div>
                        <p>Deliveries</p>
                    </div>
                    <p className="px-5">40</p>
                </div>


            </div>
        </div>
    )
}