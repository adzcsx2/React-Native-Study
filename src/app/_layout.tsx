import { GluestackUIProvider } from "~/libs/components/ui/gluestack-ui-provider";
import "~/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { router, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fab, FabIcon, FabLabel } from "~/libs/components/ui/fab";
import { MoonIcon, SunIcon } from "~/libs/components/ui/icon";
import { HStack } from "~/libs/components/ui/hstack";
import { Image } from "~/libs/components/ui/image";
import { Text, TouchableOpacity, Platform, View } from "react-native";
import { Center } from "~/libs/components/ui/center";
import { Box } from "~/libs/components/ui/box";
import { Paths } from "../router/Paths";
import { SplashScreen } from "@/components/SplashScreen";
import { Button } from "~/libs/components/ui/button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [styleLoaded, setStyleLoaded] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [splashVisiable, setSpalashVisiable] = useState(true);
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider mode={colorMode}>
        <ThemeProvider value={colorMode === "dark" ? DarkTheme : DefaultTheme}>
          <StatusBar style="auto" translucent backgroundColor="transparent" />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          {pathname === "/" && !splashVisiable && (
            <Fab
              onPress={() =>
                setColorMode(colorMode === "dark" ? "light" : "dark")
              }
              className="m-6"
              size="lg"
            >
              <FabIcon as={colorMode === "dark" ? MoonIcon : SunIcon} />
            </Fab>
          )}
          {splashVisiable && (
            <SplashScreen
              handleSkip={() => {
                setSpalashVisiable(false);
                router.replace(Paths.INDEX);
              }}
            ></SplashScreen>
          )}
        </ThemeProvider>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
