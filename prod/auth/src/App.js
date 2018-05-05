import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBtUykK8LYHmFPqgdnRXq3S1GEzkxYXRrg",
	    authDomain: "auth-2b53d.firebaseapp.com",
	    databaseURL: "https://auth-2b53d.firebaseio.com",
	    projectId: "auth-2b53d",
	    storageBucket: "auth-2b53d.appspot.com",
	    messagingSenderId: "649641260581"
	  });
	  
	  firebase.auth().onAuthStateChanged((user) => {
		if ( user ) {
			this.setState({loggedIn: true});
		} else {
			this.setState({loggedIn: false});
		}
	  });
	}

	renderContet() {

		switch( this.state.loggedIn ) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}> Logout </Button>
				);
			case false:
				return <LoginForm/>
			default: 
				return <Spinner size="large" />

		}
	}


	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContet()}
			</View>
			);

	}
};

export default App;