import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {InputWithLabel} from './UI';

class MallDetailsScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
      <Image
          style={{width:400, height: 200}}
          source={{uri: 'https://res.cloudinary.com/malldirectory/image/upload/v1535371962/MallDirectory/mall_image.jpg'}}
        />
        <InputWithLabel
              style={styles.output}
              label={'Mall Name'}
              value={'WorldOfWireless'}
              orientation={'vertical'}
              editable={false}
            />
        <InputWithLabel
              style={styles.output}
              label={'Address'}
              value={'WorldOfWireless, Jalan 1/15, Cheras, 56100 Kuala Lumpur W.P.'}
              orientation={'vertical'}
              multiline={true}
              editable={false}
            />
        <InputWithLabel
              style={styles.output}
              label={'Phone Number'}
              value={'(03)91724758'}
              orientation={'vertical'}
              editable={false}
            />
        <InputWithLabel
              style={styles.output}
              label={'Website'}
              value={'www.worldofwireless.com'}
              orientation={'vertical'}
              editable={false}
            />
        <InputWithLabel
              style={styles.output}
              label={'Mall Background'}
              value={'WorldOfWireless (WOW) was officially opened on 25 April 2017. The idea behind the name of the mall, WorldOfWireless (WOW), which the mall aims to go cashless and everything can be accessed using mobile phone. All payments can be made using mobile phones including the parking fee and even the floor plan of the mall can be viewed via mobile phone as well.'}
              multiline={true}
              orientation={'vertical'}
              editable={false}
            />
      </ScrollView>
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

export default MallDetailsScreen;