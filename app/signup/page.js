import ContactForm from "@/components/contact-form";
import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";

export default function SignUpPage() {
    return (
        <div>
            <LandingNav />

            <div className="min-h-screen bg-gray-200 text-gray-600">
                <div className="" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778696487/security-cyber-digital-concept-abstract-technology-background_42421-211_eweed9.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="p-5">
                        <h1 className="text-2xl mt-10 font-bold text-gray-200">Create your account</h1>
                        <h3 className="text-sm text-gray-300 mt-5 mb-10">If you want to start your facebook bussiness with one dashboard please sign up first.</h3>
                    </div>
                </div>

                <div className="p-5 mt-15">
                    <ContactForm />
                </div>
            </div>

            <LandingFooter />
        </div>
    )
}