import { createSlice } from "@reduxjs/toolkit";
import Note from "../model/Note.interface";


const initialState = {
  notes: [] as Note[]
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (s, a) => {
      s.notes.push(a.payload);
    },
    resetNotes: (s) => {
      s.notes = [];
    }
  }
})

export const { addNote, resetNotes } = notesSlice.actions;