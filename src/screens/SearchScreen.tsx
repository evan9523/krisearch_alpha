import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingView,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { TextInput } from "react-native-gesture-handler";
import Card from "../components/Card";
import ScrollHeader from "../components/ScrollHeader";
import SearchBar from "../components/SearchBar";
import Farmers from "../data/farmers.json";
import Data from "../data/items.json";
import { Modalize } from "react-native-modalize";
import { hideNumber } from "../utils/hideNumber";
import { getSmallString } from "../utils/getSmallString";

const windowHeight = Dimensions.get("window").height;
const modalHeight = Dimensions.get("window").height;
const newHeight = modalHeight * 0.86;
const windowWidth = Dimensions.get("window").width;
const renderModal = windowHeight * 1.5;

export function Search({ navigation }) {
  const [blur, setblur] = useState(true);
  const [term, setterm] = useState("");
  const [placer, setplacer] = useState(false);
  const [farmer, setfarmer] = useState(0);
  const [openFilter, setopenFilter] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [gender, setgender] = useState("");

  const setSearch = (text: string) => {
    let dynamic = text.toLowerCase();
    console.log("dynamic: " + dynamic);
  };

  const filteredCrops = Data.filter((item) => {
    return item.name.toLocaleLowerCase().includes(term.toLowerCase());
  });

  const filteredFarmers = Farmers.filter((item) => {
    return item.crop.toLocaleLowerCase().includes(term.toLowerCase());
  });

  const genderFilter = filteredFarmers.filter((item) => {
    return item.gender.toLocaleLowerCase().includes(term.toLowerCase());
  });

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onOpenfilter = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <View style={{ backgroundColor: "red ", flexDirection: "column" }}>
      <View style={{ height: windowHeight, backgroundColor: "#EAEAFF" }}>
        <View style={{ padding: 6, height: "100%" }}>
          <ScrollHeader
            headerTap={() => setblur(!blur)}
            headHolder={placer ? term : "Search"}
          />
          {placer ? (
            <Text
              style={{
                marginTop: 60,
                padding: 5,
                fontWeight: "500",
                color: "#6F6F6F",
              }}
            >
              {filteredFarmers.length} results found for "{term}"
            </Text>
          ) : (
            <Text
              style={{
                marginTop: 60,
                padding: 5,
                fontWeight: "500",
                color: "#6F6F6F",
              }}
            >
              Search
            </Text>
          )}
          {/* {placer ? (
            <TouchableOpacity
              style={{ alignSelf: "flex-end", top: -23, width: 50, height: 20 }}
              onPress={() => {
                onOpenfilter();
              }}
            >
              Filter
            </TouchableOpacity>
          ) : null} */}
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 0,
              alignItems: "flex-start",
              backgroundColor: "yellow",
              justifyContent: "flex-start",
            }}
            showsVerticalScrollIndicator={false}
            bounces={true}
          >
            {filteredFarmers.map((item, cIndex) => {
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  phone={item.phone}
                  address={item.address}
                  crop={item.crop}
                  onPress={() => {
                    setfarmer(item.id), onOpen();
                  }}
                  cropAvatar={item.image}
                />
              );
            })}
          </ScrollView>
          <Modalize
            ref={modalizeRef}
            modalHeight={newHeight}
            modalStyle={
              windowWidth > 767 ? { width: 500, alignSelf: "center" } : null
            }
            threshold={100}
            closeOnOverlayTap={true}
            mod
          >
            {filteredFarmers.map((item, cIndex) => {
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

                        elevation: 11,
                      }}
                    >
                      {/* <Text>{item.name}</Text>
                        <Text>{item.address}</Text>
                        <Image source={item.avatar} style={{height:50, width:50}}/>
                   <Text>{farmer}</Text> */}
                      <TouchableOpacity
                        onPress={() => onClose()}
                        style={{
                          alignItems: "center",
                          marginTop: 10,
                          marginRight: 2,
                          padding: 5,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          backgroundColor: "#9F99FF",
                          borderRadius: "100%",
                          height: 35,
                          width: 35,
                        }}
                      >
                        <SimpleLineIcons name="close" size={25} color="#fff" />
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
                              style={{
                                flexDirection: "column",
                                width: "50%",
                              }}
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
                                {Data.map((cropName, cIndex) => {
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
                                          style={{
                                            fontSize: 30,
                                            marginLeft: 5,
                                          }}
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
                              style={{
                                flexDirection: "column",
                                width: "50%",
                              }}
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
      </View>

      <KeyboardAvoidingView>
        <FloatingAction
          position="center"
          overlayColor="transparent"
          color="#3A48ED"
          floatingIcon={React.cloneElement(
            <SimpleLineIcons name="magnifier" color="#fff" size={30} />
          )}
          onPressMain={() => setblur(true)}
        />
      </KeyboardAvoidingView>

      {blur ? (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            position: "absolute",
          }}
        >
          <BlurView
            tint="dark"
            intensity={40}
            style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
          >
            <View style={{ marginTop: 20, padding: 5, height: "100%" }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 55,
                  width: "97%",
                  alignSelf: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 8,
                  padding: 20,
                  shadowColor: "#98A0FF",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,

                  elevation: 9,
                }}
              >
                {/* <TextInput style={{height:40, backgroundColor:"white", width:"75%", padding:5, outline}} placeholder="Search for crops..." autoFocus={true}/> */}
                <TextInput
                  style={
                    Platform.OS === "web" && {
                      outlineColor: "#fff",
                      height: 40,
                      backgroundColor: "white",
                      width: "95%",
                      padding: 5,
                      fontSize: 20,
                    }
                  }
                  placeholder="Search for Crops"
                  autoFocus={blur}
                  editable={blur}
                  onChangeText={(text) => {
                    console.log(text), setterm(text), setSearch(text);
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        borderWidth: 2,
                        borderColor: "#A1C7FF",
                        alignItems: "center",
                        alignSelf: "flex-end",
                        justifyContent: "center",
                        right: -10,
                        backgroundColor: "#A1C7FF",
                        borderRadius: 25,
                      }}
                    >
                      <AntDesign
                        name="close"
                        size={20}
                        color="#3A48ED"
                        onPress={() => setblur(!blur)}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
                {/* <TouchableOpacity style={{width:"100%", height:30, alignItems:"center", justifyContent:"center", backgroundColor:"transparent"}} onPress={()=>{setplacer(true),setblur(!blur)}}>
<Text>{term}</Text>
</TouchableOpacity> */}
                {term !== null ? (
                  <View
                    style={{
                      width: "97%",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      margin: 5,
                    }}
                  >
                    {filteredCrops.map((item, cIndex) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setplacer(true), setblur(!blur), setterm(item.name);
                          }}
                        >
                          <View
                            style={{
                              width: Dimensions.get("window").width - 50,
                              height: 45,
                              padding: 5,
                              borderRadius: 8,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              backgroundColor: "#fff",
                              margin: 2,
                            }}
                          >
                            <Image
                              source={{ uri: item.image }}
                              style={{
                                height: 35,
                                width: 35,
                                borderColor: "green",
                                borderWidth: 1,
                                borderRadius: 35,
                              }}
                            />
                            <Text style={{ fontSize: 20 }}> {item.name}</Text>
                            <Text
                              style={{
                                fontSize: 15,
                                alignSelf: "center",
                                color: "#989898",
                              }}
                            >
                              {" "}
                              in{" "}
                            </Text>
                            <Text style={{ fontSize: 15, color: "#3A48ED" }}>
                              {item.type}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ) : null}
              </View>
            </View>

            <View
              style={{
                width: "100%",
                backgroundColor: "transparent",
                height: 50,
                alignItems: "center",
                top: Dimensions.get("window").height - 65,
                position: "absolute",
              }}
            >
              <FloatingAction
                position="center"
                overlayColor="transparent"
                color="#3A48ED"
                floatingIcon={React.cloneElement(
                  <SimpleLineIcons name="close" color="#fff" size={30} />
                )}
                onPressMain={() => navigation.navigate("Home")}
              />
            </View>
          </BlurView>
        </View>
      ) : null}
    </View>
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
