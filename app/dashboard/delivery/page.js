import HeaderBar from "@/components/header-bar";
import NavBar from "@/components/nav-bar";

export default function DeliveryPage() {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen">
            {/*Page layout not editable*/}
            <div className="text-white md:pl-30 pt-20">
                <HeaderBar />
                {/*Main content area*/}
                <div className="p-5">
                    {/*Page content goes there*/}
                    <div>Delivery Page content</div>
                </div>

            </div>
            <NavBar />
        </div>
    )
}