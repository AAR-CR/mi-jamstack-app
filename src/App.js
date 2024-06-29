

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await fetch('/.netlify/functions/chuckNorrisJoke');
            const data = await response.json();
            setJoke(data.message);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>TAREA 2</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>ADMINISTRACION WEB</h2>
                <p>
                    Consumir API de chistes de Chuck Norris en formato JSON
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React y Lee un chiste de Chuck Norris precionando el boton: 
                </a>
                <button onClick={fetchJoke}>Get a Joke</button>
                {joke && <p>{joke}</p>}
            </header>
        </div>
    );
}

export default App;

