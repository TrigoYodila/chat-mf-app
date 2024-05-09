import React, { useState } from "react";
import { Avatar } from "./Avatar";


export const UserMenu = () => {
    const [openDropDown, setOpenDropDown] = useState(false)

    const toggleUserDropDown = () => {
        setOpenDropDown(!openDropDown)
    }

    const openDropDownClass = openDropDown ? "" : "hidden"

    return (
        <div className="flex items-end flex-col w-fit relative">

            <Avatar onClick={toggleUserDropDown}/>

            <div id="userDropdown"
               className={`z-10 ${openDropDownClass} absolute top-10 right-0 bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                 <div>User Name</div>
                 <div className="font-medium truncate">trigo@yod.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Parametres</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Déconnecter</a>
              </div>
            </div>
        </div>
    )
}