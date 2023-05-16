import { useEffect, useState } from 'react';
import './App.css';
import { IndustyService } from './services/industryService';
import { VacancyService } from './services/vacancyService';
import { AuthService } from './services/authService';
import Cookies from 'js-cookie';


function App() {
  const handleClick = async () => {
    const data = await AuthService.getAccessToken();
    console.log('getAccessToken')
    console.log(data)
  }

  const handleClick2 = async () => {
    const data = await AuthService.refreshAccessToken(Cookies.get('refresh-token'));
    console.log('RefreshToken')
    console.log(data)
  }

  const handleClick3 = async () => {
    const data = await VacancyService.getAllSutableVacancysByParams();
    console.log('vacancys get all request');
    console.log(data)
  }
  const handleClick4 = async () => {
    const data = await IndustyService.getAll();
    console.log('get all indystries');
    console.log(data)

  }

  return (
    <div className="App">
        <button type="button" onClick={handleClick}>
          get access_token
        </button>

        <button type="button" onClick={handleClick2}>
          refresh token
        </button>

        <button type="button" onClick={handleClick3}>
          vacancies
        </button>

        <button type="button" onClick={handleClick4}>
          categories
        </button>
    </div>
  );
}

export default App;
