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
import { floor } from "react-native-reanimated";

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
  const [hideFAB, sethideFAB] = useState(false);
  const [parent, setparent] = useState(false);
  const [genderSelected, setgenderSelected] = useState(false);

  const setSearch = (text: string) => {
    let dynamic = text.toLowerCase();
    console.log("dynamic: " + dynamic);
  };

  const filteredCrops = Data.filter((item) => {
    return item.name.toLocaleLowerCase().includes(term.toLowerCase());
  });

  const filteredParents = Data.filter((item) => {
    return item.type.toLocaleLowerCase().includes(term.toLowerCase());
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

  const onCloseFilter = () => {
    modalizeRef.current?.close();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  return (
    <View style={{ backgroundColor: "red ", flexDirection: "column" }}>
      <View style={{ height: windowHeight, backgroundColor: "#EAEAFF" }}>
        <View style={{ padding: 6, height: "100%" }}>
          <ScrollHeader
            headerTap={() => {
              setblur(!blur), setterm(""), setparent(false);
            }}
            headHolder={placer ? term : parent ? term : "Search"}
          />
          {placer ? (
            !parent ? (
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
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
                <TouchableOpacity
                  style={{ top: 30 }}
                  onPress={() => {
                    console.log("Biharma"), onOpenfilter();
                  }}
                >
                  Filter
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    marginTop: 60,
                    padding: 5,
                    fontWeight: "500",
                    color: "#6F6F6F",
                  }}
                >
                  {filteredParents.length} results found in "{term}s"
                </Text>
              </View>
            )
          ) : parent ? (
            <View>
              <Text
                style={{
                  marginTop: 60,
                  padding: 5,
                  fontWeight: "500",
                  color: "#6F6F6F",
                }}
              >
                {filteredParents.length} results found in "{term}s"
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  marginTop: 60,
                  padding: 5,
                  fontWeight: "500",
                  color: "#6F6F6F",
                }}
              >
                {term}
              </Text>
              <TouchableOpacity
                style={{ top: 30 }}
                onPress={() => console.log("Biharma")}
              >
                Filter
              </TouchableOpacity>
            </View>
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

          <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
            {parent ? (
              <View
                style={{
                  flexDirection: "row",
                  width: windowWidth > 767 ? "90%" : "100%",
                  flexWrap: "wrap",
                  marginTop: 0,
                  alignItems: "flex-start",
                  alignSelf: "center",
                  justifyContent: "flex-start",
                  height: windowHeight < 768 ? windowHeight * 0.99 : null,
                }}
              >
                {filteredParents.map((item, cIndex) => {
                  return (
                    <Card
                      key={item.id}
                      name={item.name}
                      avatar={item.image}
                      isCrop={true}
                      onPress={() => {
                        setparent(!parent), setterm(item.name);
                      }}
                    />
                  );
                })}
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  width: windowWidth > 767 ? "90%" : "100%",
                  flexWrap: "wrap",
                  marginTop: 0,
                  alignItems: "flex-start",
                  alignSelf: "center",
                  justifyContent: "flex-start",
                  height: windowHeight < 768 ? windowHeight * 0.99 : null,
                }}
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
                        setfarmer(item.id), onOpen(), sethideFAB(true);
                      }}
                      cropAvatar={item.image}
                    />
                  );
                })}
              </View>
            )}
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
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text
                style={{
                  padding: 5,
                  fontWeight: "500",
                  color: "#6F6F6F",
                  fontSize: 20,
                  marginLeft: 5,
                }}
              >
                Filter resuts here
              </Text>
              <TouchableOpacity onPress={() => onCloseFilter()}>
                Close Filter
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "95%",
                alignSelf: "flex-start",
                height: 1,
                backgroundColor: "#C0C0C0",
                marginTop: 10,
                alignItems: "flex-start",
              }}
            ></View>
            <Text>By gender</Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setgenderSelected(!genderSelected),
                    gender == "" ? setgender("male") : "",
                    console.log("Selected Value is:" + gender);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginLeft: 5,
                  }}
                >
                  <FontAwesome
                    name="dot-circle-o"
                    size={20}
                    color="black"
                    style={{ top: 2 }}
                  />
                  <Text style={{ fontSize: 20, marginLeft: 3 }}>Male</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setgender("");
                  setgenderSelected(!genderSelected),
                    setgender("female"),
                    console.log("Selected Value is:" + gender);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginLeft: 5,
                  }}
                >
                  <FontAwesome name="dot-circle-o" size={20} color="black" />
                  <Text style={{ fontSize: 20, marginLeft: 3 }}>Female</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modalize>
        </View>
      </View>
      {!blur ? (
        <View
          style={{
            width: windowWidth,
            height: 30,
            backgroundColor: "#fff",
            flexDirection: "row",
            bottom: 0,
            position: "absolute",
            shadowColor: "#98A0FF",
            shadowOffset: {
              width: 0,
              height: -2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.46,

            elevation: 9,
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather name="home" size={25} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Profile")}
          >
            <Feather name="user" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      ) : null}

      <KeyboardAvoidingView>
        <FloatingAction
          position="center"
          overlayColor="transparent"
          visible={!hideFAB}
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
                  value={term}
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
                  {term ? (
                    <TouchableOpacity
                      onPress={() => {
                        setterm("");
                      }}
                    >
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
                        <AntDesign name="close" size={20} color="#3A48ED" />
                      </View>
                    </TouchableOpacity>
                  ) : null}
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
                    <View
                      style={{
                        width: "100%",
                        alignItems: "flex-start",
                        padding: 5,
                        marginBottom: 10,
                        marginTop: 5,
                      }}
                    >
                      {filteredCrops.length > 0 ? (
                        <Text
                          style={{
                            marginLeft: 20,
                            fontSize: 15,
                            fontWeight: "600",
                          }}
                        >
                          Available Crops
                        </Text>
                      ) : (
                        <Text
                          style={{
                            marginLeft: 20,
                            fontSize: 15,
                            fontWeight: "600",
                            alignSelf: "center",
                          }}
                        >
                          🤔 ....That seems to be missing...
                        </Text>
                      )}
                    </View>

                    {filteredCrops.map((item, cIndex) => {
                      return (
                        <View
                          style={{
                            width:
                              windowWidth > 768
                                ? Dimensions.get("window").width - 80
                                : Dimensions.get("window").width - 50,
                            height: 45,
                            padding: 5,
                            borderRadius: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#fff",
                            margin: 2,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setplacer(true),
                                setblur(!blur),
                                setterm(item.name);
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
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
                              <Text style={{ fontSize: 15 }}>{item.type}</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: "#3ECF8E",
                              height: "100%",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 5,
                              borderRadius: 5,
                              alignSelf: "flex-end",
                            }}
                            onPress={() => {
                              setparent(!parent),
                                setterm(item.type),
                                setplacer(!placer),
                                setblur(!blur);
                            }} //true
                          >
                            <Text style={{ fontSize: 15, color: "#fff" }}>
                              View {item.type}s
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                ) : null}
              </View>
            </View>

            <KeyboardAvoidingView>
              <FloatingAction
                position="center"
                overlayColor="transparent"
                color="#3A48ED"
                floatingIcon={React.cloneElement(
                  <SimpleLineIcons name="close" color="#fff" size={30} />
                )}
                onPressMain={() => navigation.navigate("Home")}
              />
            </KeyboardAvoidingView>
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
