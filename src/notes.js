const notes = [];

const addNote = (note) => {
  notes.push(note);
};

const getAllNotes = () => {
  return notes;
};

module.exports = { addNote, getAllNotes };
