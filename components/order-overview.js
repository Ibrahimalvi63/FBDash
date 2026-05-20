import {
    LayoutDashboard,
    Users,
    Settings,
    ShoppingCart,
    BarChart3,
    PieChart,
    Bell,
    Search,
    LogOut,
    Home,
    FileText,
    CreditCard,
    Package,
    MessageCircle,
    HelpCircle,
    Calendar,
    DollarSign,
    TrendingUp,
    Eye,
    Edit,
    Trash,
    Plus,
    ShoppingBag,
    Car,
    Clock,
    TrendingDown,
    Clock1,
} from "lucide-react";

export default function OrderOverview() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">

            <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
                <div className="p-2 rounded-xl bg-blue-500/30"><ShoppingBag size={20} /></div>
                <div>
                    <p className="text-sm text-blue-400">Total Orders</p>
                    <p className="text-xl font-bold">126</p>
                    <div className="flex items-center gap-1 text-xs">
                        <p className="text-green-400"><TrendingUp size={10} /></p>
                        <p className="text-green-400">85%</p>
                        <p>vs last week</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
                <div className="p-2 rounded-xl bg-green-500/30"><Car size={20} /></div>
                <div>
                    <p className="text-sm text-green-400">Delivered Orders</p>
                    <p className="text-xl font-bold">106</p>
                    <div className="flex items-center gap-1 text-xs">
                        <p className="text-green-400"><TrendingUp size={10} /></p>
                        <p className="text-green-400">15%</p>
                        <p>vs last week</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
                <div className="p-2 rounded-xl bg-orange-500/30"><Clock1 size={20} /></div>
                <div>
                    <p className="text-sm text-orange-400">Pending Orders</p>
                    <p className="text-xl font-bold">20</p>
                    <div className="flex items-center gap-1 text-xs">
                        <p className="text-red-400"><TrendingDown size={10} /></p>
                        <p className="text-red-400">5%</p>
                        <p>vs last week</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
                <div className="p-2 rounded-xl bg-violet-500/30"><DollarSign size={20} /></div>
                <div>
                    <p className="text-sm text-violet-400">Total Revenue</p>
                    <p className="text-xl font-bold">120000</p>
                    <div className="flex items-center gap-1 text-xs">
                        <p className="text-green-400"><TrendingUp size={10} /></p>
                        <p className="text-green-400">12%</p>
                        <p>vs last week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}