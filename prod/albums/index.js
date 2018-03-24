
//Import a library to help create a component
import React from 'react';
//Import deconstructuring
import { AppRegistry, View } from 'react-native';
//Import component
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
//Componet returns jsx
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

//Render component
AppRegistry.registerComponent('albums', () => App);
