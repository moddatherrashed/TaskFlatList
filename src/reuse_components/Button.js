import React from 'react'
import {Text , StyleSheet ,TouchableOpacity } from 'react-native'

const Button = (props) => {

    return(
        <TouchableOpacity onPress = {props.onPress} style ={{
            
                backgroundColor : props.color||'#3B5998',
                height : 50 ,
                borderRadius : 2 ,
                borderWidth : 1,
                borderColor :  "#03A9F4"  ,
                padding : 10,
                alignSelf : 'stretch',
                marginBottom : 5,
                marginLeft : 5 ,
                marginRight : 5 ,
                marginTop : 10 ,
                justifyContent : 'center',
                alignItems : 'center'
            
        }}>
            <Text style={{
            color : props.textColor || '#FFFFFF',
            fontWeight : '600',
            fontSize : 16,
            paddingTop : 5 ,
            paddingBottom : 5
        }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create(
    {
        
        textStyle : {
            color : '#03A9F4',
            fontWeight : '600',
            fontSize : 16,
            paddingTop : 5 ,
            paddingBottom : 5
        }
    }
)

export  {Button}