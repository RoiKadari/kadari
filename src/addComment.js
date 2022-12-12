import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from "./firebase";
import * as React from 'react';


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
          <button type="submit" onClick={()=> alert('תודה! המילה נוספה בהצלחה')}>שלח</button> 
       </form>
    )
}

export default AddComment;