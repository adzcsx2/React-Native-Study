import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { TouchableOpacity } from "react-native";

import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { Paths } from "../../router/Paths";
import { SafeAreaView } from "react-native-safe-area-context";

const Test = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Box>
        <Button
          onPress={() => {
            router.push(Paths.Tests.test);
          }}
        >
          <Text>Test</Text>
        </Button>
        <Button
          onPress={() => {
            router.push(Paths.Tests.scrollview);
          }}
        >
          <Text>ScrollView</Text>
        </Button>
      </Box>
    </SafeAreaView>
  );
};
export default Test;
