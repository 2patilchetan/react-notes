import React, { Component } from "react";
import NotesList from './NotesList';
import NoteForm from './NoteForm';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 border-right nodesList px-0"><NotesList /></div>
          <div className="col-sm-8 p-4"><NoteForm /></div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
