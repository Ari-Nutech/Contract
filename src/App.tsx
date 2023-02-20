import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { StickyContainer } from 'react-sticky';

// Redux
import { Provider } from 'react-redux';
import { store } from './store';
import CreateContact from './components/contact/create/Index';
import GetContacts from './components/contact/Get';

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <StickyContainer>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateContact />} />

            <Route path="/contact/create" element={<CreateContact />} />
            <Route path="/contact/get" element={<GetContacts />} />

          </Routes>
        </Router>
        <ToastContainer />
      </Provider>
    </StickyContainer>
  );
}

export default App;
