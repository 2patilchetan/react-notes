import React, { Component } from "react";
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editNote:{}
    }
  }
  handleClick = (note) =>{
    this.setState({editNote:note});
    console.log(this.state);
  }
  render(){
  let editNote = this.state.editNote;
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-4 border-right nodesList"><NotesList handleClick={this.handleClick} /></div>
      <div className="col-sm-8"><NoteForm  /></div>
    </div>
    </div>
  );
  }
};
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
export default connect(mapStateToProps)(Dashboard);
