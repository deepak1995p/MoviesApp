import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NewMovies from '../screens/NewMovies';
import UpcomingMovies from '../screens/UpcomingMovies';
import {Platform} from 'react-native'
import color from '../constant/color'
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';


const tabNavigator = createMaterialTopTabNavigator({
    New : NewMovies,
    Upcoming : UpcomingMovies
},{
    tabBarOptions:{
        style: { backgroundColor: color.accentColor },
        labelStyle: { fontSize: 14,fontWeight:'bold' },
    },
    
})

const mainNavigator = createStackNavigator({
    Login: LoginScreen,
    Otp : OtpScreen,
    Movies : tabNavigator
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android'? color.primaryColor:'white'
        },
        headerTintColor: Platform.OS === 'android'? 'white' : color.accentColor 
    }
})

export default createAppContainer(mainNavigator)
