import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import {Container, Content} from 'native-base';
import {getService} from '../services/getService';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 0,
      newsData: [],
    };
  }

  componentDidMount = () => {
    getService('tags=story&page=0', '')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _renderList = (data) => {};

  render() {
    console.log('enter here list');
    return (
      <Container style={style.container}>
        <View style={style.content}></View>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
});
