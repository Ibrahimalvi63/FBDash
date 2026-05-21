import Image from "next/image";
import Link from "next/link";

export default function RecentOrders() {
    const recentOrderData = [
        { name: "Ibrahim", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", oredrID: "#101", amount: 1200, status: "Delivered", time: "1h ago" },
        { name: "Abuzar", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", oredrID: "#102", amount: 1500, status: "Delivered", time: "50m ago" },
        { name: "Burhan", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", oredrID: "#103", amount: 500, status: "Cancel", time: "45m ago" },
        { name: "Ilma binte", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", oredrID: "#104", amount: 900, status: "Processing", time: "10m ago" },
        { name: "Rasik Roy", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", oredrID: "#105", amount: 1800, status: "Pending", time: "2m ago" },

    ]


    const deliveredColor = "#10B981"
    const processingColor = "#3B82F6"
    const pendingColor = "#F59E0B"
    const cancelColor = "#EF4444"

    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded px-2 py-1">
            <div className="flex items-start justify-between  my-1">
                <h2 className="text-lg md:text-xl font-bold">Recent Orders</h2>
                <Link className="text-sm text-blue-400" href={'/dashboard/orders'}>View all</Link>
            </div>

            <div className="text-xs">
                <div className="grid grid-cols-[1fr_2fr_1fr_1.3fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] font-bold">
                    <p>Order ID</p>
                    <p>Customer name</p>
                    <p>Amount</p>
                    <p>Status</p>
                    <p>Time</p>
                </div>
                {recentOrderData.map((order, i) => (
                    <div key={i} className="grid grid-cols-[1fr_2fr_1fr_1.3fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] items-center p-1.5 my-2 bg-white/5 rounded">
                        <p>{order.oredrID}</p>
                        <div className="flex items-center gap-2">
                            <Image className="rounded-full" height={20} width={20} src={order.image} alt="image" />
                            <p>{order.name}</p>
                        </div>
                        <p>{order.amount}</p>
                        {order.status == 'Delivered' ? <p style={{ color: deliveredColor }}>{order.status}</p> :
                            order.status == 'Processing' ? <p style={{ color: processingColor }}>{order.status}</p> :
                                order.status == 'Pending' ? <p style={{ color: pendingColor }}>{order.status}</p> :
                                    <p style={{ color: cancelColor }}>{order.status}</p>}
                        <p>{order.time}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}