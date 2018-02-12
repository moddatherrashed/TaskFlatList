import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'


class PhotoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    static navigationOptions = ({ navigation }) => ({

        title: `id : ${navigation.state.params.id}`,
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#03A9F4'
        },

    })
    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Image  style = {{height : 600 , width :600}}source={{uri : params.url}}/>
            </View>
        )
    }
}

export default PhotoItem