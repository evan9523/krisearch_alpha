import { BlurView } from "expo-blur";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  TextInput,
  Platform,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import { Modal } from "../components/Modal";
import ScrollHeader from "../components/ScrollHeader";
import SearchBar from "../components/SearchBar";
import Farmers from "../data/farmers.json";
import Crops from "../data/items.json";
import { Modalize } from "react-native-modalize";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { getSmallString } from "../utils/getSmallString";
import { hideNumber } from "../utils/hideNumber";
import Data from "../data/items.json";
import { FloatingAction } from "react-native-floating-action";

export function Home({ navigation }) {
  const [showdata, setshowdata] = useState(false);
  const [showHeader, setshowHeader] = useState(false);
  const [hideFAB, sethideFAB] = useState(false);
  const [search, setsearch] = useState({
    isLoading: true,
    crops: [],
  });
  const [farmer, setfarmer] = useState(0);

  const [homeBlur, sethomeBlur] = useState(false);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const modalizeRef = useRef<Modalize>(null);

  function renderCrops() {
    return <Text>Hello</Text>;
  }

  const modalData = [];
  function passData(id: number) {
    {
      Farmers.map((item, cIndex) => {
        if (id == item.id) {
          modalData.push(
            item.id,
            item.name,
            item.address,
            item.avatar,
            item.crop,
            item.phone
          );

          console.log(modalData);
        } else {
          return <Text>No Data found</Text>;
        }
      });
    }
  }
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const modalHeight = Dimensions.get("window").height;
  const newHeight = modalHeight * 0.86;

  return (
    <View style={{ height: windowHeight * 0.97, backgroundColor: "#EAEAFF" }}>
      <View style={{ padding: 6, height: "100%" }}>
        <ScrollHeader
          headerTap={() => navigation.navigate("Search")}
          headHolder="Search for crops..."
        />
        <Text
          style={{
            marginTop: 60,
            padding: 5,
            fontWeight: "500",
            color: "#6F6F6F",
          }}
        >
          Trending Farmers
        </Text>

        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            width: windowWidth > 767 ? "90%" : "100%",
            flexWrap: "wrap",
            marginTop: 0,
            alignItems: "flex-start",
            alignSelf: "center",
            justifyContent: "flex-start",
          }}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {Farmers.map((item, cIndex) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                phone={item.phone}
                address={item.address}
                crop={item.crop}
                onPress={() => {
                  setfarmer(item.id),
                    onOpen(),
                    passData(item.id),
                    sethideFAB(true);
                }}
                cropAvatar={item.image}
              />
            );
          })}
        </ScrollView>

        <Modalize
          ref={modalizeRef}
          modalHeight={newHeight}
          threshold={100}
          modalStyle={
            windowWidth > 767 ? { width: 500, alignSelf: "center" } : null
          }
          closeOnOverlayTap={true}
          mod
        >
          {Farmers.map((item, cIndex) => {
            let kisan = farmer;
            if (kisan == item.id) {
              return (
                <View>
                  <View
                    style={{
                      backgroundColor: "#3A48ED",
                      width: "100%",
                      height: 190,
                      borderWidth: 1,
                      top: -2,
                      borderRadius: 15,
                      borderColor: "#3A48ED",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 5.46,

                      elevation: 9,
                    }}
                  >
                    {/* <Text>{item.name}</Text>
                        <Text>{item.address}</Text>
                        <Image source={item.avatar} style={{height:50, width:50}}/>
                   <Text>{farmer}</Text> */}
                    <TouchableOpacity
                      onPress={() => {
                        onClose(), sethideFAB(false);
                      }}
                      style={{
                        alignItems: "center",
                        marginTop: 5,
                        marginRight: 2,
                        padding: 5,
                        justifyContent: "center",
                        alignSelf: "flex-end",
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: 10,
                        height: 35,
                        width: 70,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 500,
                            color: "#fff",
                            marginRight: 5,
                          }}
                        >
                          Close
                        </Text>
                        <SimpleLineIcons
                          name="close"
                          size={15}
                          color="#fff"
                          onPress={() => {
                            onClose(), sethideFAB(false);
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 2,
                        top: -10,
                      }}
                    >
                      <View
                        style={{ width: "40%", height: "100%", padding: 5 }}
                      >
                        <Image
                          source={{ uri: item.avatar }}
                          style={{
                            height: 120,
                            width: 120,
                            borderRadius: 120,
                            borderColor: "#fff",
                            borderWidth: 2,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          width: "60%",
                          height: "100%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            height: "100%",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <View style={{ flexDirection: "row" }}>
                            <Feather name="user" size={20} color="#fff" />
                            <Text
                              style={{
                                fontSize: 20,
                                color: "#fff",
                                fontWeight: "700",
                                marginLeft: 5,
                              }}
                            >
                              {getSmallString(item.name)}
                            </Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Feather name="map-pin" size={20} color="#fff" />
                            <Text
                              style={{
                                fontSize: 20,
                                color: "#fff",
                                fontWeight: "700",
                                marginLeft: 5,
                              }}
                            >
                              {item.address}
                            </Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Feather name="user" size={20} color="#fff" />
                            <Text
                              style={{
                                fontSize: 20,
                                color: "#fff",
                                fontWeight: "700",
                                marginLeft: 5,
                              }}
                            >
                              {hideNumber(item.phone)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={{ top: -40 }}>
                      <Text
                        style={{
                          marginTop: 60,
                          padding: 5,
                          fontWeight: "500",
                          color: "#6F6F6F",
                          fontSize: 20,
                          marginLeft: 5,
                        }}
                      >
                        Farming Details
                      </Text>
                      <View
                        style={{
                          width: "95%",
                          alignSelf: "center",
                          height: 1,
                          backgroundColor: "#C0C0C0",
                        }}
                      ></View>
                      <View
                        style={{
                          flexDirection: "column",
                          marginTop: 10,
                          padding: 10,
                          height: 180,
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                            marginBottom: 10,
                          }}
                        >
                          <View
                            style={{ flexDirection: "column", width: "50%" }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <Entypo name="leaf" size={20} color="#9F99FF" />
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: "#6F6F6F",
                                  fontWeight: "600",
                                }}
                              >
                                Crop
                              </Text>
                            </View>
                            <View>
                              {Crops.map((cropName, cIndex) => {
                                let a = cropName.name.toLowerCase();
                                let b = item.crop?.toLowerCase();
                                let result = a.localeCompare(b);

                                if (a == b) {
                                  return (
                                    <View
                                      style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Image
                                        source={{ uri: cropName.image }}
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderWidth: 1,
                                          borderRadius: 30,
                                          borderColor: "#3ECF8E",
                                        }}
                                      />
                                      <Text
                                        style={{ fontSize: 30, marginLeft: 5 }}
                                      >
                                        {cropName.name}
                                      </Text>
                                    </View>
                                  );
                                } else {
                                  null;
                                }
                              })}
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: "column",
                              width: "50%",
                              alignItems: "flex-end",
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <SimpleLineIcons
                                name="calendar"
                                size={20}
                                color="#9F99FF"
                              />
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: "#6F6F6F",
                                  marginLeft: 5,
                                  fontWeight: "600",
                                }}
                              >
                                Harvest Date
                              </Text>
                            </View>
                            <View>
                              <Text style={{ fontSize: 30, marginLeft: 5 }}>
                                {item.harvestDate}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                            marginTop: 5,
                          }}
                        >
                          <View
                            style={{ flexDirection: "column", width: "50%" }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <SimpleLineIcons
                                name="size-fullscreen"
                                size={20}
                                color="#9F99FF"
                              />
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: "#6F6F6F",
                                  fontWeight: "600",
                                  marginLeft: 5,
                                }}
                              >
                                Farming Area
                              </Text>
                            </View>
                            <View>
                              <Text style={{ fontSize: 30 }}>
                                {item.area} Kattha
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: "column",
                              width: "50%",
                              alignItems: "flex-end",
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <SimpleLineIcons
                                name="speedometer"
                                size={20}
                                color="#9F99FF"
                              />
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: "#6F6F6F",
                                  marginLeft: 5,
                                  fontWeight: "600",
                                }}
                              >
                                Quantity
                              </Text>
                            </View>
                            <View>
                              <Text style={{ fontSize: 30, marginLeft: 5 }}>
                                {item.quantity} quintal
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View></View>
                      </View>
                      <View
                        style={{
                          width: "95%",
                          alignSelf: "center",
                          height: 1,
                          backgroundColor: "#C0C0C0",
                          marginTop: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        flexDirection: "column",
                        top: -29,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "#808080",
                          marginLeft: 5,
                        }}
                      >
                        Coming soon
                      </Text>
                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          top: 5,
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            width: 120,
                            height: 50,
                            backgroundColor: "#A9A9A9",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            borderRadius: 10,
                          }}
                          onPress={() =>
                            alert(
                              "Click to chat feature helps you connect directly to this farmer in one click. Feature Coming soon !"
                            )
                          }
                        >
                          <FontAwesome5
                            name="whatsapp"
                            size={25}
                            color="#fff"
                          />
                          <Text
                            style={{
                              fontSize: 20,
                              color: "#fff",
                              marginLeft: 5,
                            }}
                          >
                            Chat
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            width: 120,
                            height: 50,
                            backgroundColor: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            borderRadius: 10,
                            borderColor: "#A9A9A9",
                            borderWidth: 2,
                          }}
                          onPress={() =>
                            alert(
                              "Support the farmer by any kind. Feature Coming Soon !"
                            )
                          }
                        >
                          <FontAwesome
                            name="handshake-o"
                            size={25}
                            color="#A9A9A9"
                          />
                          <Text
                            style={{
                              fontSize: 20,
                              color: "#A9A9A9",
                              marginLeft: 5,
                            }}
                          >
                            Support
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            } else {
              null;
            }
          })}
        </Modalize>
      </View>
      {/* {homeBlur?(
      <View style={{width:"100%", height:"100%",backgroundColor: 'rgba(0, 0, 0, 0.65)', position:"absolute"}}> 
       <BlurView tint="dark" intensity={40} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
        <View style={{marginTop:20,padding:5, height:"100%"}}>

       <View style={{ backgroundColor:"#fff",height:55, width:"100%", alignSelf:"center", flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderRadius:8, padding:5, shadowColor: "#98A0FF",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,}}>
            <TextInput style={Platform.OS === "web" && {outlineColor: "#fff",height:40, backgroundColor:"white", width:"75%", padding:5,fontSize:20 }}
            placeholder="Search for crops..." autoFocus={homeBlur}  editable={homeBlur}
            onFocus={()=>navigation.navigate('Search')}
            />
        
              

       </View>
       <View style={{flex:1,backgroundColor:"transparent"}}>
                {search.isLoading?
                <View style={{...StyleSheet.absoluteFill,alignItems:'center',justifyContent:'center'}}>
                        <ActivityIndicator size="large" color="blue"/>
                 </View> : null  
                }
               
            </View>
          
          <TouchableOpacity onPress={()=>sethomeBlur(!homeBlur)}>
                Press Me
          </TouchableOpacity>
        </View>
      </BlurView>
      </View>
     
    ):null} */}
      <View
        style={{
          width: "100%",
          backgroundColor: "transparent",
          height: 50,
          top: -42,
        }}
      >
        <FloatingAction
          position="center"
          visible={!hideFAB}
          overlayColor="transparent"
          color="#3A48ED"
          floatingIcon={React.cloneElement(
            <SimpleLineIcons name="magnifier" color="#fff" size={30} />
          )}
          onPressMain={() => navigation.navigate("Search")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
