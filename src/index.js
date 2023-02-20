import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// fetch start

class SwapiService{
  
}

const getResource = async (url) => {
  const res = await fetch(url);
  if(!res.ok){
    throw new Error(`Could not fetch ${url}. Received ${res.status}`);
  }
  const body = await res.json();
  return body;
}

getResource('https://swapi.dev/api/people/1123123/').then((body) => {
  console.log(body);
})
.catch((err) => {
  console.log('Could not fetch: ',err);
})
//fetch end

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
