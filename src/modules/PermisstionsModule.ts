import { NativeModules } from "react-native";

export type PermissionStatus = "granted" | "denied" | "never_ask_again";

interface PermissionModuleInterface {
  requestPermissions(
    permissions: string[]
  ): Promise<{ [key: string]: PermissionStatus }>;
  checkPermissions(
    permissions: string[]
  ): Promise<{ [key: string]: PermissionStatus }>;
}

const { PermissionModule, checkPermission } = NativeModules;

if (!PermissionModule) {
  console.warn(
    "⚠️ PermissionModule 原生模块未找到。请确保：\n" +
      "1. 已运行 npm run android 或 npx expo run:android 重新编译\n" +
      "2. PermissionPackage 已在 MainApplication.kt 中正确注册\n" +
      "3. 清理构建缓存：cd android && ./gradlew clean"
  );
}

export default (PermissionModule ||
  checkPermission) as PermissionModuleInterface;
