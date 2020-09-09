import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNote, editNote } from '../redux/actions';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id: null
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmission = (e) => {
    e.preventDefault();

    let { title, content } = this.state;
    const id = this.props.selectedNote
    if ((id || id === 0 ) && id > -1) {
      this.props.editNote(id, title, content);
    } else {
      this.props.addNote(title, content);
    }
    this.setState({ title: '', content: '' });
  }
  componentDidUpdate(prevProp) {
    const { notes, selectedNote } = this.props;
    if (prevProp.selectedNote !== selectedNote && selectedNote > -1) {
      this.setState({ ...notes[selectedNote], id: selectedNote });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmission} className="sticky-top">
        <div className="form-group">
          <label htmlFor="title"><b>Title</b></label>
          <input type="text" placeholder="Enter Note Title" name="title" required value={this.state.title} onChange={this.handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="content"><b>Body</b></label>
          <textarea placeholder="Enter Note content" name="content" required value={this.state.content} onChange={this.handleChange} className="form-control" rows="10" />
        </div>
        <button type="submit" className="btn btn-primary float-right">
          {this.props.selectedNote > -1 ? 'Update' : 'Add'} Note
            </button>

      </form>
    );
  }
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps, { addNote, editNote })(NoteForm);
