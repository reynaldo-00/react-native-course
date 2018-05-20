import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import {
    Card,
    CardSection,
    Button,
    Input
    // Spinner
} from './common';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="example@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {

// };

export default connect(null, { emailChanged })(LoginForm);
