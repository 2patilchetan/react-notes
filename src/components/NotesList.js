import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectNote, removeNote } from '../redux/actions';

const NotesList = (props) => {
  const { notes } = props;
  function handleSelectNote(note) {
    props.selectNote(note);
  }
  function handleRemoveNote(id) {
    props.removeNote(id);
  }
  return (
    <ul className="list-group list-group-flush">
      {notes.map((item, index) => (
        <li className="list-group-item list-group-item-action note" key={index} onClick={() => handleSelectNote({ ...item, id: index })} onKeyDown={() => handleSelectNote({ ...item, id: index })}>
          <button
            type="button"
            className={`close ${index === props.selectedNote ? 'd-none' : ''}`}
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveNote(index);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h6>{item.title}</h6>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectNote: PropTypes.func.isRequired,
  selectedNote: PropTypes.number.isRequired,
  removeNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  selectedNote: state.selectedNote,
});

export default connect(mapStateToProps, { selectNote, removeNote })(NotesList);
