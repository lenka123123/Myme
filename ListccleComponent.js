/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ListccleComponent extends Component {

  constructor(props){
  super(props);
  console.log('====console11=======')
  }

  componentWillMount(){  console.log('====console12=======')
  }
  componentDidMount(){  console.log('====console13=======')
  }

  componentWillReceiveProps(nextProps){  console.log('====console14=======')
  }

//shouldComponentUpdate()(nextProps,nextState){
//  console.log('====console15=======')
//return true;
//}

componentWillUpdate(nextProps,nextState){
alert('====console116=======')
  console.log('====console116=======')
}

componentDidUpdate(  prevProps,  prevState){
  console.log('====console17=======')
}
componentWillUnmount(){
  console.log('====console18======')
}


  render() {
    return<View>
    <Text >hello.{this.props.name}</Text>
       <Text  >hello.{this.props.name}</Text>
    </View>
  }
}
