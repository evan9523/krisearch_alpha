import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import { Home } from '../screens/HomeScreen';
import { Result } from '../screens/ResultScreen';
import { Profile } from '../screens/ProfileScreen';


const screens={
    Home:{
        screen:Home
    },
    Result:{
        screen:Result
    },
    Profile:{
        screen:Profile
    }
}
const HomeStack =createStackNavigator();


export default NavigationContainer(HomeStack);
