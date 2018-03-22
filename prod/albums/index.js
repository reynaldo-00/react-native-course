
//Import a library to help create a component
import React from 'react';
//Import deconstructuring
import { AppRegistry } from 'react-native';
//Import component
import Header from './src/components/header';

//Create a component
//Componet returns jsx
const App = () => (
    <Header />
);

//Render component
AppRegistry.registerComponent('albums', () => App);
