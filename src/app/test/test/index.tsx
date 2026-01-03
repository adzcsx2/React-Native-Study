import React from "react";
import { Text } from "~/libs/components/ui/text";
import { Box } from "~/libs/components/ui/box";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const Hello = () => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  return (
    <SafeAreaView className=" h-full">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              setTimeout(() => {
                setIsRefreshing(false);
              }, 2000);
              console.log("refreshing");
            }}
          />
        }
      >
        <Box>
          <Text className="text-black text-5xl p-4">
            你好你好你好你好你好你好你好你好你好 你好你好你好你好你好你好你好
            你好你好 你好你好 你好你好 你好你好 你好你好 你好你好 你好你好
            你好你好 你好你好 你好你 好 你好你好 你好你好 你好你好 你好你好
            你好你好 你好你好你好你好 你好你好 你好你好 你好你好 你好你好
            你好你好 你好你好 你好你好 你好你好 你好你好 你好你好 你好你好
            你好你好 你好你好 你好你好 你好你好 你好你好 你好你好 你好你好
            你好你好 你好你好 你好你好 你好你好 你好你好 你好你好
            你好你好你好你好 你好你好你好你好
            你好你好你好你好你好你好你好你好你好你好
          </Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hello;
