import {Link} from 'react-router-dom'
import './index.css'


const NoteDetail=({note})=>{
    return(
<div className='notes-container'> 
    <Link to={`/editnotes/${note.id}`} className='note-detail-elements'>
    <h3 className='heading'>{note.title.length>40?(note.title.substr(0,60))+"...":note.title}</h3>
    
    <p>{note.textDetail.length>400?(note.textDetail.substr(0,60))+"...":note.textDetail}</p>
    <p>{note.date}</p>
    </Link>
</div>
    )
}
export default NoteDetail