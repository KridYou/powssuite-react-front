import React from "react";

import { FaRegUserCircle, FaUserAlt } from 'react-icons/fa'

export const Nextstep = () => {
    return(
        <>
            <div className="next-step px-40 pt-10 pb-5">
                <div className="next-step-content mx-auto my-20 w-[640px]">
                    <header className="header flex items-center m-2 justify-between">
                        <h1 className="next-step text-3xl">
                            Next step
                        </h1>
                        <button className="show-everyone text-sm">
                            Show everyone
                        </button>
                    </header>

                    <main className="mt-6">
                        <section className="next-step-assignee m-2 rounded bg-gray-200">
                            <div className="detail flex items-center justify-between px-2 py-4">
                                <FaRegUserCircle className='mr-8 text-xl'/>
                                <h2>Krid Suwannawat</h2>
                                <div>0 next steps ></div>
                            </div>
                        </section>
                        <section className="next-step-assignee m-2 rounded bg-gray-200">
                            <div className="detail flex items-center justify-between px-2 py-4">
                                <FaUserAlt />
                                <h2>Unassigned</h2>
                                <div>0 next steps ></div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
        
    )
}