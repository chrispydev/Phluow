import React from "react";
import { View, Text, ScrollView } from "react-native";
import Wrapper from "../components/Wrapper";
import RobberDetail from "../components/RobberDetail";

export default function SchedulePickups() {
  return (
    <Wrapper headerTitle="Schedule Pickups">
      <ScrollView showsVerticalScrollIndicator={false}>
        <RobberDetail />
        <RobberDetail />
        <RobberDetail />
      </ScrollView>
    </Wrapper>
  );
}
