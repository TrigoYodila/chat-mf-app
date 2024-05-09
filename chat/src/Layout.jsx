import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";


export const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            
            <div className="ml-[256px] pt-[80px]">
                {children}
            </div>
        </div>
    )
}