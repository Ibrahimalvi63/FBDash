import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";


export default function Home() {
  return (
    <div className="bg-gray-200 text-gray-600">
      <LandingNav />

      <div className="mt-10 px-5 py-5">
        <h1 className="text-xl font-bold text-orange-500">Turn Your Facebook Shop Into a Real Bussiness</h1>
        <h3 className="text-sm">Track orders, customers, delivery and sales - all in one place. Manage your facebook bussiness in one smart dashboard</h3>
        <div className="w-full flex items-center justify-center">
          <button className="px-5 py-2 bg-green-500 hover:bg-green-800 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Get started</button>
        </div>
      </div>

      <LandingFooter />
    </div>
  );
}
