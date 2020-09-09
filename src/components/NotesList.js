import React from "react";
import { connect } from 'react-redux';
import { selectNote, removeNote } from '../redux/actions';

const NotesList = props => {
  let { notes } = props;
  function selectNote(note) {
    props.selectNote(note);
  }
  function removeNote(id) {
    props.removeNote(id);
  }
  return (
    <ul className="px-0">
      {notes.map((item, index) => (
        <li className="note p-3" key={index} onClick={() => selectNote({ ...item, id: index })}>
          <button type="button" className="close" aria-label="Close" onClick={(e) => {
            e.stopPropagation();
            removeNote(index)
            }}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h6>{item.title}</h6>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { selectNote, removeNote })(NotesList);
