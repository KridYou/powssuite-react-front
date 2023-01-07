import dayjs from 'dayjs';
import React, { useContext } from 'react'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GlobalContext } from '../App';

export default function CalendarHead() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    return (
        <div className='flex justify-between items-center px-4'>
            <button onClick={() => setMonthIndex(monthIndex - 1)}>
                <FaAngleLeft />
            </button>
            <div>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
            <button onClick={() => setMonthIndex(monthIndex + 1)}>
                <FaAngleRight />
            </button>
        </div>
    )
}
