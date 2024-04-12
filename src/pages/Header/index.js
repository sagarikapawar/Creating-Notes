import {Link} from "react-router-dom"

import './index.css'

const Header=()=>{
    return(
        
        <nav className="nav-container">
          <img src='https://t3.ftcdn.net/jpg/05/98/23/56/240_F_598235670_Dl981Yv8AQAf2rksNkW2slstLxZWEFoR.jpg' className="nav-icon-note" alt="note"/>
        <ul className="ul-items">
            <li><Link to='/' className="nav-link">HomePage</Link></li>
            <li><Link to='/notedetail' className="nav-link">NoteDetail</Link></li>
            <li><Link to='./noteform' className="nav-link">NoteForm</Link></li>
            <li><Link to='./editnotes/:id' className="nav-link">EditNotes</Link></li>
            <li><Link to='./floatingbutton' className="nav-link">FloatBtn</Link></li>
        </ul>
        </nav>
        
    )

}
export default Header