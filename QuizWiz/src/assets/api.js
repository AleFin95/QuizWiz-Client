// // const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/";
// const API_BASE_URL ="http://localhost:3000/";

// export async function readSubject(subjectId) {
//     const url = `${API_BASE_URL}/subjects/${subjectId}?_embed=notes`;
//     return await fetch(url);
//   }

// export async function listSubjects() {
//     const url = `${API_BASE_URL}/decks?_embed=notes`;
//     return await fetch(url);
// }

// export async function readNote(noteId) {
//     const url = `${API_BASE_URL}/notes/${noteId}`;
//     return await fetch(url);
//   }

// export function stripNotes(subject) {
//     const { notes, ...subjectWithoutNotes } = subject;
//     return subjectWithoutNotes;
// }
