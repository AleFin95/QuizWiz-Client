import NoteForm from "../../components/NoteForm"

function AddNotesPage() {
  // localStorage.setItem("token","7f9b60db-edd1-4e67-b46b-156c6e15e592")

  return (
    <div className="addNotes"> {}
      <h2>Add Note</h2>
      <NoteForm />
    </div>
  );
}

export default AddNotesPage;
