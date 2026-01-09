import { Box } from "~/libs/components/ui/box";
import { Button, ButtonText } from "~/libs/components/ui/button";
import { TouchableOpacity } from "react-native";

import { Text } from "~/libs/components/ui/text";
import { useRouter } from "expo-router";
import { Paths } from "../../router/Paths";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack } from "~/libs/components/ui/vstack";

const Test = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <VStack className="p-4" space="md">
        <Button
          variant="solid"
          size="md"
          action="primary"
          onPress={() => {
            router.push(Paths.Tests.test);
          }}
        >
          <ButtonText>Test</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push(Paths.Tests.scrollview);
          }}
        >
          <ButtonText>ScrollView</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push(Paths.Tests.native_tabs);
          }}
        >
          <ButtonText>NativeTabs</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};
export default Test;
