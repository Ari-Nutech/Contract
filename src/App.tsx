import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// Redux
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './components/Dashboard';
import CreateContact from './components/contact/Create';
import GetContacts from './components/contact/Get';

import './App.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateContact />} />

          <Route path="/contact/create" element={<CreateContact />} />
          <Route path="/contact/get" element={<GetContacts />} />

        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
