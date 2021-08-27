
import './App.css';

import React from 'react';
import Resturant from './components/Resturant';
import './components/Style.css'


const App = ()=> {
  return (
     <>
     <div className="title">
     <h1 className="title-text">Restaurant Menu App</h1>
     </div>
    
     <Resturant />
     </>
  );
}

export default App;
