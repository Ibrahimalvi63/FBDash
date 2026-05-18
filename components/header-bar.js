"use client"

import { Bell, Calendar, PackagePlus, Plus } from "lucide-react";
import { useState } from "react";

export default function HeaderBar() {
    const [active, setActive] = useState('')
    const [notificationCount, setNotificationCount] = useState(0)
    const [filterDisplay, setFilterDisplay] = useState('hidden')
    const [addDisplay, setAddDisplay] = useState('hidden')
    const [notificationDisplay, setNotificationDisplay] = useState('hidden')

    const closeActive = () => {
        setActive('')
    }

    const handleFilterDisplay = () => {
        setFilterDisplay(filterDisplay == 'hidden' ? 'block' : 'hidden')
    }
    const closeFilterDisplay = () => {
        setFilterDisplay('hidden')
    }

    const handleAddDisplay = () => {
        setAddDisplay(addDisplay == 'hidden' ? 'block' : 'hidden')
    }
    const closeAddDisplay = () => {
        setAddDisplay('hidden')
    }

    const handleNotification = () => {
        setNotificationCount(0)
    }
    const handleNotificationDisplay = () => {
        setNotificationDisplay(notificationDisplay == 'hidden' ? 'block' : 'hidden')
    }
    const closeNotificationDisplay = () => {
        setNotificationDisplay('hidden')
    }

    return (
        <div className="h-20 text-gray-300 flex items-center justify-between bg-blue-900/50 border border-blue-500/20 fixed top-0 text-shadow-gray-950 py-2 px-3 md:pr-55 md:pl-5 w-full z-40">

            <div className="flex flex-col justify-center">
                <div className="text-md md:text-lg font-semibold text-gray-200">M/S IBRAHIM ENTERPRISE</div>
                <div className="text-xs"><span>Propeator: </span> S.M. Ibrahim</div>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-5">
                <div onClick={() => { setActive('calendar'); handleFilterDisplay(); closeAddDisplay(); closeNotificationDisplay() }} className={`p-2 md:p-3  rounded-full ${active == 'calendar' ? 'bg-blue-600/70' : 'bg-blue-900/80'}`}><Calendar size={20} /></div>
                <div onClick={() => { setActive('product'); handleAddDisplay(); closeFilterDisplay(); closeNotificationDisplay() }} className={`p-2 md:p-3 rounded-full ${active == 'product' ? 'bg-blue-600/70' : 'bg-indigo-600/30 animate-pulse'} relative`}><Plus size={20} /></div>
                <div onClick={() => { setActive('bell'); handleNotificationDisplay(); handleNotification(); closeFilterDisplay(); closeAddDisplay() }} className={`p-2 md:p-3 rounded-full ${active == 'bell' ? 'bg-blue-600/70' : 'bg-blue-900/80'} relative`}><Bell size={20} /><p className="absolute text-xs -top-1/4 bg-orange-600 py-0.5 px-1.5 rounded-full">{notificationCount}</p></div>

                {/*Filter calendar*/}
                <div onClick={() => { setActive('') }} className={`${filterDisplay} absolute right-28 md:right-85 top-20 p-3 md:p-5 bg-blue-600/30 border border-blue-500/10 rounded shadow`}>
                    <div>calendar</div>
                </div>

                {/*Add list item*/}
                <div onClick={() => { handleAddDisplay(); setActive('') }} className={`${addDisplay} absolute right-15 md:right-70 top-20 p-3 md:p-5 bg-blue-600/30 border border-blue-500/10 rounded shadow`}>
                    <div className="p-1 bg-white/10 rounded active:bg-blue-500 hover:border hover:border-gray-100/10"><button>Add product</button></div>
                    <div className="p-1 my-2 bg-white/10 rounded active:bg-blue-500 hover:border hover:border-gray-100/10"><button>Add order</button></div>
                    <div className="p-1 bg-white/10 rounded active:bg-blue-500 hover:border hover:border-gray-100/10"><button>Add customer</button></div>
                </div>

                {/*Message notification*/}
                <div onClick={() => { setActive('') }} className={`${notificationDisplay} absolute right-5 md:right-55 top-20 p-3 md:p-5 bg-blue-600/30 border border-blue-500/10 rounded shadow`}>
                    <div>notification</div>
                </div>


            </div>

        </div>
    )
} 