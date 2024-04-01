import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
  const context = useContext(noteContext)
  const { addNotes } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })


  const [noteColorSelector, setNoteColorSelector] = useState({
    color: {
      backgroundColor: "#FFFFFF",
      tagColor: "#FB6C6C"
    }
  })

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleClickAddNote = () => {
    addNotes(note.title, note.description, note.tag, noteColorSelector.color)
    setNote({ title: "", description: "", tag: "" })
  }
  const fadedColorforInputbox = (inputColor) => {
    // Original color
    const originalColor = inputColor;

    // Convert the original color to RGB
    const r = parseInt(originalColor.substring(1, 3), 16);
    const g = parseInt(originalColor.substring(3, 5), 16);
    const b = parseInt(originalColor.substring(5, 7), 16);

    // Define the opacity level for the glass effect (between 0 and 1)
    const opacity = 0.3; // Adjust as needed for the desired effect

    // Faded color by mixing with white and applying opacity
    const fadedR = Math.round(r * (1 - opacity) + 255 * opacity);
    const fadedG = Math.round(g * (1 - opacity) + 255 * opacity);
    const fadedB = Math.round(b * (1 - opacity) + 255 * opacity);

    // Convert the faded RGB values back to hexadecimal
    const fadedColor = `rgba(${fadedR}, ${fadedG}, ${fadedB}, ${opacity})`;

    return fadedColor // Output: Faded version of the original color

  }
  return (
    <div >
      <div className="container my-2 shadow p-3 mb-5" style={{ maxWidth: "425px", minHeight: '370px', borderRadius: "35px", backgroundColor: noteColorSelector.color.backgroundColor }}>
        <div className="d-flex justify-content-between align-items-center ml-2 mr-4">
          <h2 className="d-flex justify-content-center" style={{ minWidth : "90%" ,fontSize: "30px", marginTop: "5px", padding: "5px 0px 0px 40px", color: "#000000" }}>Take a note</h2>
          <div className="btn-group d-flex align-items-center " role="group" style={{ width: "37px", height: "37px", margin: "0 0 10px" }}>
            <button style={{ padding: "0px", marginTop: "3px", borderRadius: "14px" }} type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-palette fa-xl mx-2"></i>
            </button>
            <ul className="dropdown-menu">
              <div className="d-flex  flex-row justify-content-center align-items-center">
                <div onClick={() => { setNoteColorSelector({ color: { backgroundColor: "#FFFFFF", tagColor: "#FB6C6C" } }) }} className="mx-2 d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#FFFFFF", borderColor: "black", borderWidth: "2px" }}><i className="fa-solid fa-ban fa-xl"></i></div>
                <div onClick={() => { setNoteColorSelector({ color: { backgroundColor: "#F6E2DD", tagColor: "#F5977F" } }) }} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#F6E2DD" }}></div>
                <div onClick={() => setNoteColorSelector({ color: { backgroundColor: "#D4E4ED", tagColor: "#57A3CD" } })} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#D4E4ED" }}></div>
                <div onClick={() => setNoteColorSelector({ color: { backgroundColor: "#F39F76", tagColor: "#E46E34" } })} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#F39F76" }}></div>
                <div onClick={() => setNoteColorSelector({ color: { backgroundColor: "#FFF8B8", tagColor: "#FFC90A" } })} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#FFF8B8" }}></div>
                <div onClick={() => setNoteColorSelector({ color: { backgroundColor: "#D3BFDB", tagColor: "#A266C7" } })} className="mx-2" style={{ width: "30px", height: "30px", borderRadius: "30px", backgroundColor: "#D3BFDB" }}></div>
              </div>
            </ul>
          </div>
        </div>
        <div style={{ margin: "20px 10px 0px" }} >
          <input style={{ fontSize: "25px", backgroundColor: noteColorSelector.color.backgroundColor }} type="text" className="form-control border-0" id="title" name="title" placeholder="title" onChange={handleChange} value={note.title} />
        </div>
        <div className="mb-3" style={{ margin: "5px 10px" }}>
          <textarea style={{ fontSize: "20px", fontWeight: "300", backgroundColor: noteColorSelector.color.backgroundColor }} className="form-control border-0" id="description" name="description" rows="6" placeholder="description" onChange={handleChange} value={note.description}></textarea>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className='mb-1' style={{width : "78%"}}>
            <input style={{ fontSize: "20px",  height: "37px", backgroundColor: fadedColorforInputbox(noteColorSelector.color.tagColor) }} type="text" className="form-control rounded-pill" id="tag" name="tag" placeholder="tag" onChange={handleChange} value={note.tag} />
          </div>
          <button style={{ backgroundColor: noteColorSelector.color.tagColor, width: "70px", height: "37px" }} disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn  rounded-pill" onClick={handleClickAddNote}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddNote