import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";
import LoginForm from "@/components/login-form";

export default function LogInPage() {
    return (
        <div>
            <LandingNav />

            <div className="min-h-screen bg-gray-200 text-gray-600">
                <div className="" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778696487/security-cyber-digital-concept-abstract-technology-background_42421-211_eweed9.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="p-5">
                        <h1 className="text-2xl mt-10 mb-2 font-bold text-gray-200">Login to manage your bussiness</h1>
                        <h3 className="text-sm text-gray-300 mb-10">If you want to manage your facebook bussiness via FBDash please login first.</h3>
                    </div>
                </div>

                <div className="p-5 mt-16 w-full flex justify-center items-center">
                    <LoginForm />
                </div>
            </div>

            <LandingFooter />
        </div>
    )
}