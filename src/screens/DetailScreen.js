import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Container, Content} from 'native-base';

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 0,
      ListData: [],
    };
  }
  render() {
    return (
      <Container style={style.container}>
        <Text>Hello</Text>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  constent: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
