import React, { Component } from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'


const Input = ({ value, placeholder, onChangeText, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles
    return (
        <View style={containerStyle} >
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                underlineColorAndroid="#03A9F4"
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    )

}
const styles = StyleSheet.create(
    {
        inputStyle: {
            color: '#000',
            paddingRight: 2,
            paddingLeft: 5,
            fontSize: 18,
            height: 55,
            flex: 4,
            borderRadius: 30,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },

        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'

        }
    }
)
export { Input }