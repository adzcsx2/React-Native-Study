import EditScreenInfo from "~/libs/components/EditScreenInfo";
import { Center } from "~/libs/components/ui/center";
import { Divider } from "~/libs/components/ui/divider";
import { Heading } from "~/libs/components/ui/heading";
import { Text } from "~/libs/components/ui/text";
import { ImageBackground, ScrollView, View } from "react-native";

export default function Tab2() {
  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/400/800" }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 20, minHeight: 1000 }}>
          <Heading className="font-bold text-2xl">Expo - Tab 1</Heading>
          <Divider className="my-[30px] w-[80%]" />
          <Text className="m-20 text-[1.5rem]">
            Example below to use gluestack-ui components.
          </Text>
          <EditScreenInfo path="app/(app)/(tabs)/tab1.tsx" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
