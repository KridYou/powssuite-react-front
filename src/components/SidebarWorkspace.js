import React from "react";

import { IoMdSettings } from "react-icons/io";
import { BsArrowBarDown } from "react-icons/bs";
import { FaSortDown, FaUserCircle, FaChevronRight } from "react-icons/fa";

export const SidebarWorkspace = () => {
    return(
        <>
            <div className='sidbar-nav-bottom flex justify-between items-center py-5 h-[30px] overflow-x-auto overflow-y-hidden'>
                <h1 className='month flex items-center justify-between font-bold overflow-x-hidden'>
                    Workspaces
                </h1>
                <button className='btn-newsection ml-8 px-2 text-sm h-5/12 text-xs'>
                    + New Section
                </button>
            </div>
            <section className="h-[300px] overflow-y-scroll">
                <div className="Event-list">
                    <div className="Event flex items-center px-4 py-2 hover:bg-gray-200">
                        <div>
                            <FaUserCircle />
                        </div>
                        <span className="ml-4">
                            <p>
                                Event 1
                            </p>
                        </span>
                    </div>
                    <div className="Event flex items-center px-4 py-2 hover:bg-gray-200">
                        <div>
                            <FaUserCircle />
                        </div>
                        <span className="ml-4">
                            <p>
                                Event 1
                            </p>
                        </span>
                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ol className="Archived flex items-center pl-6 hover:bg-gray-200">
                    <FaChevronRight className="text-xs"/>
                    <p className="ml-3">Archived</p>
                </ol>
            </section>
            <div className="justify-items-center mx-auto overflow-x-hidden">
                <button className="rounded text-sm border-[1px] border-solid border-gray-200 hover:bg-gray-200 py-2 w-60 mx-4 mt-8">
                    + New Workspace
                </button>
            </div>
        </>
        
    )
}