import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'



class PhotosScreen extends Component {
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
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
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
            <FlatList
                contentContainerStyle={{ margin: 2 }}
                horizontal={false}
                numColumns={2}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    justifyContent: 'center',
                }}
                data={this.state.data}
                renderItem={({ item, index }) =>
                    <View style={{
                        flex: 1,
                        margin: 5,
                        minWidth: 150,
                        maxWidth: 223,
                        height: 150,
                        maxHeight: 304,
                        backgroundColor: '#CCC',
                    }} >
                        <TouchableOpacity onPress={() => navigate('PhotoItem',{url : item.url})}>
                            <Image style={{ width: '100%', height: '100%' }} source={{ uri: item.thumbnailUrl }} />
                        </TouchableOpacity>
                    </View>
                }
            />
        )
    }
}

export default PhotosScreen