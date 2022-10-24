import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "./firebase";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const commentNum = ["0"]

const AddComment = () => {
    const [name, setName] = useState("");
   
    function handleSubmit(e){
        e.preventDefault()
        if (name === "") {
            return
        }

        const submition = collection(db, commentNum[0])
        addDoc(submition, {name})
  
    }
    return(
        <form onSubmit={handleSubmit} className="onSubmit">
        <br/>
<h2>הוספת מילות מפתח</h2>
<input id="comment" type="text" value={name} onChange={e => setName(e.target.value)}/>
<button type="submit">שלח</button> 
<Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="הוספת מילות מפתח" id="fullWidth" />
    </Box>
       </form>
    )
}

export default AddComment;