import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChecaNumero from './components/ChecaNumero';

export default class App extends React.Component {
  render() {
    return (
    <ChecaNumero numero={9} />
    );
  }
}




