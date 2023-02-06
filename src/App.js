import React, {useEffect,useState} from 'react';
import tmdb from './tmdb';
import './App.css';
import MovieRow from './components/movieRow';
import FeaturMovie from './components/FeatureMovie'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

export default () => {

  return (
        <Router/>
  );
}