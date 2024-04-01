import React ,{useState , useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import alertContext from '../context/alert/alertContext'

const Signup = () => {
    const context = useContext(alertContext)
    const{ProvokeAlert} = context
    // const host = "http://localhost:5000/"
    const host = process.env.REACT_APP_BASE_URL_NOTETRACK
    const [credentials, setCredentials] = useState({name: "" ,email : "",password : "",cpassword : ""})
    let navigate = useNavigate()
    
    const handleChange = (e)=>{
        setCredentials({...credentials , [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(credentials.cpassword !== credentials.password){
            return ProvokeAlert("danger" , "Password and confirm password doesn't match up" )
        }
        const response = await fetch(`${host}api/auth/createuser`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json"
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name : credentials.name ,email : credentials.email , password : credentials.password }) // body data type must match "Content-Type" header
          });
          let resjsonUser = await response.json() 
        if(!resjsonUser.success){
            return ProvokeAlert("danger" , "Failed to Signup" )
        }
        localStorage.setItem('auth-token',resjsonUser.token)
        ProvokeAlert("success" , "Successfully Signed up" )
        navigate("/")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="container my-2 shadow p-3 mb-5" style={{ maxWidth: "460px", minHeight: '370px', borderRadius: "35px" }}>
            <div className="container" style={{width : "90%"}}>
            <h2 className="d-flex justify-content-center" style={{ minWidth: "345px", fontSize: "30px", marginTop: "5px", marginBottom: "30px", color: "#000000" }}>Sign up</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>Name</label>
                    <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={handleChange} value={credentials.name} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>Email address</label>
                    <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} value={credentials.email}  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>Password</label>
                    <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="password" className="form-control" id="password" name='password' onChange={handleChange} value={credentials.password} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="d-flex form-label" style={{ margin: "0 0 0 5px", color: "#596172" }}>Confirm Password</label>
                    <input style={{ borderRadius: "15px", height: "44px", backgroundColor: "#f2f2f2" }} type="password" className="form-control" id="cpassword" name='cpassword' onChange={handleChange} value={credentials.cpassword} minLength={5} required />
                </div>
                <button  style={{margin : "20px 0 0", width: "100%", borderRadius: "20px", backgroundColor: "#FB6C6C", height: "44px" }} type="submit" className="btn">Submit</button>
                </div>
                </div>
            </form>
    </div>
  )
}

export default Signup