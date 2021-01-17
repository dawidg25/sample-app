import React from 'react';
import Header from './components/header';
import MainPage from './components/index';

function App() {
  return (
    <div class='main'>
      <Header heading='Sample App'/>
      <MainPage />
    </div>
  )
}

export default App;