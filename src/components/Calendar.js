import React, { useEffect, useContext } from 'react'

import CalendarHead from './CalendarHead'
import CalendarBody from './CalendarBody'
import { getMonth } from '../util'
import { GlobalContext } from '../App'

export default function Calendar() {
    const { currentMonth, setCurrentMonth, monthIndex } = useContext(GlobalContext);
    // const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex])

    return (
        <div className="absolute z-50 bg-pink-400 w-[272px]">
            <CalendarHead />
            <CalendarBody month={currentMonth}/>
        </div>
    )
}
