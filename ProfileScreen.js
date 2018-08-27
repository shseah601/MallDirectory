import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';
import {InputWithLabel} from './UI';

let SQLite = require('react-native-sqlite-storage');

class ProfileScreen extends Component {

    static navigationOptions ={
        title: 'User Profile',
        headerRight: (
        <Button
            onPress={() => this.props.navigation.navigate('EditUser')}
            title="Edit"
        />),
    };

    constructor(props){
        super(props)

        this.state ={
            user: [],
        };

        this._query = this._query.bind(this);

        this.db = SQLite.openDatabase({
            name: 'db',
            createFromLocation: '~db.sqlite'
        }, this.openDb, this.errorDb);
    }

    componentDidMount() {
        this._query();
    }
    
    _query() {
        this.db.transaction((tx) => {
            tx.executeSql('SELECT * FROM user WHERE id=1', [], (tx,results) => {
                if(results.rows.length)
                {
                this.setState({
                    user: results.rows.item(0),
                })
                }
            })
        });
    }
    openDb(){
        console.log('Database opened');
    }

    errorDb(err){
        console.log("SQL error: " + err);
    }
    
  render () {
    return (
        <View style={styles.container}>
            <ScrollView>
            <InputWithLabel style={styles.output}
                label={'Name'}
                value={user ? user.name : ''}
                orientation={'vertical'}
                editable={false}
            />
            <InputWithLabel style={styles.output}
                label={'Email'}
                value={user ? user.email : ''}
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
    justifyContent: 'flex-start',
    padding: 10,
    flexDirection: 'row'
}, search: {
    flex: 1,
    fontSize: 20,
},  input: {
    flex: 3,
    fontSize: 20,
}, item: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
}, itemTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
}, itemSubtitle: {
    fontSize: 18,
}, sectionHeader :{
    fontSize: 25,
    marginLeft: 10
},
});

export default ProfileScreen;