import React, { useContext } from "react";

// --------- Icon ------------------------
import { 
    FaPlusCircle, FaRegCalendar,
    FaRegClock, FaEllipsisH,
    } from "react-icons/fa";
import { GlobalContext } from "../App";
import AgendaItem from "./AgendaItem";

// ---------------------------------------

export const Agenda = () => {
    const { showAgendaItem } = useContext(GlobalContext);
    return(
        <>
            <div className="inbox-route-content m-14">
                <div className="inbox-agenda">
                    <div className="agenda-detail w-full px-16">
                        <div className="setup-new-agenda flex justify-between">
                            <div className="flex items-center"> 
                                <button className="flex items-center mr-6 rounded-xl p-1 border-solid border-2 border-gray-400 hover:bg-gray-200">
                                    <FaRegCalendar className="mr-2"/>
                                    <div className="text-xs">Event name</div>
                                </button>
                                <a href='#'>
                                    <FaPlusCircle />
                                </a>
                            </div>
                            <div className="flex items-center"> 
                                <button className="flex items-center mr-8 rounded-xl hover:bg-gray-200 p-1">
                                    <FaRegClock className="mr-2"/>
                                    <div className="text-xs">
                                        Starts in 7 days
                                    </div>
                                </button>
                                <button>
                                 <FaEllipsisH />
                                </button>
                            </div>

                        </div>
                        <div className="meeting-title py-4">
                            <span className="text-3xl" placeholder="">
                                Untitled meeting
                            </span>
                        </div>
                        <section className="agenda-detail mt-2 mb-6">
                            Add description ...
                        </section>
                        <h2 className="agenda-detail-label">
                            Agenda
                        </h2>
                    </div>
                    <div className="item-box h-[300px]">
                        {showAgendaItem && <AgendaItem />}
                        <ul className="new-item-adder flex ml-12 mt-6">
                            <li className="mr-4">+ Add item</li>
                            <li className="mr-4">+ Add suggestion</li>
                            <li>+ Add secsion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        
    )
}