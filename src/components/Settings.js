import React, { useState } from "react";

import { FaUserCircle, FaPlus } from "react-icons/fa";

import { 
    BsToggleOn, BsFillCaretDownFill, 
    BsEmojiLaughingFill, BsEmojiSmile, BsEmojiNeutral 
} from "react-icons/bs";



export const Settings = () => {
    const [currentSideTab, setCurrentSideTab] = useState('');
    
    const [toggle, setToggle] = useState([
        {
            id: 1,
            name: 'calendar-integration',
            toggleState: false,
        },
        {
            id: 2,
            name: 'meetMinuteEmail',
            toggleState: false,
        },
        {
            id: 3,
            name: 'meetReminderEmail',
            toggleState: false,
        },
        {
            id: 4,
            name: 'slack',
            toggleState: false,
        },
        {
            id:5,
            name: 'mobile-app',
            toggleState: false,
        },
        {
            id:6,
            name: 'ask-team-member',
            toggleState: false,
        }
    ]);

    const updateToggle = (id) => {
        setToggle(
            toggle.map((e) => 
                e.id === id ? {...e,
                toggleState: !e.toggleState} : e
                )
            );
    }

    let [active, setActive] = useState(false);

    return(
        <>
            <div className="Settings w-full h-full flex">
                <div className="w-[240px] border-gray-200 border-solid border-r-[1px]">
                    <h1 className="Sidebar-title p-2 font-bold border-gray-200 border-solid border-b-[1px]">
                        Workspaces Settings
                    </h1>
                    <ul className="Sidebar-section">
                        <li role="button" className={`flex ${currentSideTab === 'Appearance' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('Appearance')}>
                            <div className={`w-[10px] ${currentSideTab === 'Appearance' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Appearance</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'ImportantDates' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('ImportantDates')}>
                            <div className={`w-[10px] ${currentSideTab === 'ImportantDates' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Important Dates</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'Integrations' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('Integrations')}>
                            <div className={`w-[10px] ${currentSideTab === 'Integrations' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Integrations</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'Notifications' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('Notifications')}>
                            <div className={`w-[10px] ${currentSideTab === 'Notifications' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Notifications</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'MeetingRating' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('MeetingRating')}>
                            <div className={`w-[10px] ${currentSideTab === 'MeetingRating' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Meeting Rating</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'Members' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('Members')}>
                            <div className={`w-[10px] ${currentSideTab === 'Members' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Members</p>
                        </li>
                        <li role="button" className={`flex ${currentSideTab === 'RemoveWorkspace' ? 'bg-gray-200' : ''}`} onClick={() => setCurrentSideTab('RemoveWorkspace')}>
                            <div className={`w-[10px] ${currentSideTab === 'RemoveWorkspace' ? 'bg-green-200' : ''}`}></div>
                            <p className="p-2 text-gray">Remove Workspace</p>
                        </li>
                    </ul>
                </div>

                <div className="p-12 w-[calc(100%-240px)] overflow-y-scroll">
                    <section className="Apearance border-solid border-b-[1px] border-gray-300 pb-10">
                        <div className="Heading  mb-6">
                            <span className="text-xl font-bold">Appearance</span>
                        </div>
                        <div className="Appearance-content">
                            <div className="Section-name w-72">
                                <span className="Subtitle">
                                    <h5 className="uppercase text-xs mb-2">workspace name</h5>
                                </span>
                                <div className="Input border-solid border-2 border-gray-200 rounded py-1">
                                    <p className="mx-2">Event Name</p>
                                </div>
                            </div>
                            <div className="Section-design mt-4">
                                <div>
                                    <span>
                                        <p>color</p>
                                    </span>
                                    <div>
                                        <div className="w-8 h-8 bg-green-200 rounded mt-2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Integration py-10 border-solid border-b-[1px] border-gray-300">
                        <div className="Integration-heading font-bold text-xl">Integrations</div>
                        <div className="Integration-content">
                            <span>
                                <h2 className="font-bold mt-4">Calendar Integration</h2>
                            </span>
                            <div className="justify-between flex items-start">
                                <p>
                                    Connecting to Google Calendar or Outlook will allow you to sync this workspace <br /> to one of your existing calendar events.
                                </p>
                                <div className="flex items-center">
                                    <span className="mr-2">
                                        {toggle[0].toggleState ? 'On' : 'Off' }
                                    </span>
                                    <label class="inline-flex relative items-center cursor-pointer" >
                                        <input type="checkbox" value={toggle[0].toggleState} class="sr-only peer" onClick={() => updateToggle(1)}></input>
                                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Personal-notification py-10 border-solid border-b-[1px] border-gray-300">
                        <div className="Personal-noti-heading">
                            <span className="font-bold text-xl">
                                Personal Notifications
                            </span>
                        </div>
                        <div className="Meet-minute-email mt-4">
                            <div className="">
                                <span className="font-bold">
                                    Meeting Minutes Email
                                </span>
                                <div className="flex items-start justify-between">
                                    <p>
                                        Receive an email of notes every time the meeting ends. <br />
                                        Turning this setting off will prevent only you from receiving these emails
                                    </p>
                                    <div className="Toggle flex items-center">
                                        <span className="mr-2">
                                            {toggle[1].toggleState ? 'On' : 'Off' }
                                        </span>
                                        <label class="inline-flex relative items-center cursor-pointer" >
                                            <input type="checkbox" value={toggle[1].toggleState} class="sr-only peer" onClick={() => updateToggle(2)}></input>
                                            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        <div className="Meet-remind-email mt-4">
                            <div className="">
                                <span className="font-bold">
                                    Meeting Reminder Email
                                </span>
                                <div className="flex items-start justify-between">
                                    <p>
                                        We’ll email all the members when this meeting is happening based <br />
                                        on your selection. Only the manager of this workspace can edit this setting.
                                    </p>
                                    <div className="Toggle flex items-center">
                                        <span className="mr-2">
                                            {toggle[2].toggleState ? 'On' : 'Off' }
                                        </span>
                                        <label class="inline-flex relative items-center cursor-pointer" >
                                            <input type="checkbox" value={toggle[2].toggleState} class="sr-only peer" onClick={() => updateToggle(3)}></input>
                                            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Mobile-noti mt-4">
                            <div className="">
                                <span className="font-bold">
                                    Mobile Notifications
                                </span>
                                <p className="mb-4">
                                    Edit the types of notifications you’d like to receive on our iOS and Android apps.
                                </p>
                                <div className="flex items-center justify-between">
                                    <p>
                                        Slack
                                    </p>
                                    <div className="flex items-center">
                                        <span className="mr-2">
                                            {toggle[3].toggleState ? 'On' : 'Off' }
                                        </span>
                                        <label class="inline-flex relative items-center cursor-pointer" >
                                            <input type="checkbox" value={toggle[3].toggleState} class="sr-only peer" onClick={() => updateToggle(4)}></input>
                                            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between">
                                    <p>
                                        Mobile Apps
                                    </p>
                                    <div className="flex items-center">
                                        <span className="mr-2">
                                            {toggle[4].toggleState ? 'On' : 'Off' }
                                        </span>
                                        <label class="inline-flex relative items-center cursor-pointer" >
                                            <input type="checkbox" value={toggle[4].toggleState} class="sr-only peer" onClick={() => updateToggle(5)}></input>
                                            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Select-type mt-4">
                            <div>
                                <p>Select what types of notifications you’d like to receive:</p>
                                <div className="Newitem-add flex items-start mt-4">
                                    <label>
                                        <input type="checkbox"></input>
                                    </label>
                                    <div className="ml-4 ">
                                        <span className="font-bold">
                                            New Items Added
                                        </span>
                                        <p>
                                            Get an update when an items is added to this workspace’s agenda.
                                        </p>

                                    </div>
                                </div>
                                <div className="Act-onItem flex items-start mt-4">
                                    <label>
                                        <input type="checkbox"></input>
                                    </label>
                                    <div className="ml-4">
                                        <span className="font-bold">
                                            Activity on Items
                                        </span>
                                        <p>
                                            Get an update when there are changes to an item on this workspace’s agenda. Including adding notes, next steps, and comments.
                                        </p>
                                    </div>
                                </div>
                                <div className="Meet-event flex items-start mt-4">
                                    <label>
                                        <input type="checkbox"></input>
                                    </label>
                                    <div className="ml-4">
                                        <span className="font-bold">
                                            Meeting Events
                                        </span>
                                        <p>
                                        Get an update when the meeting associated with this workspace is about to start and when the meeting was finished in Soapbox.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Meeting-rating py-10 border-solid border-b-[1px] border-gray-300">
                        <div className="Meet-rat-heading">
                            <span className="font-bold text-xl">
                                Meeting Rating
                            </span>

                        </div>
                        <div className="mt-6">
                            <div className="flex items-start justify-between">
                                <p>
                                Ask team members to rate each meeting, so you can identify trends over time. <br />
                                Choose your question below, or disable this feature by turning the toggle off. <br />
                                Changing the question will take effect the next time you finish a meeting.
                                </p>
                                <div className="flex items-center">
                                    <span className="mr-2">
                                        {toggle[5].toggleState ? 'On' : 'Off' }
                                    </span>
                                    <label class="inline-flex relative items-center cursor-pointer" >
                                        <input type="checkbox" value={toggle[5].toggleState} class="sr-only peer" onClick={() => updateToggle(6)}></input>
                                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="Question mt-4">
                            <h3 className="font-bold uppercase">Question</h3>
                            <div className="flex justify-between border-solid border-[1px] border-gray-300 py-3 px-5 rounded-lg items-center mt-2">
                                <div>
                                    How would you rate this meeting?
                                </div>
                                <i>
                                    <BsFillCaretDownFill />
                                </i>
                            </div>
                            <div className="Response mt-5">
                                <h3>
                                    Response
                                </h3>
                                <div className="flex justify-start border-solid border-[1px] border-gray-300 py-3 px-5 rounded-lg items-center mt-2">
                                    <BsEmojiLaughingFill className="text-yellow-400"/>
                                    <p className="ml-3">Excellent</p>
                                </div>
                                <div className="flex justify-start border-solid border-[1px] border-gray-300 py-3 px-5 rounded-lg items-center mt-2">
                                    <BsEmojiSmile className="text-yellow-400"/>
                                    <p className="ml-3">Good</p>
                                </div>
                                <div className="flex justify-start border-solid border-[1px] border-gray-300 py-3 px-5 rounded-lg items-center mt-2">
                                    <BsEmojiNeutral className="text-yellow-400"/>
                                    <p className="ml-3">Needs Improvment</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="Participant py-10 border-solid border-b-[1px] border-gray-300">
                        <div>
                            <span className="font-bold text-xl">
                                Participants
                            </span>
                        </div>
                        <div className="Member mt-8">
                            <span className="uppercase text-xs">
                                1 member
                            </span>
                        </div>
                        <div className="Account flex justify-start items-center mt-4">
                            <div className="Account-user flex items-center w-96">
                                <FaUserCircle className="text-2xl"/>
                                <div className="ml-4">
                                    <h3 className="font-bold">
                                        Krid Suwannawat
                                    </h3>
                                    <p className="text-xs">
                                        krid.suw@gmail.com
                                    </p>
                                </div>
                            </div>
                            <span>
                                <p className="text-xs">Manager</p>
                            </span>
                        </div>
                        <div className="Invite-member mt-8">
                            <a className="flex items-center">
                                <FaPlus className="mr-2 text-xs"/>
                                <p className="text-sm">Invite team members</p>
                            </a>
                        </div>
                    </section>
                    <section className="Remove-agenda py-10 border-solid border-b-[1px] border-gray-300">
                        <div>
                            <span className="font-bold text-xl">
                                Remove Agenda
                            </span>
                        </div>
                        <div className="Archieve mt-6">
                            <span className="text-sm font-bold">
                                Archive
                            </span>
                            <div className="flex items-start justify-between">
                                <p>
                                    Archiving this workspace will pause notifications and move it to the "Archived" <br />
                                    section for all members of this workspace. Don't worry you can always restore a <br />
                                    workspace.
                                </p>
                                <button className="rounded border-solid border-[1px] border-gray-300 px-3 py-1 hover:bg-gray-200">
                                    Archive
                                </button>
                            </div>
                        </div>
                        <div className="Delete mt-6">
                            <span className="text-sm font-bold">
                                Delete
                            </span>
                            <div className="flex items-start justify-between">
                                <p>
                                    This workspace and all of its data will be permanently deleted for all members.
                                </p>
                                <button className="rounded border-solid border-[1px] border-red-300 px-3 py-1 hover:bg-gray-200 text-red-5 00">
                                    Delete
                                </button>
                            </div>
                            
                        </div>

                    </section>
                </div>
            </div>
        </>
        
    )
}