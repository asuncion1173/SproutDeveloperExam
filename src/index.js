import React from 'react';
import ReactDOM from 'react-dom/client';
import Announcements from './components/Announcements';
import Header from './components/Header';
import Table from './components/Table';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
      <Header />
      <Announcements />
      <Table />
    </>
);

//reportWebVitals();
