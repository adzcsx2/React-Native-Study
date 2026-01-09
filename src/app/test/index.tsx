import { Box } from "~/libs/components/ui/box";
import { Button, ButtonText } from "~/libs/components/ui/button";
import { TouchableOpacity } from "react-native";

import { Text } from "~/libs/components/ui/text";
import { useRouter } from "expo-router";
import { Paths } from "../../router/Paths";
import { SafeAreaView } from "react-native-safe-area-context";
import { VStack } from "~/libs/components/ui/vstack";
import LogModule from "@/modules/LogModule";
import PermisstionsModule from "@/modules/PermisstionsModule";

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
        <Button
          className="rounded-full bg-green-500"
          onPress={() => {
            LogModule.printLog("aaa");
          }}
        >
          <ButtonText>调用原生打印Log</ButtonText>
        </Button>
        <Button
          className="rounded-full bg-green-500"
          onPress={async () => {
            const checkResult = await PermisstionsModule.checkPermissions([
              "android.permission.CAMERA",
            ]);
            console.log(
              "检查权限结果:",
              checkResult["android.permission.CAMERA"]
            );
            if (checkResult["android.permission.CAMERA"] === "denied") {
              const requestPermission =
                await PermisstionsModule.requestPermissions([
                  "android.permission.CAMERA",
                ]);
              console.log("请求权限结果:", requestPermission);
            }
          }}
        >
          <ButtonText>调用权限请求</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};
export default Test;
