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
      ListData: '',
    };
  }
  componentDidMount = () => {
    let data = this.props.route ? this.props.route.params.data : '';
    this.setState({ListData: JSON.stringify(data)});
    console.log(this.props);
  };
  render() {
    console.log('enter here list');

    return (
      <Container style={style.container}>
        <View style={style.content}>
          <Text style={{textAlign: 'center', marginHorizontal: 10}}>
            {this.state.ListData}
          </Text>
        </View>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
