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
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import { useEffectOnce } from './hooks/useEffectOnce';
// import { getUUID } from './utils';

function App() {

  // useEffectOnce(() => {
  //   const res = getUUID("HelloWorld")
  //   alert(res)
  // })

  return (
    <StickyContainer>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateContact />} />

            <Route path="/contact/create" element={<CreateContact />} />
            <Route path="/contact/get" element={<GetContacts />} />

            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>
        </Router>
        <ToastContainer />
      </Provider>
    </StickyContainer>
  );
}

export default App;
