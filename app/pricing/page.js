// import LandingFooter from "@/components/landing footer";
// import LandingNav from "@/components/landing nav";

// export default function PricingPage() {
//     return (
//         <div>
//             <LandingNav />

//             <div className="min-h-screen bg-gray-200 text-gray-600">
//                 <div className="" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778953630/industry-industry-4-web-network_zc4iik.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
//                     <div className="p-5">
//                         <h1 className="text-2xl mt-10 mb-2 font-bold text-gray-200">Pricing list</h1>
//                         <h3 className="text-sm text-gray-300">Buy subscription & get premium features</h3>
//                     </div>
//                 </div>
//             </div>

//             <LandingFooter />
//         </div>
//     )
// }



import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div>
            <LandingNav />

            <div className="text-gray-600">
                <div className="h-50 md:h-100" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778953630/industry-industry-4-web-network_zc4iik.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="text-center mb-12">
                        <h1 className="text-2xl font-bold text-white mt-15">
                            Simple Pricing for Everyone
                        </h1>

                        <p className="text-white mt-3">
                            Choose a plan that fits your Facebook business
                        </p>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50 px-5 py-16">

                <div className="max-w-6xl mx-auto">


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition">

                            <h2 className="text-xl font-bold text-gray-900">Basic</h2>

                            <p className="text-3xl font-bold text-blue-600 mt-3">
                                $0
                            </p>

                            <p className="text-sm text-gray-500">Forever free</p>

                            <ul className="mt-5 space-y-2 text-gray-600 text-sm">
                                <li>✔️ 50 Orders</li>
                                <li>✔️ Basic dashboard</li>
                                <li>✔️ Customer list</li>
                            </ul>

                            <Link
                                href="/signup"
                                className="mt-6 block text-center bg-gray-100 hover:bg-gray-200 py-2 rounded-lg"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="bg-white border-2 border-blue-600 rounded-2xl shadow-md p-6 relative">

                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                Most Popular
                            </div>

                            <h2 className="text-xl font-bold text-gray-900">Pro</h2>

                            <p className="text-3xl font-bold text-blue-600 mt-3">
                                $9
                            </p>

                            <p className="text-sm text-gray-500">per month</p>

                            <ul className="mt-5 space-y-2 text-gray-600 text-sm">
                                <li>✔️ Unlimited Orders</li>
                                <li>✔️ Full Dashboard</li>
                                <li>✔️ Analytics</li>
                                <li>✔️ Delivery tracking</li>
                            </ul>

                            <Link
                                href="/signup"
                                className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                            >
                                Start Pro
                            </Link>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition">

                            <h2 className="text-xl font-bold text-gray-900">Business</h2>

                            <p className="text-3xl font-bold text-blue-600 mt-3">
                                $19
                            </p>

                            <p className="text-sm text-gray-500">per month</p>

                            <ul className="mt-5 space-y-2 text-gray-600 text-sm">
                                <li>✔️ Everything in Pro</li>
                                <li>✔️ Team access</li>
                                <li>✔️ Priority support</li>
                                <li>✔️ Advanced analytics</li>
                            </ul>

                            <Link
                                href="/signup"
                                className="mt-6 block text-center bg-gray-100 hover:bg-gray-200 py-2 rounded-lg"
                            >
                                Choose Plan
                            </Link>
                        </div>

                    </div>

                    <p className="text-center text-sm text-gray-500 mt-10">
                        You can upgrade or downgrade anytime
                    </p>

                </div>

            </div>


            <LandingFooter />
        </div>
    );
}