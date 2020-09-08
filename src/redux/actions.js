export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function editNote(id, title, content) {
  return { type: EDIT_NOTE, id:id, title: title, content: content };
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}

export function selectNote(note) {
  return { type: SELECT_NOTE, ...note};
}