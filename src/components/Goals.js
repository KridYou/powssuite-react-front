import React from "react";

import { BsLightningCharge } from 'react-icons/bs'

export const Goals = () => {
    return(
        <>
            <div className="goals m-14">
                <div className="someVideo">
                    <iframe className="mx-auto" width="642" height="150" src="https://www.youtube.com/embed/gQlMMD8auMs" title="BLACKPINK - ‘Pink Venom’ M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="upGrade pt-6">
                    <h1 className="text-center text-xl font-bold">Upgrade to Business to access Goals</h1>
                    <p className="text-center">Add goals to your meeting agendas to keep your team aligned and regularly track progress.</p>
                    <button className="mx-auto flex items-center rounded bg-purple-600 px-4 text-white hover:bg-purple-800 mt-4 py-1">
                        <BsLightningCharge className="mr-2"/>
                        <p>Upgrade to Business</p>
                    </button>
                </div>
            </div>
        </>
        
    )
}