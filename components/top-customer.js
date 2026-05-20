import Image from "next/image";
import Link from "next/link";

export default function TopCustomers() {
    const customerData = [
        { name: "Ibrahim", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", totalOrder: 12, totalSpent: 8500 },
        { name: "Ilma binte", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", totalOrder: 8, totalSpent: 6700 },
        { name: "Farzana", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", totalOrder: 7, totalSpent: 6000 },
        { name: "Hamid", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", totalOrder: 5, totalSpent: 5500 },
        { name: "Sufia", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", totalOrder: 5, totalSpent: 5000 }
    ]
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded p-2">
            <div className="flex items-start justify-between  my-2">
                <h2 className="text-lg md:text-xl font-bold">Top Customer</h2>
                <Link className="text-sm text-blue-400" href={'/dashboard/customers'}>View all</Link>
            </div>

            <div className="text-xs">
                <div className="grid grid-cols-[2fr_1fr_1fr] font-bold">
                    <p>Customer name</p>
                    <p>Total order</p>
                    <p>Total spent</p>
                </div>
                {customerData.map((customer, i) => (
                    <div key={i} className="grid grid-cols-[2fr_1fr_1fr] p-2 my-2 bg-blue-500/10 rounded">
                        <div className="flex items-center gap-3">
                            <Image className="rounded-full" height={20} width={20} src={customer.image} alt="image" />
                            <p>{customer.name}</p>
                        </div>
                        <p>{customer.totalOrder}</p>
                        <p>{customer.totalSpent}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}