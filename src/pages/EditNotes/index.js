import {useNavigate,useParams} from 'react-router-dom'
import {RiDeleteBin6Line} from 'react-icons/ri'


import {useState} from 'react'
import useCreateDates from '../useCreateDates';
import './index.css'

const EditNotes=({notes,setNotes})=>{

    const {id}=useParams();
    const note=notes.find((item)=>item.id===id);
    console.log(note)

    const [title,setTitle]=useState(note.title)
    const [textDetail,setTextDetail]=useState(note.textDetail)
    const date=useCreateDates()
    const navigate=useNavigate()
    const onChangeTitle=(event)=>{
        setTitle(event.target.value)

    }

    const onChangeText=(event)=>{
        setTextDetail(event.target.value)
    }

    const onSubmitForm=(event)=>{
        event.preventDefault()
        if(title&&textDetail){
            const newNote={...note,title,textDetail,date}

            const newNotes=notes.map(item=>{
                if(item.id===id){
                    item=newNote
                }
                return item;
            })
            setNotes(newNotes)
        }
navigate('/')
    }
    const handleDelete=()=>{
        if(window.confirm('Are you sure you want to delete?')){
        const newNotes=notes.filter(item=>item.id!==id)
        setNotes(newNotes)
        navigate("/")
    }
}

    return(
        <div className='edit-app-container'>
            <div className='edit-app'>
            <button className='button1 btn-lg-primary' type='button' onClick={onSubmitForm} >Save</button>
                <button className='button2 btn-lg-danger' onClick={handleDelete} type='button'><RiDeleteBin6Line/></button>
                </div>
                <div>
                <form className='note-form-container' onSubmit={onSubmitForm} >
                    <input type="text" placeholder="Enter Title" value={title} onChange={onChangeTitle} className='title-input'/>
                    <br/>
                    <textarea rows="28" placeholder="Enter Text " onChange={onChangeText} value={textDetail} className='text-input'></textarea>

                </form>
                </div>
                

        </div>
    )

}
export default EditNotes