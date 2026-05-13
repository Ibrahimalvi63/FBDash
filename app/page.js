import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";


export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-500">
      <LandingNav />

      <div className="p-5">
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-blue-950">Turn Your Facebook Shop Into a Real Bussiness</h1>
          <h3 className="text-sm text-gray-600">Track orders, customers, delivery and sales — সব এক জায়গায় এক সহজ ড্যাশবোর্ডে।</h3>
          <div className="w-full mt-3 flex items-center justify-center">
            <button className="mt-2 px-5 py-2 text-white bg-green-500 hover:bg-green-700 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Get started</button>
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white p-3">
          <div>
            <h2 className="text-xl font-bold text-gray-700">Running Facebook Business is Messy?</h2>
            <ul className="px-5 py-3">
              <li className="list-disc">Facebook Messenger এ order হারিয়ে যায়</li>
              <li className="list-disc">Customer details আলাদা আলাদা জায়গায় থাকে</li>
              <li className="list-disc">Delivery track করা খুব কঠিন হয়ে যায়</li>
              <li className="list-disc">Manual হিসাব রাখতে অনেক সময় নষ্ট হয়</li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="font-bold text-gray-700">FBDash Makes Everything Simple</h3>
            <ul className="px-5 py-3">
              <li className="list-disc">আপনার সব business activity এক জায়গায় এনে দেয়</li>
              <li className="list-disc">Order, customer এবং delivery সব একসাথে manage করা যায় সহজে</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white p-3">
          <h2 className="text-xl font-bold text-gray-700">Features we offer</h2>
          <ul className="">
            <li>📦 সব order এক জায়গায় manage করুন</li>
            <li>👤 Customer details এবং history সংরক্ষণ করুন</li>
            <li>🚚 Courier এবং delivery status সহজে track করুন</li>
            <li>📊 আপনার business performance বুঝতে সাহায্য করে</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Start Organizing Your Facebook Business Today</h2>
          <div className="flex items-center justify-around">
            <button className="mt-2 px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Get started</button>
            <button className="mt-2 px-9 py-2 text-white bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow hover:shadow-amber-500 rounded-4xl">Sign up</button>
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white p-3">
          <h2 className="text-xl font-bold text-gray-700">How it works</h2>
          <ol className="px-5 py-2">
            <li className="list-decimal">Sign Up</li>
            <li className="list-decimal">Add Orders</li>
            <li className="list-decimal">Manage Everything Easily</li>
          </ol>
        </div>

      </div>

      <LandingFooter />
    </div>
  );
}
