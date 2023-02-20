import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// fetch start

class SwapiService{

  _apiBase = 'https://swapi.dev/api/';

  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);;

    if(!res.ok){
      throw new Error(`Could not fetch ${url}. Received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople(){
    const res = await this.getResource(`people/`);
    return res.results;
  }

  getPerson(id){
    return this.getResource(`people/${id}/`);
  }


  async getAllPlanets(){
    const res = await this.getResource(`planets/`);
    return res.results;
  }

  getPlanet(id){
    return this.getResource(`planets/${id}/`);
  }


  async getAllStarships(){
    const res = await this.getResource(`starships/`);
    return res.results;
  }

  getStarship(id){
    return this.getResource(`starships/${id}/`);
  }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
  people.forEach((person) => {
    console.log(person.name);
  })
})
//fetch end

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
