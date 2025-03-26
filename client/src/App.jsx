import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;