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

class EditUserScreen extends Component {

    static navigationOptions ={
        title: 'Edit Profile',
    };

    constructor(props){
        super(props)

        this.state ={
            name: '',
            email: '',
            age: '',
            phoneNo: '',
            address: '',

        };

        this._query = this._query.bind(this);
        this._update = this._update.bind(this);

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
                    name: results.rows.item(0).name,
                    email: results.rows.item(0).email,
                    age: results.rows.item(0).age,
                    phoneNo: results.rows.item(0).phoneNo,
                    address: results.rows.item(0).address,
                })
                }
            })
        });
    }
    _update() {
        this.db.transaction((tx) => {
            tx.executeSql('UPDATE user SET name=?, email=?, age=?, phoneNo=?, address=? WHERE id=1', [
                this.state.name,
                this.state.email,
                this.state.age,
                this.state.phoneNo,
                this.state.address,
            ]);
        });
        this.props.navigation.navigate('Home');
    }
    openDb(){
        console.log('Database opened');
    }

    errorDb(err){
        console.log("SQL error: " + err);
    }
    
  render () {
    let user = this.state.user;
    return (
        <View style={styles.container}>
            <ScrollView>
            <InputWithLabel style={styles.output}
                label={'Name'}
                value={this.state.name}
                onChangeText={(name) => {this.setState({name})}}
                orientation={'vertical'}
            />
            <InputWithLabel style={styles.output}
                label={'Age'}
                value={this.state.age}
                onChangeText={(age)=> {this.setState({age})}}
                orientation={'vertical'}
                keyboardType={'Numeric'}
            />
            <InputWithLabel style={styles.output}
                label={'Email'}
                value={this.state.email}
                onChangeText={(email)=> {this.setState({email})}}
                orientation={'vertical'}
                keyboardType={'email-address'}
            />
            <InputWithLabel style={styles.output}
                label={'Phone Number'}
                value={this.state.phoneNo}
                onChangeText={(phoneNo)=> {this.setState({phoneNo})}}
                orientation={'vertical'}
                keyboardType={'Numeric'}
            />
            <InputWithLabel style={styles.output}
                label={'Address'}
                value={this.state.address}
                onChangeText={(address)=> {this.setState({address})}}
                orientation={'vertical'}
                multiline={true}
            />
            <Button 
                title="Save"
                onPress={this._update}  
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
}, output: {
    fontSize: 24,  
    color: '#000099',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EditUserScreen;