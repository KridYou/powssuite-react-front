import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../App';

export default function({ day }) {
    const [dayAgendas, setDayAgendas] = useState([]);

    const { setShowAgendaItem, setDaySelected, setSelectedAgenda,
        savedAgendas, 
    } = useContext(GlobalContext);

    useEffect(() => {
        const agendas = savedAgendas.filter(
            (agd) => 
                dayjs(agd.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayAgendas(agendas)
    }, [savedAgendas, day])

  return (
    <div>
        <li 
            className='day mb-2 mr-1 w-full flex hover:bg-orange-400 p-1 cursor-pointer'
            onClick={() => {
                setDaySelected(day);
                setShowAgendaItem(true);
                }}
                >
            <div className='w-1/6 bg-blue-200 justify-center flex-col cursor-pointer'>
                <p className='text-center text-[10px] mt-1'>{day.format("ddd").toUpperCase()}</p>
                <p className={`text-center text-[12px] font-bold`}>{day.format("DD")}</p>
            </div>
            <ol className='w-5/6 bg-green-400'>
                {dayAgendas.map((agd, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedAgenda(agd)}
                        className='bg-red-400 my-2 mx-1 hover:bg-red-200 cursor-pointer'
                        >
                        {agd.agenda}
                    </div>
                ))}
            </ol>
        </li>
    </div>
  )
}
