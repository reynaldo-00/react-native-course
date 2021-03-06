import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAEXv4zn1zaWbpmwPK7HlDK2AwaP_OiMBo',
            authDomain: 'manager-2caf8.firebaseapp.com',
            databaseURL: 'https://manager-2caf8.firebaseio.com',
            projectId: 'manager-2caf8',
            storageBucket: 'manager-2caf8.appspot.com',
            messagingSenderId: '419666564688'
          };
          
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
