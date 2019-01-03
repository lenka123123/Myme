import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class StateTest extends Component {

    state = {
        size: 100
    }
//constructor(props){
//super(props);
//this.state={
//size:90}
//}

    render() {
        return <View>
            <Text
                style={{fontSize: 20}}
                onPress={() => {
                    this.setState({
                        size: this.state.size + 10
                    })
                }}
            > 吹气球
            </Text>
            <Image
                style={{
                    width: this.state.size, height: this.state.size
                }}
                source={require('./qiqiu.png')}/>


            <Text style={{fontSize: 30}}
                  onPress={() => {
                      this.setState({
                          size: this.state.size - 10
                      })
                  }}
            >吹破气球ppp</Text>
        </View>
    }
}
