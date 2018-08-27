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

class CategoryScreen extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('category')
    };
  };

  constructor(props){
    super(props)

    this.state = {
      category: this.props.navigation.getParam('category'),
      shops: [],
      isFetching: false,
    }

    this._load = this._load.bind(this);
  }

  componentDidMount() {
    this._load();
  }

  _load() {
    let url = config.settings.serverPath + '/api/categories/' + this.state.category;

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

export default CategoryScreen;