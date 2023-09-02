import React from "react";
import { View, Modal } from "react-native";

/*eslint-disable*/
export default function PopupConfirmation({ visible, onClose, children }) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          {children}
          <TouchableOpacity onPress={onClose}>
            <Text style={{ marginTop: 20, color: "blue" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
