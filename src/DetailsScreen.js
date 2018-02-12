import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'


class DetailsScreen extends Component {
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', marginBottom: 20 }}>title : {params.title}</Text>
                <Text style={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: 5 }}>body : {params.body}</Text>
            </View>
        )
    }
}

export default DetailsScreen