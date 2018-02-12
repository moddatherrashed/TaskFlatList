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
        const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .catch(function (error) {
                alert('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            });
        const json = await response.json()
        this.setState({ data: json })
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <FlatList
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
                            onPress={() => navigate('DetailsScreen',{image : item.image})}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

export default HomeScreen