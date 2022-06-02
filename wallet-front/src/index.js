import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deploy from './pages/deploy/Deploy';
import Send from './pages/send/Send';
import MainHeader from './components/header/MainHeader';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MainHeader />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="deploy" element={<Deploy />} />
        <Route path="send" element={<Send />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
