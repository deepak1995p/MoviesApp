import React,{useState,useRef, useEffect} from 'react'
import { View, Button,StyleSheet,TextInput } from 'react-native'
import color from '../constant/color'

const LoginScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')

    const numberInputHandler = (inputText)=>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }
    return (
        <View style={styles.screen}>
            <TextInput 
            blurOnSubmit
            autoFocus={true}
            maxLength={10}
            keyboardType='number-pad'
            placeholder="Enter Mobile Number"
            value={enteredValue}
            onChangeText={numberInputHandler}
            style={styles.input} />
            <View style={styles.button}>
            <Button 
            title='Confirm'
            onPress={()=>{
                props.navigation.navigate('Otp')
            }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        marginVertical:'45%'
    },
    input:{
        width:'75%',
        height:40,
        borderColor:'black',
        borderBottomWidth:1,
        paddingLeft:10,
        fontSize:18,
        backgroundColor:'#DCDCDC',
    },
    button:{
        width:80,
        marginTop:10,
    }
})

export default LoginScreen
