import React, { useEffect, useState } from "react";
import { Box } from "./ui/box";
import { Text, TouchableOpacity } from "react-native";

import { Image } from "@/components/ui/image";
import useToast from "@/hooks/useToast";

interface SplashScreenProps {
  handleSkip: () => void;
}

export const SplashScreen = React.memo((props: SplashScreenProps) => {
  const [countDownFinish, setCountDownFinish] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const { toast } = useToast();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setCountDownFinish(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function handleSkip() {
    if (countDownFinish) {
      toast("欢迎使用本应用");
      props.handleSkip();
    }
  }

  return (
    <Box className="w-full h-full ">
      <TouchableOpacity
        className="w-[60px] h-[30px]  items-center justify-center mt-10  ml-auto  mr-5 bg-blue-400 rounded-lg"
        onPress={handleSkip}
        activeOpacity={0.6}
      >
        <Text className="text-white">
          {countDownFinish ? "跳过" : `跳过:${countDown}`}
        </Text>
      </TouchableOpacity>
      <Image
        className="w-[200px] h-[200px] justify-center items-center m-auto"
        source={require("../assets/images/splash-icon.png")}
        alt="splash"
      />
    </Box>
  );
});
