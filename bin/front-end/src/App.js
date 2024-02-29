import './styles/common/Appcd.css';
import React from 'react';
import Header from './component/route/Header';
import RouterComponent from './component/route/RouterComponent'
import Footer from './component/route/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterComponent />
      <Footer />
    </div>
  );
}

export default App;
