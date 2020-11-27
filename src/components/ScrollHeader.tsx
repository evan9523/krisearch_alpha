import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import SearchBar from "./SearchBar";

export interface ScrollHeaderProps {
  scrolled?: boolean;
  visible?: boolean;
  headerTap(): any;
  headHolder?: string;
}

function ScrollHeader(props: ScrollHeaderProps) {
  const [sugg, setsugg] = useState(null);
  const { scrolled, visible, headerTap, headHolder } = props;

  return (
    <View
      style={{
        width: "100%",
        height: 100,
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Image
          source={require("../../assets/newlogo.png")}
          style={{ width: 100, height: 50 }}
        />
      </View>
      <View style={{ marginTop: 0, width: "100%" }}>
        <SearchBar onHit={headerTap} holderValue={headHolder} />
      </View>
    </View>
  );
}

export default ScrollHeader;
