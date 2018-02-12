import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentWillMount() {
        this.fetchData()
    }


    fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            .catch(function (error) {
                alert('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
        const json = await response.json()
        this.setState({ data: json })
    }

    static navigationOptions = ({ navigation }) => ({

        title: `home screen`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#03A9F4'
        },

    })
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <FlatList
                style = {{flexGrow : 0}}
                    data={this.state.data}
                    keyExtractor={item => item.title}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            style={{
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                marginBottom: 2
                            }}
                            onPress={() => navigate('DetailsScreen',{body : item.body, title: item.title , id : item.id })}>
                            <Text style={{textAlign : 'center'}}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

export default HomeScreen