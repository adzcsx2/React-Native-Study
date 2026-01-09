import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
import { VStack } from "~/libs/components/ui/vstack";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "~/libs/components/ui/text";
import { Button, ButtonText } from "~/libs/components/ui/button";
import { Divider } from "~/libs/components/ui/divider";
import { View } from "react-native";
import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";


export default function TabLayout() {
  const router = useRouter();
  return (
    <NativeTabs tintColor="#129CF0"
    
    disableTransparentOnScrollEdge>
      <NativeTabs.Trigger name="tab1">
        <Icon src={<VectorIcon family={AntDesign} name="star" />} />
        <Label>Tab1</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tab2">
        <Icon src={<VectorIcon family={AntDesign} name="home" />} />
        <Label>Tab2</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
