import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NoteDetail from './pages/NoteDetail'
import EditNotes from './pages/EditNotes'

import NoteForm from './pages/NoteForm'
import FloatBtn from './pages/FloatBtn'

import {useState,useEffect} from 'react'
import './App.css';

const App=()=>{
  const [notes, setNotes]=useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))

  },[notes])
  

return (
  <BrowserRouter>
  
  <Routes>
    <Route  path='/' element={<HomePage notes={notes}/>}/>
    <Route path='/notedetail' element={<NoteDetail  />}/>
    <Route  path='/noteform' element={<NoteForm setNotes={setNotes}/>}/>
    <Route  path='/editnotes/:id' element={<EditNotes notes={notes} setNotes={setNotes}/>}/>
    <Route  path='/floatingbutton' element={<FloatBtn/>}/>
    
  </Routes>
  </BrowserRouter>
)
}
  


export default App;
