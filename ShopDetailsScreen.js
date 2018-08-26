import React, {Component} from 'react';
import {
  Alert,
  ScrollView,
  Image,
  View,
  StyleSheet
} from 'react-native';
import {InputWithLabel} from './UI';
let config = require('./Config');

class ShopDetailsScreen extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('headerTitle')
    };
  };

  constructor(props) {
    super(props)

    this.state ={
      id: this.props.navigation.getParam('id'),
      shop: null,
    };

    this._load = this._load.bind(this);
  }

  componentDidMount(){
    this._load();
  }

  _load() {
    let url = config.settings.serverPath + '/api/shops/' + this.state.id;

    fetch(url)
    .then((response) => {
      if(!response.ok) {
        Alert.alert('Error', response.status.toString());
        throw Error('Error' + response.status);
      }
      return response.json()
    })
    .then((shop) => {
      this.setState({shop});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render () {
    let shop = this.state.shop;
    let imageLink = shop ? shop.imageLink : "https://res.cloudinary.com/malldirectory/image/upload/v1535298767/MallDirectory/no_data.png";
    console.log(imageLink)
    console.log(shop)
    return (
        <View style={styles.container}>
          <ScrollView>
          <Image
            style={{width:400,height:200}}
            source= {{uri: imageLink}}
          />
          <InputWithLabel
              style={styles.output}
              label={'Name'}
              value={shop ? shop.name : ''}
              orientation={'vertical'}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Category'}
              value={shop ? shop.category : ''}
              orientation={'vertical'}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Location'}
              value={shop ? shop.location : ''}
              orientation={'vertical'}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Description'}
              value={shop ? shop.description : ''}
              orientation={'vertical'}
              multiline={true}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Phone Number'}
              value={shop ? shop.phoneNo : ''}
              orientation={'vertical'}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Email'}
              value={shop ? shop.email : ''}
              orientation={'vertical'}
              editable={false}
            />
            <InputWithLabel
              style={styles.output}
              label={'Working Hour'}
              value={shop ? shop.workingHour : ''}
              orientation={'vertical'}
              editable={false}
            />
            
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  output: {
    fontSize: 24,
    color: '#000099',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ShopDetailsScreen;