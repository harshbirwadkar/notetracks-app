import NoteContext from './noteContext'
import { useState , useContext } from "react";
import alertContext from '../alert/alertContext'

const NoteState = (props)=> {
  const context = useContext(alertContext)
  const{ProvokeAlert} = context
  const noteInitialised = []
  // const host = "http://localhost:5000/"
  const host = process.env.REACT_APP_BASE_URL_NOTETRACK
  const [notes, setNotes] = useState(noteInitialised);

  const getallNotes = async ()=>{

    const response = await fetch(`${host}api/notes/getallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let resjsonAllNotes = await response.json() // parses JSON response into native JavaScript objects
     setNotes(resjsonAllNotes)
  }
  
  const addNotes = async (title,description,tag,color)=>{

    const response = await fetch(`${host}api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,description,tag,color}) // body data type must match "Content-Type" header
    });
    let resjsonNote = await response.json()  // parses JSON response into native JavaScript objects
    //  getallNotes()
    console.log(resjsonNote)
    setNotes(notes.concat(resjsonNote))
    ProvokeAlert("success" , "Successfully added the note" )
  }

  const deleteNotes = async (id)=>{
 
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('auth-token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    let resjson = await response.json()

    let filteredNotes = notes.filter((note)=>{
      return id!== note._id
    })
    setNotes(filteredNotes)
    ProvokeAlert("success" , "Successfully deleted the note" )
  }
  const editNotes = async (id, title,description,tag)=>{
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('auth-token')
      },
      body: JSON.stringify({title,description,tag})
    });
    let resjson = await response.json()
    // logic for edit client side 
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if(element._id === id){
        element.title = title
        element.description = description
        element.tag = tag
        break;
      }
    }
    setNotes(newNotes)
    ProvokeAlert("success" , "Successfully deleted the note" )
  }
  const editNoteColor = async (id, color)=>{
    const response = await fetch(`${host}api/notes/updatenotecolor/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('auth-token')
      },
      body: JSON.stringify({color})
    });
    let resjson = await response.json()
    // logic for edit client side 

    // let newNotes = JSON.parse(JSON.stringify(notes))
    // for (let index = 0; index < notes.length; index++) {
    //   const element = newNotes[index];
    //   if(element._id === id){
    //     element.title = title
    //     element.description = description
    //     element.tag = tag
    //     break;
    //   }
    // }
    // setNotes(newNotes)
    ProvokeAlert("success" , "Successfully deleted the note" )
  }

    return (
        <NoteContext.Provider value = {{notes , addNotes ,deleteNotes,editNotes , getallNotes ,editNoteColor}} >
           {props.children}
        </NoteContext.Provider>
    );
}
export default NoteState