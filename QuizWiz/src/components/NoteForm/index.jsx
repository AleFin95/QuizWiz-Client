//NoteForm
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function createNote(subjectId, note) {

// Retrieve user_id from local storage
// const userId = localStorage.getItem('user_id');
   // Assign user_id to the note
    // note.userId = userId;
    // note.userId=1
    console.log("subjectId in the CreateNote=",subjectId)
  
  // const noteData = { ...note, subjectId };
  const noteData = { ...note  };
  delete noteData.subject;

  console.log("subjectId in the CreateNote after note subj=",note.subjectId)
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // Authorization: localStorage.getItem('token')
      
  },
    body: JSON.stringify(noteData)
   
  };
  console.log("options=",options)
  // return await fetch("http://localhost:3000/notes", options); //route notes doesnt exist yet
  const response = await fetch("http://localhost:3000/notes", options);

  if (!response.ok) {
    // Handle error, throw an exception, or return an error object
    console.error(`Failed to create note: ${response.statusText}`);
    // Optionally, you can throw an exception
    throw new Error(`Failed to create note: ${response.statusText}`);
  }

  // Parse the response body as JSON or return the response directly
  const responseData = await response.json();
  console.log("Response data:", responseData);

  return responseData;

}

async function createSubject(subject) {
 
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
  },
    body: JSON.stringify(subject)
   
  };
  const response = await fetch("http://localhost:3000/subjects", options);
  console.log("REspone from create subject=", response)
  if (!response.ok) {
    // Handle error, throw an exception, or return an error object
    throw new Error(`Failed to create subject: ${response.statusText}`);
  }

  // Parse the response body as JSON
  const createdSubject = await response.json();

  // Now, createdSubject should contain the created subject with its ID
  const createdSubjectId = createdSubject._id;

  // return createdSubjectId;
  console.log("line 52 subjectId= ",createdSubjectId )
  return createdSubjectId;
}


async function updateNote(updatedNote) {

  const options = {
    method: "PATCH",
    headers,
    body: JSON.stringify(updatedNote),
  };
  return await fetch(`http://localhost:3000/notes/${updatedNote.id}`, options);
}

function NoteForm({ note = ""}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (note) {
            // setFormData({title: note.title, content: note.content, subject: note.subject, note_id: note.note_id})
            setFormData({title: note.title, content: note.content, subject: note.subject})
        }
    }, [note])

// Innitial state for the Form
    const initialFormState = {
        // id: "",
        title: "",
        content: "",
        subject: "",
        //subjectId: subjectId should be created???
    }

    const [formData, setFormData] = useState(initialFormState)

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // noteId ? await updateNote(formData) : await createNote(subjectId, formData)
        // noteId ? navigate(`/subjects/${subjectId}`) : setFormData({...initialFormState})

        const subjectId=await createSubject({name: formData.subject})
        // console.log("line 97 subjectId= ",subjectId)
        // const subjectId="65805adc9088ada388b43f27"
        console.log("line 97 subjectId= ",subjectId)
        
        await createNote(subjectId, formData);
        setFormData({ ...initialFormState }); // Reset form data
        // navigate(`/subjects/${subjectId}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title" className="form-label">
                    Title
                    <textarea id="title" name="title" className="form-control" onChange={handleChange} value={formData.title}/>
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="content" className="form-label">
                    Content
                    <textarea id="content" name="content" className="form-control" onChange={handleChange} value={formData.content}/>
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="subject" className="form-label">
                    Subject
                    <textarea id="subject" name="subject" className="form-control" onChange={handleChange} value={formData.subject}/>
                </label>
            </div>
            <div>
                <button type="submit" className="btn btn-primary mr-2">Save</button>
                
            </div>
        </form>
    )
}

export default NoteForm;
