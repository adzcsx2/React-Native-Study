import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { VStack } from "@/components/ui/vstack";

import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const router = useRouter();
  return (
    <VStack className="flex-1">
      <Button
        className="text-lg  mt-20   align-center bg-primary-500 mx-20 rounded-lg"
        size="md"
        onPress={() => {
          router.back();
        }}
      >
        <ButtonText>Go back</ButtonText>
      </Button>
      <Tabs
        screenOptions={{
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      
      >
        <Tabs.Screen
          name="tab1"
          options={{
            title: "Tab 123",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "star" : "star-o"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tab2"
          options={{
            title: "Tab 2",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "star" : "star-o"} color={color} />
            ),
          }}
        />
      </Tabs>
    </VStack>
  );
}
