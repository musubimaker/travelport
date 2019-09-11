import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Travelport Weather App</header>
      <div className="dashboard">
        <section className="cityOverview">
          <h1>Honolulu</h1>
        </section>
        <section className="cityOverview">
          <h1>Seattle</h1>
        </section>
        <section className="cityOverview">
          <h1>Dublin</h1>
        </section>
      </div>

      <footer>Copyright &copy; 2019</footer>

    </div>
  );
}

export default App;
