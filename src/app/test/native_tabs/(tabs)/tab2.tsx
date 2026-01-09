import EditScreenInfo from "~/libs/components/EditScreenInfo";
import { Center } from "~/libs/components/ui/center";
import { Divider } from "~/libs/components/ui/divider";
import { Heading } from "~/libs/components/ui/heading";
import { Text } from "~/libs/components/ui/text";
import { ImageBackground, ScrollView, View } from "react-native";

export default function Tab2() {
  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/400/801" }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 20, minHeight: 1000 }}>
          <Heading className="font-bold text-2xl">Expo- Tab 2</Heading>
          <Divider className="my-[30px] w-[80%]" />
          <Text className="text-[10px] text-center px-4">
            Example below to use gluestack-ui components.111
          </Text>
          <EditScreenInfo path="app/(app)/(tabs)/tab2.tsx" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
