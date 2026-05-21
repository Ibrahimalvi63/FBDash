import BusinessGrowth from "@/components/business-growth";
import HeaderBar from "@/components/header-bar";
import MonthlyOrders from "@/components/monthly-orders";
import NavBar from "@/components/nav-bar";
import OrderOverview from "@/components/order-overview";
import OrderPie from "@/components/order-pie";
import RecentOrders from "@/components/recent-orders";
import SalesChart from "@/components/sales-chart";
import TodaysSummary from "@/components/today-summary";
import TopCustomers from "@/components/top-customer";
import TopProduct from "@/components/top-product";

export default function DashboardPage() {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen w-full">
            {/*Page layout not editable*/}
            <div className="text-gray-300 md:pl-45 pt-20 pb-15 w-full">
                <HeaderBar />
                {/*Main content area*/}
                <div className="p-3 md:p-5"> {/*Page content goes there*/}

                    {/*Order & Revenue overview*/}
                    <OrderOverview />

                    {/*Sales & order chart*/}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 md:gap-4 mt-5 w-full">
                        <SalesChart />
                        <OrderPie />
                    </div>

                    {/*Monthly orders & Business growth chart*/}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 md:gap-4 mt-5 w-full">
                        <MonthlyOrders />
                        <BusinessGrowth />
                    </div>

                    {/*Recent order & Todays summary chart*/}
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 md:gap-4 mt-5 w-full">
                        <RecentOrders />
                        <TodaysSummary />
                    </div>

                    {/*Top customer & Top product */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-5 w-full">
                        <TopCustomers />
                        <TopProduct />
                    </div>

                </div>

            </div>
            <NavBar />
        </div>
    )
}
