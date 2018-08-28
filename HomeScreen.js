import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    ScrollView,
    FlatList,
    TouchableHighlight
} from 'react-native';

let SQLite = require('react-native-sqlite-storage');

class HomeScreen extends Component {

    static navigationOptions ={
        title: 'Mall Directory',
    };

    constructor(props){
        super(props)

        this.state ={
            categories: [],
            keyword: "",
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
            tx.executeSql('SELECT * FROM categories', [], (tx,results) => {
                this.setState({
                    categories: results.rows.raw(),
                })
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
        <ScrollView>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={'Enter Shop Name Here...'}
                onChangeText= {(keyword)=> {
                    this.setState({keyword})
                }}
            >
            </TextInput>
            <TouchableHighlight 
                underlayColor={'#cccccc'}   
                onPress={() => this.props.navigation.navigate("Search", {
                    keyword: this.state.keyword,
                })}
            ><Text style={styles.search}>Search</Text>
            </TouchableHighlight>
        </View>
        <View>
            <Text style={styles.sectionHeader}>Categories</Text>
        </View>
        <View>
            <FlatList
                data={this.state.categories}
                showsVerticalScrollIndicator = {true}
                renderItem = {({item})=>
                <TouchableHighlight
                    underlayColor={'#cccccc'}
                    onPress={() => {
                        this.props.navigation.navigate('CategoryShopList', {
                        category: item.category,
                        })
                    }}
                >

                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{item.category}</Text>
                </View>
                </TouchableHighlight>
                }
                keyExtractor={(item) => {item.id.toString()}}
            />
        </View>
        </ScrollView>
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
    textAlignVertical: 'center',
    color: 'white',
    backgroundColor: 'green',
    borderColor: '#ccc',
    padding: 10,
    marginLeft: 10,
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

export default HomeScreen;