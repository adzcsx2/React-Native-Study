import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { router, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { MoonIcon, SunIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Path } from "@/router/Path";
import { SplashScreen } from "@/components/SplashScreen";
import { Button } from "@/components/ui/button";

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
    <GluestackUIProvider mode={colorMode}>
      <ThemeProvider value={colorMode === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="tabs" options={{ headerShown: false }} />
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
        <Box>
          <Button onPress={() => router.push("/modal")}>
            <Text>打开 Modal</Text>
          </Button>
        </Box>
        {splashVisiable && (
          <SplashScreen
            handleSkip={() => {
              setSpalashVisiable(false);
            }}
          ></SplashScreen>
        )}
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
