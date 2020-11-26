import React, { useRef } from "react";
import { View, Text, TouchableOpacity, Button, Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";

export interface ModalProps {
  showModal?: boolean;
}
export const Modal = (props: ModalProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const modalHeight = Dimensions.get("window").height;
  const newHeight = modalHeight * 0.99;

  const { showModal } = props;
  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        modalHeight={newHeight}
        threshold={100}
        closeOnOverlayTap={true}
        childrenStyle={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
        modalStyle={{ backgroundColor: "red" }}
      >
        <TouchableOpacity onPress={() => onClose()}>
          Press here
        </TouchableOpacity>
      </Modalize>
    </>
  );
};
