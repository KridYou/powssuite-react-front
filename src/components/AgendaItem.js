import React, { useContext, useState } from 'react'

import { FaRegCircle, FaRegUserCircle, FaTrashAlt,
    FaGripLines, FaRegCommentAlt, FaPaperclip, FaRetweet, FaRegWindowClose 
    } from "react-icons/fa";

import { GlobalContext } from '../App';

export default function AgendaItem() {
    const { daySelected, dispatchCalAgenda, selectedAgenda, setShowAgendaItem, 
        // agenda, setAgenda
    } = useContext(GlobalContext);
    
    const [ agenda, setAgenda ] = useState(
        selectedAgenda ? selectedAgenda.agenda : ""
    );

    function handleSubmit(e) {
        e.preventDefault();
        const calendarAgenda = {
            agenda,
            day: daySelected.valueOf(),
            id: selectedAgenda ? selectedAgenda.id : Date.now(),
        };
        if(selectedAgenda){
            dispatchCalAgenda({ type: "update", payload: calendarAgenda });
        } else {
            dispatchCalAgenda({ type: "push", payload: calendarAgenda });
        }
        setShowAgendaItem(false);
    }

  return (
    <div>
        <div className="add-agenda-item rounded-2xl p-4 mt-4 shadow-xl bg-yellow-600">
            <div className="agenda-item-content flex items-center justify-between">
                <FaRegCircle />
                <div className="mr-[700px]">Enter item</div>
                <FaRegUserCircle />
                    {selectedAgenda && (
                        <button 
                        onClick={() => {
                            dispatchCalAgenda({type: "delete", payload: selectedAgenda});
                            setShowAgendaItem(false);
                            }}
                        className="cursor-pointer"
                        >
                            <FaTrashAlt />
                        </button>
                    )}
                <button onClick={() => setShowAgendaItem(false)}>
                    <FaRegWindowClose />
                </button>
            </div>
            <form className="" onSubmit={handleSubmit}>
                <input 
                    className="mt-2 border  border-green-400 text-red-800 w-1/2 px-2 py-1 mx-8"
                    type="text"
                    placeholder="Add event"
                    name="agenda"
                    value={agenda}
                    required
                    onChange={(e) => setAgenda(e.target.value)}
                    />
                <button type="submit" className="rounded-xl px-4 border border-green-800 hover:bg-green-200">  
                    submit
                </button>
            </form>
            <div className='px-2 mx-8 mb-10 mt-4'>
                <p>
                    {daySelected.format("dddd, MMMM DD")}
                </p>
            </div>
            <div className="agenda-item-control justify-between flex">
                <ul className="agenda-control-options flex text-xs ml-8">
                    <li className="mr-3">
                        <p>+ Next step</p>
                    </li>
                    <li className="flex items-center mr-3">
                        <FaGripLines className="items-center mr-1"/>
                        <p>Add notes</p>
                    </li>
                    <li className="flex items-center mr-3">
                        <FaRegCommentAlt className="items-center mr-1"/>
                        <p>Comment</p>
                    </li>
                    <li className="items-center mr-3">
                        <FaPaperclip />
                    </li>
                    <li  className="items-center mr-3">
                        <FaRetweet />
                    </li>
                </ul>
                <span>
                    <div className='text-xs'>Add by krid suwannawat 26 Nov</div>
                </span>
            </div>
        </div>
    </div>
  )
}
