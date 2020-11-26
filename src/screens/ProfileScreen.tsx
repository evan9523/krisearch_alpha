import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Modal } from "../components/Modal";

export function Profile({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View
          style={[
            styles.container,
            {
              justifyContent: "center",
              alignContent: "flex-start",
              padding: 10,
            },
          ]}
        >
          <Text>Krisearch</Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "red",
            padding: 5,
            height: 60,
            justifyContent: "space-between",
            top: 20,
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: 16, color: "#3A48ED" }}>Namaste</Text>
          <Text style={{ fontSize: 16, color: "#14142B", fontWeight: "bold" }}>
            Lets discover farmers
          </Text>
          <Button
            title="GO to Search"
            onPress={() => navigation.navigate("Search")}
          />
        </View>

        <View style={{ marginTop: 50, padding: 6, height: "100%" }}>
          <Text>We are in Profile</Text>
          <Modal />
        </View>
      </View>
    </ScrollView>
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
