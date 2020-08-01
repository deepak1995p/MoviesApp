import React,{useState,useRef} from 'react'
import { View, Button,StyleSheet,TextInput,Keyboard } from 'react-native'
import color from '../constant/color'

const OtpScreen = (props) => {

    const [enteredValue1, setEnteredValue1] = useState('')
    const [enteredValue2, setEnteredValue2] = useState('')
    const [enteredValue3, setEnteredValue3] = useState('')
    const [enteredValue4, setEnteredValue4] = useState('')
    const [enteredValue5, setEnteredValue5] = useState('')
    const [enteredValue6, setEnteredValue6] = useState('')

    const inputE2 = useRef(null)
    const inputE3 = useRef(null)
    const inputE4 = useRef(null)
    const inputE5 = useRef(null)
    const inputE6 = useRef(null)

    return (
        <View style={styles.screen}>
            <View style={{flexDirection:'row'}}>
            <TextInput 
            autoFocus={true}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue1}
            onChangeText={(value)=>{
                inputE2.current.focus();
                setEnteredValue1(value)
            }}
            style={styles.input} />

            <TextInput 
            ref={inputE2}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue2}
            onChangeText={(value)=>{
                inputE3.current.focus();
                setEnteredValue2(value)
            }}
            style={styles.input} />

            <TextInput 
            ref={inputE3}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue3}
            onChangeText={(value)=>{
                inputE4.current.focus();
                setEnteredValue3(value)
            }}
            style={styles.input} />

            <TextInput 
            ref={inputE4}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue4}
            onChangeText={(value)=>{
                inputE5.current.focus();
                setEnteredValue4(value)
            }}
            style={styles.input} />

            <TextInput 
            ref={inputE5}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue5}
            onChangeText={(value)=>{
                inputE6.current.focus();
                setEnteredValue5(value)
            }}
            style={styles.input} />

            <TextInput 
            ref={inputE6}
            maxLength={1}
            keyboardType='number-pad'
            value={enteredValue6}
            onChangeText={(value)=>{
                setEnteredValue6(value)
                Keyboard.dismiss();
            }}
            style={styles.input} />
            </View>

            <View style={styles.button}>
            <Button 
            title='Confirm'
            onPress={()=>{
                props.navigation.navigate('Movies')
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
        width:40,
        height:40,
        borderColor:'black',
        borderBottomWidth:1,
        fontSize:18,
        backgroundColor:'#DCDCDC',
        marginRight:10,
        textAlign:'center'
    },
    button:{
        width:80,
        marginTop:20,
    }
})

export default OtpScreen
