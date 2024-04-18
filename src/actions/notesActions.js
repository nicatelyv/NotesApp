export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note
  };
};

export const updateNote = (id, newText) => {
  return {
    type: 'UPDATE_NOTE',
    payload: { id, newText }
  };
};

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    payload: id
  };
};

export const pinNote = (id) => {
  return {
    type: 'PIN_NOTE',
    payload: id
  };
};