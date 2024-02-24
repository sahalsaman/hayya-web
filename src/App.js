import './App.css';
import './styles/tailwind.css';
import React, { FC } from 'react';
import ReactDOM from "react-dom/client";
import { Router, Redirect, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import { Contact } from './pages/contact/contact';
import Layout from './components/layout';
import Landing from './pages/landing/landing';
import Footer from './components/footer';
import { About } from './pages/about/about';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
        <div><Footer/></div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
