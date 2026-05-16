import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";

export default function PricingPage() {
    return (
        <div>
            <LandingNav />

            <div className="min-h-screen bg-gray-200 text-gray-600">
                <div className="" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778953630/industry-industry-4-web-network_zc4iik.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="p-5">
                        <h1 className="text-2xl mt-10 mb-2 font-bold text-gray-200">Pricing list</h1>
                        <h3 className="text-sm text-gray-300">Buy subscription & get premium features</h3>
                    </div>
                </div>
            </div>

            <LandingFooter />
        </div>
    )
}