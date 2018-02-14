import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Input, Button } from './reuse_components'

class TodoScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            textFeild: ''
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

        title: `Todo screen`,
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
                height: 80,
                borderWidth: 1,
                marginBottom: 2,
                flexDirection: 'column',
                borderColor: '#03A9F4',
                borderWidth: 2
            }}
        >
            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
            <Text style={{ textAlign: 'center', color: doneColor }}>{done}</Text>
        </TouchableOpacity>
    }
    render() {
        const { navigate } = this.props.navigation

        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Input
                        placeholder='Add todo here !'
                        value={this.state.textFeild}
                        onChangeText={textFeild => this.setState({ textFeild })} />
                </View>
                <Button text="Add" onPress={() => {
                    let data = [{
                        "userId": 500,
                        "id": 500,
                        "title": this.state.textFeild,
                        "completed": false
                    }, ...this.state.data]
                    this.setState({
                        data
                    })

                }} />
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
            </View>
        )
    }
}

export default TodoScreen