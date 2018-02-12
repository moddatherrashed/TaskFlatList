import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'


class DetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static NavigationOptions = ({
        header: null
    })
    render() {
        const { params } = this.props.navigation.state
        return (
            <View style={{flex : 1}}>
                <Image
                    style={{ height: '100%', width: '100%' }}
                    source={{ uri: params.image }}
                    resizeMode="contain"
                />
                {console.log(params.image)}
            </View>
        )
    }
}

export default DetailsScreen