import React, { useContext } from 'react'
import { createContext } from "react";
import noteContext from '../context/notes/noteContext';
const About = () => {
  let a = useContext(noteContext)
  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-flex justify-content-center flex-column" style={{ width: "90%" }}>
          <div className="d-flex" style={{ fontSize: "5rem" }}>About Us</div>
          <p style={{ fontSize: "1.4rem", textAlign: "left" }}>
          Welcome to our note-taking website, where organizing your thoughts, ideas, and tasks is seamless and efficient. Our platform boasts a user-friendly interface designed to boost your productivity and streamline your note-taking experience. With features like easy note creation, effortless editing, and simple deletion, managing your notes has never been easier. Plus, our color customization options allow you to personalize your notes and make them visually appealing. Your data is securely stored in your individual account, ensuring privacy and accessibility. Why choose us? We offer a user-friendly interface, robust security measures, customizable features, and continuous updates based on user feedback. Sign up today and discover the convenience and efficiency of our platform, whether you're a student, professional, or simply looking to stay organized.</p>
        </div>
      </div>



{/*       
      <div className="row mt-5">
        <div className="my-2 col-sm-4 d-flex justify-content-center" style={{ width: "440px" }}>
          <div className="" style={{ maxWidth: "325px", borderWidth: "1px", borderStyle: "solid", borderRadius: "40px", minHeight: "144px" }}>
            <div className="" style={{ fontSize: "1.7rem", fontWeight: "500", margin: "10px 0 0" }}>Note Creation</div>
            <p style={{ margin: "10px 15px" }}> Easily create new notes by clicking on the "New Note" button</p>
          </div>
        </div>
        <div className="my-2 col-sm-4 d-flex justify-content-center" style={{ width: "440px" }}>
          <div className="" style={{ maxWidth: "325px", borderWidth: "1px", borderStyle: "solid", borderRadius: "40px", minHeight: "144px" }}>
            <div className="" style={{ fontSize: "1.7rem", fontWeight: "500", margin: "10px 0 0" }}>Note Editing</div>
            <p style={{ margin: "10px 15px" }}> Simply click on the note you wish to edit, make your changes, and save them with ease.</p>
          </div>
        </div>
        <div className="my-2 col-sm-4 d-flex justify-content-center" style={{ width: "440px" }}>
          <div className="" style={{ maxWidth: "325px", borderWidth: "1px", borderStyle: "solid", borderRadius: "40px", minHeight: "144px" }}>
            <div className="" style={{ fontSize: "1.7rem", fontWeight: "500", margin: "10px 0 0" }}>Note Deletion</div>
            <p style={{ margin: "10px 15px" }}>  Finished with a note? You can delete it effortlessly by clicking on the delete icon</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="my-2 col-6 d-flex justify-content-center" style={{ width: "660px" }}>
          <div className="" style={{ maxWidth: "325px", borderWidth: "1px", borderStyle: "solid", borderRadius: "40px", minHeight: "144px" }}>
            <div className="" style={{ fontSize: "1.7rem", fontWeight: "500", margin: "10px 0 0" }}>Color Customization</div>
            <p style={{ margin: "10px 15px" }}> Make your notes stand out with our color customization feature</p>
          </div>
        </div>
        <div className="my-2 col-6 d-flex justify-content-center" style={{ width: "660px" }}>
          <div className="" style={{ maxWidth: "325px", borderWidth: "1px", borderStyle: "solid", borderRadius: "40px", minHeight: "144px" }}>
            <div className="" style={{ fontSize: "1.7rem", fontWeight: "500", margin: "10px 0 0" }}>Account Management</div>
            <p style={{ margin: "10px 15px" }}>  Securely store all your notes in your individual account</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="d-flex justify-content-center flex-column" style={{ width: "90%" }}>
          <div className="d-flex mb-4" style={{ fontSize: "2rem" ,fontWeight : "500" }}>Get Started Today!</div>
          <p style={{ fontSize: "1.4rem", textAlign: "left" }}>
          Ready to elevate your note-taking experience? Sign up for an account today and discover the convenience and efficiency of our platform. Whether you're a student, professional, or simply someone looking to stay organized, we're here to support your journey towards enhanced productivity and organization.</p>
        </div>
      </div> */}
    </div>
  )
}

export default About