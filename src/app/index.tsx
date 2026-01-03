import React, { useEffect, useRef } from "react";
import Gradient from "../assets/icons/Gradient";
import Logo from "../assets/icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView, BackHandler, Platform, Alert, View } from "react-native";
import { Text } from "@/components/ui/text";

import { Button, ButtonText } from "@/components/ui/button";
import { useRouter, usePathname } from "expo-router";
import { Icon } from "@/components/ui/icon";
import useToast from "../hooks/useToast";
import { Paths } from "../router/Paths";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      className="flex-column md:flex-1 m-2 p-4 rounded-lg bg-background-0/40"
      key={name}
    >
      <Box className="items-center flex flex-row">
        <Icon as={IconSvg} />
        <Text className="font-medium ml-2 text-xl">{name}</Text>
      </Box>
      <Text className="mt-2">{desc}</Text>
    </Box>
  );
};

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const lastBackPress = useRef<number>(0);
  const { toast } = useToast();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        // 只在首页时生效
        if (pathname !== "/") return false;

        const currentTime = Date.now();
        if (currentTime - lastBackPress.current < 2000) {
          // 2秒内再次点击，退出应用
          BackHandler.exitApp();
        } else {
          // 第一次点击，显示提示
          lastBackPress.current = currentTime;
          toast("再按一次退出应用");
        }
        return true; // 阻止默认行为
      }
    );
    return () => subscription.remove();
  }, [pathname]);
  return (
    <Box className="flex-1 bg-background-300 h-[100vh]">
      <Box className="absolute w-full h-full">
        <Gradient />
      </Box>
      {/* <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      > */}
      <Box className="flex flex-1 items-center mx-5 lg:my-24 lg:mx-32 py-safe">
        <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
          <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
            <Text className="text-white font-medium">
              Get started by editing
            </Text>
            <Text className="text-white font-medium ml-2">
              ./App.tsx or ./app/index.tsx (or whatever entry point you have)
            </Text>
          </Box>
          <Button
            size="md"
            className="bg-primary-500 px-6 py-2 rounded-full"
            onPress={() => {
              router.push(Paths.Tabs.tab1);
            }}
          >
            <ButtonText>Explore Tab Navigation</ButtonText>
          </Button>
          <Button
            className="rounded-full"
            onPress={() => {
              router.push(Paths.TEST);
            }}
          >
            <ButtonText>go to test</ButtonText>
          </Button>
        </Box>
        <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
          <Logo />
        </Box>
      </Box>
      {/* </ScrollView> */}
    </Box>
  );
}
