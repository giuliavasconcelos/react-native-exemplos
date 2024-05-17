import React from "react";
import { Text, View } from "react-native";

class OlaMundo extends React.Component {
  render() {
    return (
      <View>
        <Text>Olá, </Text>
        <Text>{this.props.nome}!</Text>
      </View>
    )
  }
}

export default OlaMundo;
