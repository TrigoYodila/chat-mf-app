import React from "react";
import { Navbar } from "./components/Navbar/Navbar";



export const Layout = ({children}) => {
    return (
        <div>
            <Navbar />

            <div className="ml-[256px] pt-[80px]">
                {children}
            </div>
        </div>
    )
}