import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Main from './components/MainPage/main';
import Main2 from './components/MainPage/main2';
import Main3 from './components/MainPage/main3';
import Main4 from './components/MainPage/main4';
import History from './components/HistoryPage/history';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/mainprice" element={<Main2 />} />
          <Route exact path="/mainpay" element={<Main3 />} />
          <Route exact path="/selecttime" element={<Main4 />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}
