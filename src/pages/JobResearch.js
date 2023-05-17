import React from 'react';

import { IndustyService } from '../services/industryService';
import { VacancyService } from '../services/vacancyService';
import { AuthService } from '../services/authService';

import Cookies from 'js-cookie';

export const JobResearch = () => {

  const handleClick = async () => {
    const data = await AuthService.getAccessToken();
    console.log(data)
  }

  const handleClick2 = async () => {
    const data = await AuthService.refreshAccessToken(Cookies.get('refresh-token'));
    console.log(data)
  }

  const handleClick3 = async () => {
    const data = await VacancyService.getAllSutableVacanciesByParams();
    console.log(data)
  }
  const handleClick4 = async () => {
    const data = await IndustyService.getAll();
    console.log(data)

  }

  return (
    <div>
      <button type="button" onClick={handleClick}> get access_token </button>

      <button type="button" onClick={handleClick2}> refresh token </button>

      <button type="button" onClick={handleClick3}> vacancies </button>

      <button type="button" onClick={handleClick4}> categories </button>
    </div>
  );
};
