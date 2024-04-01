import React, { useContext, useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'
const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getallNotes, editNotes } = context
  const [note, setNote] = useState({ eid: "", etitle: "", edescription: "", etag: "default" })

  const ref = useRef(null);
  const refclose = useRef(null);

  let navigate = useNavigate()

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleEditNotesModelText = (currentNote) => {
    ref.current.click()
    setNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }
  
  const handleEditNotes = () => {
    refclose.current.click()
    editNotes(note.eid, note.etitle, note.edescription, note.etag)
    setNote({ eid: "", etitle: "", edescription: "", etag: "" })
  }
  useEffect(() => {
    if(localStorage.getItem('auth-token')){
      getallNotes();
    }
    else {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <AddNote />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  my-2 shadow p-3 mb-5" style={{ maxWidth: "460px", minHeight: '370px', borderRadius: "35px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>title</label>
                <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="text" className="form-control" id="etitle" name="etitle" placeholder="etitle" onChange={handleChange} value={note.etitle} />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>Description</label>
                <textarea style={{ borderRadius: "15px",minHeight : "150px",  backgroundColor: "#f2f2f2" }} className="form-control" id="edescription" name="edescription" rows="3" placeholder="edescription" onChange={handleChange} value={note.edescription}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>tag</label>
                <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="text" className="form-control" id="etag" name="etag" placeholder="etag" onChange={handleChange} value={note.etag} />
              </div>
            </div>
            <div className="modal-footer">
              <button ref={refclose} style={{borderRadius: "15px", height: "44px", backgroundColor : "rgba(126, 188, 245, 1)"}} type="button" className="btn"  data-bs-dismiss="modal">Close</button>
              <button style={{  borderRadius: "15px", backgroundColor: "#FB6C6C", height: "44px" }} type="button" className="btn" onClick={handleEditNotes}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
          <h2 className='d-flex' style={{fontSize : "34px"}}>Notes</h2>
        <div className="row">
          <div className="container">
            {notes.length === 0 && "No notes to display"}
          </div>
          {notes.map((note) => {
            return <Noteitem key={note._id} handleEditNotesModelText={handleEditNotesModelText} note={note} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes