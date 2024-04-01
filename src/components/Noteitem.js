import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNotes ,editNoteColor } = context
    const { note, handleEditNotesModelText } = props
    const [noteColorSelector, setNoteColorSelector] = useState({
        color: {
            backgroundColor: note.color.backgroundColor,
            tagColor: note.color.tagColor
        }
    })
    const colorEditDelayDatabase = (color)=>{
        setTimeout(() => {
            editNoteColor(note._id ,color)
        }, 2000);
    }

    const convertToIST = (date) => {
        // Create a new Date object using the provided date or current date
        const currentDate = new Date(date);

        // Set the options for formatting the date
        const options = {
            timeZone: 'Asia/Kolkata', // Set the time zone to Indian Standard Time (IST)
            year: 'numeric', // Show the full numeric year
            month: 'long', // Show the full name of the month
            day: '2-digit', // Show the day in 2-digit format
        };

        // Format the date according to the options
        const ISTDateString = currentDate.toLocaleString('en-IN', options);

        // Replace the space after the day with a comma
        const ISTDateStringWithComma = ISTDateString.replace(/(\d+) (\w+) (\d+)/, "$1 $2, $3");

        return ISTDateStringWithComma;
    }


    return (
        <div className='my-4 col-sm-4 d-flex justify-content-center ' >
            <div className="card shadow" style={{ borderRadius: "20px", width: "350px", minHeight: "370px", backgroundColor: noteColorSelector.color.backgroundColor }}>
                <div className="card-body">
                    <div className="d-flex  flex-row justify-content-end align-items-center mx-2">
                        <div className="btn-group d-flex align-items-center " role="group" style={{ width: "37px", height: "37px" }}>
                            <button style={{ padding: "0px", marginTop: "3px", borderRadius: "14px" }} type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-palette mx-2"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <div className="d-flex  flex-row justify-content-center align-items-center">
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#FFFFFF", tagColor: "#FB6C6C" } }) ; colorEditDelayDatabase({ backgroundColor: "#FFFFFF", tagColor: "#FB6C6C" }) }} className="mx-2 d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#FFFFFF", borderColor: "black", borderWidth: "2px" }}><i className="fa-solid fa-ban fa-xl"></i></div>
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#F6E2DD", tagColor: "#F5977F" } }) ; colorEditDelayDatabase({ backgroundColor: "#F6E2DD", tagColor: "#F5977F" }) }} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#F6E2DD" }}></div>
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#D4E4ED", tagColor: "#57A3CD" } }) ; colorEditDelayDatabase({ backgroundColor: "#D4E4ED", tagColor: "#57A3CD" })}} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#D4E4ED" }}></div>
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#F39F76", tagColor: "#E46E34" } }) ; colorEditDelayDatabase( { backgroundColor: "#F39F76", tagColor: "#E46E34" })}} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#F39F76" }}></div>
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#FFF8B8", tagColor: "#FFC90A" } }) ; colorEditDelayDatabase({ backgroundColor: "#FFF8B8", tagColor: "#FFC90A" })}} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#FFF8B8" }}></div>
                                    <div onClick={() => {setNoteColorSelector({ color: { backgroundColor: "#D3BFDB", tagColor: "#A266C7" } }) ; colorEditDelayDatabase({ backgroundColor: "#D3BFDB", tagColor: "#A266C7" })}}className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#D3BFDB" }}></div>
                                </div>
                            </ul>
                        </div>
                        <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNotes(note._id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { handleEditNotesModelText(note) }}></i>
                    </div>
                    <div className="">
                        <h5 className="card-title mx-3 mt-3 d-flex" style={{ fontSize: "25px" }}>{note.title}</h5>
                        <p className="card-text mx-3 mt-3 d-flex" style={{ fontSize: "20px", minHeight: "225px" }}>{note.description}</p>
                    </div>
                    <div className="d-flex justify-content-between  align-items-center mt-3 mx-1">
                        <div className="d-flex justify-content-center align-items-center " style={{ backgroundColor: noteColorSelector.color.tagColor, height: "30px", minWidth: "100px", borderRadius: "20px", fontSize: "17px", color: "#F4F4F4" }}>
                            {note.tag}
                        </div>
                        <div className="">
                            {convertToIST(note.date)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem