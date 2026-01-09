import { NativeModules, Platform } from "react-native";

interface LogModuleInterface {
  printLog(message: string): void;
}

const { LogModule } = NativeModules;

if (!LogModule) {
  console.warn(
    "⚠️ LogModule 原生模块未找到。请确保：\n" +
      "1. 已运行 npm run android 或 npx expo run:android 重新编译\n" +
      "2. LogPackage 已在 MainApplication.kt 中正确注册\n" +
      "3. 清理构建缓存：cd android && ./gradlew clean"
  );
}

export default (LogModule || {
  printLog: (message: string) => {
    console.log("[模拟原生日志]", message);
  },
}) as LogModuleInterface;
