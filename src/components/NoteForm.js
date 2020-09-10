import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNote, editNote, selectNote } from '../redux/actions';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  componentDidUpdate(prevProp) {
    const { notes, selectedNote } = this.props;
    if (prevProp.selectedNote !== selectedNote && selectedNote > -1) {
      this.setState({ ...notes[selectedNote] });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission = (e) => {
    e.preventDefault();
    const { title, content } = this.state;
    const { selectedNote: id } = this.props;
    if ((id || id === 0) && id > -1) {
      this.props.editNote(id, title, content);
    } else {
      this.props.addNote(title, content);
    }
    this.setState({ title: '', content: '' });
  }

  clearForm = () => {
    this.setState({ title: '', content: '' });
    this.props.selectNote(-1);
  }

  render() {
    const { selectedNote } = this.props;
    return (
      <form onSubmit={this.handleSubmission} className="sticky-top pb-4">
        <div className="form-group">
          <label htmlFor="title"><b>Title</b></label>
          <input type="text" placeholder="Enter Note Title" name="title" required value={this.state.title} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="content"><b>Body</b></label>
          <textarea placeholder="Enter Note content" name="content" required value={this.state.content} onChange={this.handleChange} className="form-control" rows="10" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary float-right">
            { selectedNote > -1 ? 'Update ' : 'Add '}
            Note
          </button>
          <button type="button" className={`btn btn-light mr-3 float-right ${this.state.content.length || this.state.title.length ? '' : 'd-none'}`} onClick={this.clearForm}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}
NoteForm.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectNote: PropTypes.func.isRequired,
  selectedNote: PropTypes.number.isRequired,
  editNote: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, { addNote, editNote, selectNote })(NoteForm);
