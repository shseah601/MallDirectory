import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
let config = require('./Config');

class FeedbackScreen extends Component{
    constructor(props) {

        super(props)
    
        this.state = {
          message: '',
        };
    
        this._store = this._store.bind(this);
      }

    _store() {
        let url = config.settings.serverPath + '/api/messages';
    
        fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: this.state.message,

          }),
        })
        .then((response) => {
          if(!response.ok) {
            Alert.alert('Error', response.status.toString());
            throw Error('Error ' + response.status);
          }
    
          return response.json()
        })
        .then((responseJson) => {
          if(responseJson.affected > 0) {
            Alert.alert('Feedback Saved');
          }
          else {
            Alert.alert('Error saving feedback');
          }

          this.props.navigation.goBack();
        })
        .catch((error) => {
          console.error(error);
        });
      }

    render () {
        return (
          <View>
            <Text style={styles.container}>
                Leave your feedback here:
            </Text>
            <TextInput
                style={styles.input}
                placeholder={'Feedback...'}
                onChangeText= {(message)=> {
                    this.setState({message})
                }}
                multiline={true}
            >
            </TextInput>
            <Button style={styles.input}
                title={'Submit'}
                onPress={this._store}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      padding: 10,
      color: 'black'
    },
    input:{
        fontSize: 20,
        padding: 10,
    }

  });

export default FeedbackScreen;