import {Box,Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import {useNavigate} from 'react-router-dom'


import './index.css'


const FloatBtn=()=>{
    const navigate=useNavigate()

    const onClickButton=()=>{
        navigate("/NoteForm")
    }
   return (
    <div>
        
   <div className="button-container">
        
        <Box>
            <Fab color="primary" onClick={onClickButton}>
            <AddIcon/>
            </Fab>
        </Box>
        </div>
    </div>)

}
export default FloatBtn