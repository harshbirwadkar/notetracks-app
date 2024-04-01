import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import ALertState from './context/alert/AlertState';
function App() {
  return (
    <div className="App">
      <ALertState>
        <NoteState>
          <Router>
            <Navbar />
            <Alert />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
              </Routes>
            </div>
          </Router>
        </NoteState>
      </ALertState>
    </div>
  );
}

export default App;
