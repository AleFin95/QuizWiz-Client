import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

async function createNote(note) {

  delete note.subject;
 
  const options = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token')
      
  },
    body: JSON.stringify(note)
   
  };
console.log("options",options)
  // const response = await fetch("http://localhost:3000/notes", options);
  const response = await fetch("https://quizwiz-api.onrender.com/notes", options);
  

  if (!response.ok) {
    
    console.error(`Failed to create note: ${response.statusText}`);
    
    throw new Error(`Failed to create note: ${response.statusText}`);
  }

  
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
  // const response = await fetch("http://localhost:3000/subjects", options);
  const response = await fetch("https://quizwiz-api.onrender.com/subjects", options);
  
  console.log("REspone from create subject=", response)
  if (!response.ok) {
    // Handle error, throw an exception, or return an error object
    throw new Error(`Failed to create subject: ${response.statusText}`);
  }
 
  const createdSubject = await response.json();  
  const createdSubjectId = createdSubject._id;
  
  return createdSubjectId;
}




function NoteForm({ note = ""}) {
    

    useEffect(() => {
        if (note) {
            
            setFormData({title: note.title, content: note.content, subject: note.subject})
        }
    }, [note])

// Innitial state for the Form
    const initialFormState = {
        
        title: "",
        content: "",
        subject: "",
        
    }

    const [formData, setFormData] = useState(initialFormState)

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const subjectId=await createSubject({name: formData.subject})

        console.log("line 97 subjectId= ",subjectId)
        
        await createNote(formData);
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
