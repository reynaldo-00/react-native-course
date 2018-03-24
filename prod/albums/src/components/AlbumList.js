//import libraries to help make component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//create component
class AlbumList extends Component {

    //set a default/initial state
    //state = javascrip object that is available to 
    //class based compoenets only that is used to record and respond to user triggred evetns
    state = { albums: [] };
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => (
                //have to use setSate to update compenent
                this.setState({ albums: res.data })
            ));
    }
    //once fetch data tell state to update
    //make use of state // edit render method to make use of state

    renderAlbums() {
        return this.state.albums.map(album => 
            //key should usually be id if object has id property
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

//export component
export default AlbumList;
