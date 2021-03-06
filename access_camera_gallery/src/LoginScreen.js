import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
    const {navigate} = this.props.navigation;
    return (
            <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
