import React, { useState } from "react";
import { View, Modal, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { colors } from "../styles/colors";

/*eslint-disable*/
export default function PopupConfirmation({
  visible,
  onClose,
  children,
  popupText,
}) {
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
          backgroundColor: "rgba(8, 8, 8, 0.9)",
        }}
      >
        <View
          style={{
            backgroundColor: colors.boxColor,
            padding: 20,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            position: "relative",
            maxWidth: 250,
          }}
        >
          <Image source={require("../assets/ellipse.png")} />
          <View style={{ gap: 10 }}>
            <Text style={{ color: colors.secondaryText, textAlign: "center" }}>
              Success!
            </Text>
          </View>

          <Text
            style={{
              color: colors.secondaryText,
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            {popupText}
          </Text>
          {children}
        </View>
      </View>
    </Modal>
  );
}
