"use client"


export default function Error() {
    return (
        <div className="min-h-screen bg-blue-300 flex items-center justify-center">
            <div className="flex items-center flex-col">
                <div className="flex gap-6">
                    <div className="w-7 h-7 bg-green-700 rounded-full bounce"></div>
                    <div className="w-7 h-7 bg-green-700 rounded-full bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-7 h-7 bg-green-700 rounded-full bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>

                <p className="text-2xl font-bold mt-5">Loading your experience...</p>

            </div>
        </div>
    )
}