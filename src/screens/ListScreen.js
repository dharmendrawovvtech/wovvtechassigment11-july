import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Container, Content} from 'native-base';
import {getService} from '../services/getService';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 0,
      seed: 0,
      isRefreshing: false,
      newsData: [],
    };
  }

  componentDidMount = () => {
    this.loadData();
    setTimeout(() => {
      this.setState({page: 0});
      this.loadData();
    }, 10000);
  };

  loadData = (page = 1) => {
    getService('tags=story&page=' + page, '')
      .then((data) => {
        let array = this.state.newsData;
        if (page !== 1) {
          array.push(...data.data.hits);
        }
        this.setState({newsData: array, isRefreshing: false});
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderList = (data) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Detail', {data: data});
        }}>
        <View style={style.outer}>
          <Text>{data.created_at}</Text>
          <Text>{data.title}</Text>
          <Text>{data.author}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        seed: this.state.seed + 1,
        page: 0,
        isRefreshing: true,
      },
      () => {
        this.loadData();
      },
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.loadData(this.state.page);
      },
    );
  };

  render() {
    console.log('enter here list');
    const {newsData, isRefreshing} = this.state;
    return (
      <Container style={style.container}>
        <View style={style.content}>
          <FlatList
            data={newsData}
            renderItem={({item}) => this.renderList(item)}
            keyExtractor={(i) => i.objectID}
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndThreshold={0}
          />
        </View>
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
    backgroundColor: 'brown',
  },
  outer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'column',
    marginHorizontal: 30,
    marginVertical: 5,
  },
});
