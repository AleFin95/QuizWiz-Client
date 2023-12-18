//AddNotes
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
// import { readSubject } from "../../assets/api";
import NoteForm from "../../components/NoteForm"

function AddNotesPage() {
    // const { subjectId } = useParams();
    // const [Subject, setSubject] = useState({})

    // useEffect(() => {
    //     setSubject({})
    //     async function loadSubject() {
    //         const response = await readSubject(subjectId)
    //         setSubject(response)
    //     }
    //     loadSubject();
    // }, [subjectId])

    return (
        <div>
  
            <h2> Add Note</h2>
            {/* <NoteForm subjectId={subjectId} /> */}
            <NoteForm />
        </div>
    )
}

export default AddNotesPage;
