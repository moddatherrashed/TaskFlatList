import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

class TodoScreen extends Component {

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
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
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

    ifCompleted(item) {
        var done = ''
        var doneColor = ''
        if (item.completed) {
            done = 'done'
            doneColor = 'green'
        } else {
            done = 'not done'
            doneColor = 'red'
        }

        return <TouchableOpacity
            style={{
                height: 50,
                borderWidth: 1,
                marginBottom: 2,
                flexDirection:'column'
            }}
        >   
            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
            <Text style={{textAlign : 'center', color : doneColor}}>{done}</Text>
        </TouchableOpacity>
    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <View>
                <FlatList
                    style={{ flexGrow: 0 }}
                    data={this.state.data}
                    keyExtractor={item => item.title}
                    renderItem={({ item, index }) =>
                        this.ifCompleted(item)
                    }
                />

            </View>
        )
    }
}

export default TodoScreen