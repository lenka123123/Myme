/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'setup tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type
Props = {};
//import ListccleComponent from './ListccleComponent';
// import StateTest from './StateTest';
import RefTest from './RefTest';

export default class setup extends Component<Props> {
    constructor(props) {
        super(props);
        this.state={
            size:0
        }
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text style={{fontSize: 20}}
                      onPress={() => {
                          var sise = this.reftext.getSize();
                          this.setState({size: sise,
                          })
                      }}
                >获取气球的大小{this.state.size}</Text>
                <RefTest ref={reftest => this.reftext = reftest}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
