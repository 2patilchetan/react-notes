import React from 'react';
import NotesList from './NotesList';
import NoteForm from './NoteForm';

const Dashboard = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-8 p-4 order-sm-2">
        <NoteForm />
      </div>
      <div className="col-sm-4 border-right nodesList sidebar px-0 order-sm-1">
        <NotesList />
      </div>
    </div>
  </div>
);

export default Dashboard;
