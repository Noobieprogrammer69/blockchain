import React, { useState } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Welcome setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        </div>
          <Services setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Transactions setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Footer setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </div>
    </div>
 

  );
}

export default App
