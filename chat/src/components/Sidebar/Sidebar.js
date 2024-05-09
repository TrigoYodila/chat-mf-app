import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";


export const Sidebar = () => {

    return (
        <div>
            <div 
              id="drawer-navigation"
              className=""
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
              >
                <Link to="/">
                    <button
                        type="button"
                        data-drawer-hide="drawer-navigation"
                        aria-controls="drawer-navigation"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                        <span className="sr-only">Home</span>
                    </button>
                </Link>

                <div className="py-4 flex flex-col justify-center min-h-[45vh] overflow-y-auto">
                    <div className="px-4">
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            Nouvelle conversation
                        </Button>
                    </div>

                    <ul className="font-medium max-h-[400px] space-y-1 mt-5 overflow-y-auto px-4">
                        <NavLink
                            to={"" +  ""}
                            className="flex items-center px-2 py-1 text-gray-500 rounded-full dark:text-white hover:bg-slate-200 dark:hover:bg-gray-700 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                />
                            </svg>
                            <span className="ms-3">Conversation: #Test1</span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )

}