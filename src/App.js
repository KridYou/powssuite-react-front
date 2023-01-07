import React, { useState, useEffect, useReducer } from 'react'
import dayjs from 'dayjs';

import { FaUserAlt, FaGgCircle, FaBars, FaUserPlus, FaUserFriends, FaPaste, FaStickyNote, FaRegUserCircle } from 'react-icons/fa'
import { IoMdSettings } from "react-icons/io";

import { Nextstep } from './components/Nextstep';
import { Agenda } from './components/Agenda';
import { Goals } from './components/Goals';
import { Insights } from './components/Insights';
import { PastMeetings } from './components/PastMeetings';
import { Settings } from './components/Settings';

import { SidebarCalendar } from "./components/SidebarCalendar";
import { SidebarWorkspace } from "./components/SidebarWorkspace";

import { getMonth } from './util';

const GlobalContext = React.createContext();
export { GlobalContext };

// ---------- Function -----------------------------------------
function savedAgendasReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((agd) => 
        agd.id === payload.id ? payload : agd
      );
    case "delete":
      return state.filter((agd) => agd.id !== payload.id);
    default:
      throw new Error();
  }
}

function initAgendas() {
  const storageAgendas = localStorage.getItem('savedAgendas')
  const parsedAgendas = storageAgendas ? JSON.parse(storageAgendas) : [];
  return parsedAgendas
}

// ----------------------------------


function App() {
  // ------authen part -----------
  useEffect(() => {
    const token = localStorage.getItem('token')
      fetch('http://localhost:3333/authen', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
          }
        })
      .then(response => response.json())
      .then(data => {
          if(data.status === 'ok') {
              // alert('authen success')
          } else {
              alert('authen fail')
              localStorage.removeItem('token');
              window.location = '/login'
          }
      })
      .catch((error) => {
          console.error('Error:', error);
      });
  }, [])

  // ------ Global Context -----------
  const [calendarState, setCalendarState] = useState(false);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [showAgendaItem, setShowAgendaItem]  = useState(true);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [selectedAgenda, setSelectedAgenda] = useState(null);
//   const [ agenda, setAgenda ] = useState(
//     selectedAgenda ? selectedAgenda.agenda : ""
// );
  const [savedAgendas, dispatchCalAgenda] = useReducer(
    savedAgendasReducer, 
    [], 
    initAgendas
  );
  
  // ----------- useEffect ------------
// -----save agenda to localstorage
  useEffect(() => {
    localStorage.setItem('savedAgendas', JSON.stringify(savedAgendas));
  }, [savedAgendas]);

// ---- debug when select siedbarAgenda ---
  useEffect(() => {
    if(!showAgendaItem) {
      setSelectedAgenda(null);
    }
  }, [showAgendaItem])

  // ------------------------------------

  const [ open, setOpen ] = useState(false);
  const [ currentSidebar, setCurrentSidebar ] = useState('SidebarCalendar');
  const [ currentTab, setCurrentTab ] = useState('Agenda');

  let renderSidebar = {
    SidebarCalendar: <SidebarCalendar month={currentMonth} />,
    SidebarWorkspace: <SidebarWorkspace />,
  }
  
  let renderTab = {
    Agenda: <Agenda />,
    Nextstep: <Nextstep />,
    Goals: <Goals />,
    Insights: <Insights />,
    PastMeetings: <PastMeetings />,
    Settings: <Settings />,
  }

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location = '/login'
  }

  return (
    <GlobalContext.Provider value={{
      currentMonth, setCurrentMonth, calendarState, setCalendarState,
      monthIndex, setMonthIndex, showAgendaItem, setShowAgendaItem, daySelected, setDaySelected,
      dispatchCalAgenda, savedAgendas, selectedAgenda, setSelectedAgenda,
      // agenda, setAgenda,
      }}>
      <div className="App w-screen h-screen">
        <div className="navbar w-full h-[66px] items-center flex justify-between">
          <div className='brand items-center flex'>
              <a href='#' className='ml-8' 
                onClick={() => {
                  setOpen(!open);
                  setCalendarState(false);
                  }}>
                <FaBars />
              </a>
              <h1 className='ml-8 text-xl'>
                Pows Suite
              </h1>
            </div>
            <div className='nav flex items-center'>
              <label class="block mr-40 w-72">
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search"/>
              </label>
              <button className='btn-invite flex items-center border border-slate-500 hover:bg-gray-300 rounded h-2/3 px-2 py-1.5 mr-8'>
                <a href='#' className='mr-2 items-center text-sm'>
                  <FaUserPlus />
                </a>
                <div>Invite</div>
              </button>
              <button className='btn-next items-center flex mr-8 hover:bg-gray-300 rounded px-2 py-1.5'>
                <div>Next Steps</div>
                <a href='#' className='ml-2'>
                  <FaGgCircle />
                </a>
              </button>
              <a href='#' className='mr-8'>
                <FaUserAlt className=''/>
              </a>
              <button onClick={handleLogout} className='btn-logout flex items-center border border-slate-500 hover:bg-gray-300 rounded h-2/3 px-2 py-1.5 mr-8'>
                <div>Logout</div>
              </button>

            </div>
        </div>

        <div className="content w-full h-[calc(100%-66px)] flex">
          <div className={`sidebar ${open ? "w-[272px]" : "w-0" } h-full border-solid border-r-[1px]`}>
            <div className='sidbar-nav-top w-full h-[32px] flex justify-evenly items-center bg-slate-200 overflow-hidden'>
              <button className = {`btn-workspace w-1/2 mx-1 ${currentSidebar === 'SidebarWorkspace' ? "bg-white" : "bg-inherit"} rounded`} onClick={() => setCurrentSidebar('SidebarWorkspace')}>
                Work space
              </button>
              <button className={`btn-calendar w-1/2 mx-1 ${currentSidebar === 'SidebarCalendar' ? "bg-white" : "bg-inherit"} rounded`} onClick={() => setCurrentSidebar('SidebarCalendar')}>
                Calendar
              </button>
            </div>
              {renderSidebar[currentSidebar]}
          </div>
          <div className= {`work-space ${open ? "w-[calc(100%-272px)]" : "w-full" }`}>
            <div className='work-space-nav border-gray-200 border-solid border-t-[1px] border-b-[1px] w-full h-[50px] py-1 justify-between flex items-center'>
              <div className='nav-avatar flex items-center ml-6'>
                <a href='#' className='mr-8 items-center text-2xl'>
                  <FaUserPlus />
                </a>
              </div>
              <div className='nav-title'>
                <div className='title'>
                  Event Name
                </div>
                <a href='#' className='member flex items-center text-xs'>
                  <FaUserFriends className='mr-2'/>
                  <p>1 member</p>
                </a>
              </div>
              <div className='nav-action flex items-center'>
                <button className = {`btn-Agenda ${currentTab === 'Agenda' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md px-2 py-1 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('Agenda')}>
                  Agendar
                </button>
                <button className= {`btn-Nextstep ${currentTab === 'Nextstep' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md px-2 py-1 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('Nextstep')}>
                  Next Step
                </button>
                <button className= {`btn-Insights ${currentTab === 'Insights' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md px-2 py-1 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('Insights')}>
                  Insights
                </button>
                <button className= {`btn-Goals ${currentTab === 'Goals' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md px-2 py-1 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('Goals')}>
                  Goals
                </button>
                <a href='#' className = {`btn-PastMeetings text-xl ${currentTab === 'PastMeetings' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md p-1.5 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('PastMeetings')}>
                  <FaPaste className=''/>
                </a>
                <a href='#' className='btn-Scratchpad p-1.5 rounded hover:bg-gray-200 mr-8'>
                  <FaStickyNote className=''/>
                </a>
                <a href='#'>
                  <FaRegUserCircle className='btn-Users mr-8 text-xl'/>
                </a>
                <button className='btn-Share border-solid border-red-500 mr-8 bg-blue-500 rounded text-white px-2 py-1 text-sm'>
                  Share
                </button>
                <a href='#' className={`btn-Settings text-xl ${currentTab === 'Settings' ? "bg-blue-100 text-blue-400 hover:bg-blue-100" : "bg-inherit"} hover:bg-gray-200 rounded-md p-1 border-solid border-red-500 mr-8`} onClick={() => setCurrentTab('Settings')}>
                  <IoMdSettings className='btn-Settings'/>
                </a>
              </div>
            </div>

            <div className='work-space h-[calc(100%-50px)] overflow-y-auto'>
              {renderTab[currentTab]}
            </div>
            
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
