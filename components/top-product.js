import Image from "next/image";
import Link from "next/link";

export default function TopProduct() {
    const productData = [
        { name: "Iphone 13", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", sales: 1200000, revenue: 18500 },
        { name: "Earbuds", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", sales: 80000, revenue: 8500 },
        { name: "Headphone", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", sales: 66000, revenue: 5500 },
        { name: "Charger", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", sales: 10000, revenue: 1500 },
        { name: "Spy camera", image: "https://res.cloudinary.com/doit4flte/image/upload/v1756531851/student_justz5.avif", sales: 9500, revenue: 1200 },
    ]
    return (
        <div className="w-full bg-white/10 hover:bg-white/20 shadow-2xl transition backdrop-blur-xl border border-gray-100/10 rounded px-2 py-1">
            <div className="flex items-start justify-between  my-1">
                <h2 className="text-lg md:text-xl font-bold">Top Product</h2>
                <Link className="text-sm text-blue-400" href={'/dashboard/customers'}>View all</Link>
            </div>

            <div className="text-xs">
                <div className="grid grid-cols-[2fr_1fr_1fr] font-bold">
                    <p>product name</p>
                    <p>Total sales</p>
                    <p>Revenue</p>
                </div>
                {productData.map((product, i) => (
                    <div key={i} className="grid grid-cols-[2fr_1fr_1fr] items-center p-1.5 my-2 bg-white/5 rounded">
                        <div className="flex items-center gap-3">
                            <Image className="rounded-full" height={20} width={20} src={product.image} alt="image" />
                            <p>{product.name}</p>
                        </div>
                        <p>{product.sales}</p>
                        <p>{product.revenue}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}