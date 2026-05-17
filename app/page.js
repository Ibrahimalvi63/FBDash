import Button from "@/components/button";
import LandingFooter from "@/components/landing footer";
import LandingNav from "@/components/landing nav";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-500">

      <LandingNav />

      <div className="md:h-100" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778697667/pngtree-stock-market-finance-business-economy-trend-graph-digital-technology-image_15664196_qkfvva.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="p-5">
          <h1 className="text-2xl md:text-3xl mt-20 mb-2 font-bold text-orange-500">Turn Your Facebook Shop Into a Real Business</h1>
          <h3 className="text-sm md:text-md text-gray-100">Track orders, customers, delivery and sales — সব এক জায়গায় এক সহজ ড্যাশবোর্ডে।</h3>
          <div className="w-full mt-5 mb-3 flex items-center justify-center">
            <Button name="Get started" color="#22C55E" href="login" />
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10 min-h-screen">

        <div className="mt-10 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-6">


          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Running Facebook Business is Messy?
            </h2>

            <ul className="space-y-3 text-gray-600">

              <li className="flex items-start gap-2">
                <span>❌</span>
                <span>Facebook Messenger এ order হারিয়ে যায়</span>
              </li>

              <li className="flex items-start gap-2">
                <span>❌</span>
                <span>Customer details আলাদা আলাদা জায়গায় থাকে</span>
              </li>

              <li className="flex items-start gap-2">
                <span>❌</span>
                <span>Delivery track করা খুব কঠিন হয়ে যায়</span>
              </li>

              <li className="flex items-start gap-2">
                <span>❌</span>
                <span>Manual হিসাব রাখতে অনেক সময় নষ্ট হয়</span>
              </li>

            </ul>
          </div>


          <div className="border-t border-gray-100 my-6"></div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              FBDash Makes Everything Simple
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>আপনার সব business activity এক জায়গায় এনে দেয়</span>
              </li>

              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>
                  Order, customer এবং delivery সব একসাথে manage করা যায় সহজে
                </span>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-10 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Features we offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                📦 Order Management
              </h3>
              <p className="text-sm text-gray-600">
                সব order এক জায়গায় সহজে manage করুন।
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                👤 Customer Tracking
              </h3>
              <p className="text-sm text-gray-600">
                Customer details এবং history সংরক্ষণ করুন।
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                🚚 Delivery Monitoring
              </h3>
              <p className="text-sm text-gray-600">
                Courier এবং delivery status সহজে track করুন।
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                📊 Business Insights
              </h3>
              <p className="text-sm text-gray-600">
                আপনার business performance বুঝতে সাহায্য করে।
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            How it works
          </h2>

          <ol className="space-y-4 text-gray-600">

            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                1
              </span>
              Create your account
            </li>

            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                2
              </span>
              Add customer orders
            </li>

            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                3
              </span>
              Track delivery and sales
            </li>

            <li className="flex items-center gap-3">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                4
              </span>
              Manage everything easily from one dashboard
            </li>

          </ol>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-3">
          <div>
            <div className="max-w-6xl mx-auto px-5">
              <p className="text-blue-600 font-semibold text-sm uppercase">Dashboard Preview</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">See your business in one dashboard</h2>
              <p className="mt-1">Manage orders, customers and delivery from a single place</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Everything you need to stay organized</h3>
                <ul className="space-y-3">
                  <li>📦 Track all orders in real time</li>
                  <li>👤 Manage customer database easily</li>
                  <li>🚚 Monitor delivery status</li>
                  <li>📊 Simple business analytics overview</li>
                </ul>
                <div className="mt-3 md:mt-10">
                  <Button name="start" color="blue" href="login" />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Orders</p>
                    <p className="text-xl font-bold text-gray-900">120</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Customers</p>
                    <p className="text-xl font-bold text-gray-900">85</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Pending</p>
                    <p className="text-xl font-bold text-yellow-600">12</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Revenue</p>
                    <p className="text-xl font-bold text-green-600">120</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent orders</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm bg-gray-50 p-2 rounded-lg">
                      <span>Rafiq</span>
                      <span className="text-yellow-600">Pending</span>
                    </div>

                    <div className="flex justify-between text-sm bg-gray-50 p-2 rounded-lg">
                      <span>Karim</span>
                      <span className="text-green-600">Deliverde</span>
                    </div>

                    <div className="flex justify-between text-sm bg-gray-50 p-2 rounded-lg">
                      <span>Sazzad</span>
                      <span className="text-red-600">Cancelled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-5 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden">
            <div className="h-50 md:h-120" style={{ backgroundImage: `url(https://res.cloudinary.com/doit4flte/image/upload/v1778991633/9bc4ae3f-1032-42aa-95e8-62880ba39f52-cover_ebj2ey.png)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-3">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase">why choose FBDash</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">Built for modern Facebook businesses</h2>
              <p className="mt-3 max-w-2xl mx-auto">FBDash help you organize orders, customers and delivery without the stress of manual tracking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Management</h3>
                <p className="text-sm">Manage orders and customer details quickly from one dashboard</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Organized order</h3>
                <p className="text-sm">Stop losing orders in Messenger and keep everything organized</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery tracking</h3>
                <p className="text-sm">Easily track delivery progress and order status update</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Simple and Secure</h3>
                <p className="text-sm">Clean dashboard experience designed for everyday business use</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full rounded-2xl bg-violet-200 shadow-sm hover:shadow-md transition border border-gray-100 p-3">
          <h2 className="text-2xl font-bold text-gray-800">Start Organizing Your Facebook Business Today</h2>
          <div className="flex items-center justify-around">
            <Button name="Log in" color="blue" href="login" />
            <Button name="Signup" color="blue" href="signup" />
          </div>
        </div>

        <div className="w-full mt-10 rounded-2xl bg-white shadow-sm hover:shadow-md transition border border-gray-100 p-6">


          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 mt-2">
              কিছু সাধারণ প্রশ্নের উত্তর
            </p>
          </div>


          <div className="space-y-4">


            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900">
                FBDash কী?
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                FBDash একটি dashboard system যা Facebook business-এর order,
                customer এবং delivery management সহজ করে।
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900">
                আমি কি মোবাইল দিয়ে ব্যবহার করতে পারব?
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                হ্যাঁ, FBDash mobile-friendly এবং যেকোনো modern device থেকে ব্যবহার করা যাবে।
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900">
                আমার data কি নিরাপদ থাকবে?
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                আমরা secure system ব্যবহার করি যাতে আপনার business data নিরাপদ থাকে।
              </p>
            </div>


            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900">
                এটা কি নতুন business owner-দের জন্য সহজ?
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                অবশ্যই। FBDash সহজ interface দিয়ে তৈরি করা হয়েছে যাতে সবাই সহজে ব্যবহার করতে পারে।
              </p>
            </div>

          </div>
        </div>

      </div>
      <LandingFooter />
    </div>
  );
}

