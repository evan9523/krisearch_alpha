import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Data from "../krisearch_alpha/src/data/items.json";
import Farmer from "../krisearch_alpha/src/data/farmers.json";

import { Modal } from "./src/components/Modal";
import { BlurView } from "expo-blur";
import SearchBar from "./src/components/SearchBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/screens/HomeScreen";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Profile } from "./src/screens/ProfileScreen";
import { Search } from "./src/screens/SearchScreen";
import { FAB } from "./src/components/FAB";
import { FloatingAction } from "react-native-floating-action";
import homeStack from "./src/routes/homeStack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const windowWidth = Dimensions.get("window").width;

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: windowWidth > 767 ? "#EAEAFF" : "white",
              alignItems: "center",
              justifyContent: "center",
              height: 25,
            }}
          ></TouchableOpacity>
        );
      })}
    </View>
  );
}

// function HomeTabs() {
//   return (
//     <Tab.Navigator
//     tabBar={props => <MyTabBar {...props}/>}
//     tabBarOptions={{ showLabel: false }}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <Feather name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#8790FF",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          height: 43,
          width: windowWidth > 767 ? 90 : "100%",
          bottom: windowWidth > 767 ? "96%" : 0,
          backgroundColor: windowWidth > 767 ? "#EAEAFF" : "#fff",
          shadowColor: "#98A0FF",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5.46,

          elevation: 9,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App({ navigation }) {
  const [darkenbg, setdarkenbg] = useState(false);
  const [hider, sethider] = useState(false);

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <Button title="click me" onPress={()=>myfunc()}>

    //   </Button>

    //   <TextInput style={{width:"100%", backgroundColor:"yellow", height:50}} placeholder="Enter details" onChangeText={(text)=>searchFarmers(text)}>

    //   </TextInput>

    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer
      linking={{
        prefixes: ["rne://127.0.0.1:19006/--/"],
        config: {
          screens: {
            Root: {
              path: "/",
              initialRouteName: "/",
              screens: {
                Home: "/",
                Details: "/details",
                Search: "/search",
              },
            },
          },
        },
      }}
      fallback={<Text>Loading...</Text>}
    >
      {/* <Button title ="GO CORONA GO" onPress={()=>navigation.navigate('Profile')}/> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>

      {/* <FloatingAction overlayColor='none' buttonSize={70} showBackground onPressMain={()=>alert('PRessed')} position="center" color="#fff" floatingIcon={

        <TouchableOpacity style={{backgroundColor:darkenbg?"#3A48ED":"#fff", width:"100%", height:"100%",alignItems:"center",justifyContent:"center", borderColor:"#8790FF", borderWidth:2,borderRadius:"100%"}}
        
        onPress={()=>setdarkenbg(!darkenbg)}
        >
   {!darkenbg?(
              <SimpleLineIcons name="magnifier" size={30} color="#3A48ED"/>
            ):(
              <SimpleLineIcons name="close" size={30} color="#fff"/>
            )}
        </TouchableOpacity>
      } /> */}
      {/* <TouchableOpacity style={{height:80, width:80, alignItems:"center",justifyContent:"center",borderWidth:2, borderRadius:80,borderColor:darkenbg?"#fff":"#8790FF" ,backgroundColor:darkenbg?"#3A48ED":"#fff", position:"absolute",bottom:7, alignSelf:"center", zIndex:999}} onPress={()=>setdarkenbg(!darkenbg)}>
          <View>
            {!darkenbg?(
              <SimpleLineIcons name="magnifier" size={30} color="#3A48ED"/>
            ):(
              <SimpleLineIcons name="close" size={30} color="#fff"/>
            )}
            
          </View>
          </TouchableOpacity>
          {darkenbg?(
      <View style={{width:"100%", height:"100%",backgroundColor: 'rgba(0, 0, 0, 0.65)', position:"absolute"}}> 
       <BlurView tint="dark" intensity={40} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
        <View style={{marginTop:20,padding:5, height:"100%"}}>

          <SearchBar visible={darkenbg} />
        </View>
      </BlurView>
      </View>
     
    ):null} */}
      {/* <TouchableOpacity style={{height:80, width:80, alignItems:"center",justifyContent:"center",borderWidth:2, borderRadius:80,borderColor:!hider?"#fff":"#8790FF" ,backgroundColor:hider?"#fff":"#3A48ED", position:"absolute",bottom:7, alignSelf:"center", zIndex:999}} onPress={()=>sethider(!hider)}>
    <View>
            {hider?(
              <SimpleLineIcons name="magnifier" size={30} color="#3A48ED"/>
            ):(
              <SimpleLineIcons name="close" size={30} color="#fff"/>
            )}
            
          </View>
          </TouchableOpacity> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
