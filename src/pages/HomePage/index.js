import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import FloatBtn from '../FloatBtn'
import Header from '../Header'
import './index.css'
import { useState } from 'react'

import NoteDetail from '../NoteDetail'
const  HomePage=({notes})=> {
    const [showSearch,setShowSearch]=useState(false);
    const [text, setText]=useState('')
    const [filteredNotes,setFilteredNotes]=useState(notes)

    const onClickButton=()=>{
        setShowSearch(prevState=>!prevState)
    }
    
    const handleSearch=()=>{
        setFilteredNotes(notes.filter(note=>{
            if(note.title.toLowerCase().match(text.toLowerCase())){
                return note;
            }
            
        }))
        
    }
    
    return(
        <div>
            <Header/>
        <div className='home-app-container'>
            
            <div className='home-note-container'>
            {!showSearch && <h1 className='text-heading'>My Notes</h1>}
            <div>
            {showSearch &&<input autoFocus type="search" value={text} placeholder="Enter Text"onChange={(e)=>{setText(e.target.value); handleSearch();}} className='search-input'/>}
            <button className='btn' onClick={onClickButton}>
                {showSearch?<MdClose/>:<CiSearch/>}</button>
            
            </div>
            <div>
            </div>
            </div>
            <div className='home-note-container'>
                {filteredNotes.length===0 && <p>No Notes Found..</p>}
                {filteredNotes.map(note=><NoteDetail key={note.id} note={note}/>)}
            </div>
            <div>
                <FloatBtn/>
            </div>
        </div>
        </div>
    )
}

export default HomePage