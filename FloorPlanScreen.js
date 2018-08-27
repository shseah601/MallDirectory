import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Modal 
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
  // Simplest usage.
  url: 'https://res.cloudinary.com/malldirectory/image/upload/v1535378614/floor_plan.jpg',
  // You can pass props to <Image />.
  props: {
      // headers: ...
      
  }}]

class FloorPlanScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <View>

        <Modal visible={this.state.modalVisible} transparent={true} >
            <ImageViewer imageUrls={images}/> 
            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize: 30, textAlign: 'center', backgroundColor:'#FFF'}}>Hide</Text>
              </TouchableHighlight>
        </Modal>
        <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{fontSize: 30, textAlign: 'center', marginTop: 563, backgroundColor:'#FFF'}}>Show</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',

  }
});

export default FloorPlanScreen;
