import HeaderBar from "@/components/header-bar";
import NavBar from "@/components/nav-bar";
import {
    LayoutDashboard,
    Users,
    Settings,
    ShoppingCart,
    BarChart3,
    PieChart,
    LineChart,
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
} from "lucide-react";

export default function DashboardPage() {

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
            {/*Page layout not editable*/}
            <div className="text-white md:pl-30 pt-20">
                <HeaderBar />
                {/*Main content area*/}
                <div className="p-5">
                    {/*Page content goes there*/}
                    <div>Dashboard Page content</div>
                </div>

            </div>
            <NavBar />
        </div>
    )
}
