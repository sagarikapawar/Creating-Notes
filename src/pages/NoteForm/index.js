import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'
import Header from '../Header'

import useCreateDates from '../useCreateDates'
import './index.css'

const NoteForm =({setNotes})=>{
    const [title,setTitle]=useState('')
    const [textDetail,setTextDetail]=useState('')
    const date=useCreateDates();
    const navigate=useNavigate()
    
    const onChangeTitle=(event)=>{
        setTitle(event.target.value)
    }

   const onChangeText=(event)=>{
        setTextDetail(event.target.value)

    }
    

   const onSubmitNoteForm=(event)=>{
        event.preventDefault();
        
        if(title && textDetail){
            const note={
                id:uuidv4(),
                title,
                textDetail,
                date,
            }
            //adding notes 
            setNotes(prevNotes=>[note,...prevNotes])
            navigate('/')
            }
        }
        return(
            <div>
                <Header/>
            <div className='notes-app-container'>
                
<div className='notes-app'>
                <button className='button btn lg primary' type='button' onClick={onSubmitNoteForm}>Save</button>
                
                <form className='note-form-container' onSubmit={onSubmitNoteForm}>
                    <input type="text" placeholder="Enter Title" value={title} onChange={onChangeTitle} className='title-input'/>
                    <br/>
                    <textarea rows="28" placeholder="Enter Text "  value={textDetail} onChange={onChangeText} className='text-input'></textarea>

                </form>
            </div>
            </div>
            </div>
        )
    }

export default NoteForm