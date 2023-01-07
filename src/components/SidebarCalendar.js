import React, { useContext } from "react";
import dayjs from "dayjs";

import Calendar from "./Calendar";

import { IoMdSettings } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
import { GlobalContext } from "../App";
import SidebarCalendarEvents from "./SidebarCalendarEvents";

export const SidebarCalendar = ({ month }) => {
    const { 
        setMonthIndex, calendarState, setCalendarState } = useContext(GlobalContext);
    
    return(
        <>
            <div className='sidbar-nav-bottom flex h-[40px] justify-between items-center overflow-x-hidden'>
                <div className='month flex items-center justify-between' role='button'>
                    <div className="text-sm font-bold" onClick={(() => setCalendarState(!calendarState))}>
                        <div>December</div>
                    </div>
                    <a href='#'className=''>
                        <FaSortDown className='text-xs'/>
                    </a>
                </div>
                <button onClick={() => setMonthIndex(dayjs().month())} className='btn-today border-solid border border-slate-500 rounded-sm text-sm bg-stone-100 hover:bg-stone-300'>
                    Today
                </button>
                <a href='#'className='flex rounded hover:bg-stone-300 p-1'>
                    <IoMdSettings className=''/>
                </a>
            </div>
            <div className="">
                {calendarState && <Calendar />}
            </div>
            <div className='vertical-collection h-[calc(100%-72px)] overflow-y-auto overflow-x-hidden'>
                {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                            <SidebarCalendarEvents day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
                ))}
            </div>
        </>
        
    )
}