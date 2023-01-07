import React from 'react'
import dayjs from 'dayjs'

export default function Day({ day, rowIdx, idx, key }) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
        ? "bg-orange-400 text-white w-[20px] h-[20px]"
        : "";
    }

  return (
    <div className='border border-green-800 flex flex-col items-center'>
        <header className='flex flex-col items-center'>
            {rowIdx === 0 && (
                <p className='date-block text-[10px] text-center rounded-full w-[20px] h-[20px] hover:bg-green-300 cursor-pointer'>{day.format("ddd").toUpperCase()}</p>
            )}
            <p className={`date-block text-[10px] text-center rounded-full w-[20px] h-[20px] hover:bg-green-300 cursor-pointer ${getCurrentDayClass()}`}>{day.format("DD")}</p>
        </header>
    </div>
  )
}
