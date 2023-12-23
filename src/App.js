import React from 'react';
import Main from './views/Main';
import ScrollToTop from './components/ScrollToTop';
import './css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Main />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;