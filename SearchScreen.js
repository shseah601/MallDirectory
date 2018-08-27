import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

let config = require('./Config');

class SearchScreen extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: "Result: " + navigation.getParam('keyword')
    };
  };

  constructor(props){
    super(props)

    this.state = {
      keyword: this.props.navigation.getParam('keyword'),
      shops: [],
      isFetching: false,
    }

    this._load = this._load.bind(this);
  }

  componentDidMount() {
    this._load();
  }

  _load() {
    urlback = (this.state.keyword ? '/api/search/' : '/api/shops') + this.state.keyword;
    let url = config.settings.serverPath + urlback;

    this.setState({isFetching: true});

    fetch(url)
    .then((response) => {
      if(!response.ok) {
        Alert.alert('Error', response.status.toString());
        throw Error('Error' + response.status);
      }
      
      return response.json()
    })
    .then((shops) => {
      this.setState({shops});
      this.setState({isFetching:false});
    })
    .catch((error) => {
      console.log(error)
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.shops}
          showsVerticalScrollIndicator={true}
          refreshing={this.state.isFetching}
          onRefresh={this._load}
          renderItem={({item}) =>
            <TouchableHighlight
              underlayColor={'#cccccc'}
              onPress={() => {
                this.props.navigation.navigate('ShopDetail', {
                  id: item.id,
                  headerTitle: item.name,
                  refresh: this._load,
                })
              }}
            >
              <View style={styles.item}>
                <Text style={styles.itemTitle}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          }
          keyExtractor={(item) => {item.id.toString()}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },

  itemSubtitle: {
    fontSize: 18,
  },
});

export default SearchScreen;