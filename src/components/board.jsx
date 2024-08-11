import React, { useState } from 'react'
import Confetti from 'react-confetti'
import { MdEdit } from "react-icons/md";

function getDate(){
    const currentDate = new Date;
    const year =  currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    return `${year}/${month}/${day}`
}


function Board(){
    const [date, setDate] =  useState(getDate())
    const [readOnly, setReadOnly] = useState(false)
    const [isHideEdit, setIsHideEdit] = useState('hidden')
    const [isHideSave, setIsHideSave] = useState('')
    const [celebrationActive, setCelebrationActive] = useState(false);
    function onEdit(){
        setReadOnly(false)
        setIsHideSave('')
        setIsHideEdit('hidden')
    }
    function onSave(){
        setReadOnly(true)
        setIsHideEdit('')
        setIsHideSave('hidden')

        setCelebrationActive(true);
        // Optionally, stop the confetti after a few seconds
        setTimeout(() => setCelebrationActive(false), 3000);
        
    }
    return(
        <>
        {celebrationActive && <Confetti gravity={0.2}  />}
        <div className=' h-72 w-72 shadow-lg bg-white rounded-md relative'>
            <MdEdit onClick={onEdit} className={ `absolute right-0 m-2 ${isHideEdit}`} />
            <button onClick={onSave} className= {` absolute bottom-6 right-1 bg-sky-700 px-3 text-white ${isHideSave}`}>Save</button>
            <div className=' p-2'>
                <textarea readOnly={readOnly} className=' w-full overflow-hidden h-64 resize-none outline-none' placeholder='Write something here...' />
            </div>
            <div className=' absolute bottom-0 right-0 px-2 border-t-2 border-emerald-400 text-sm w-full text-end  text-slate-950'>{date}</div>
        </div>
        </>
    )
}

export default Board
