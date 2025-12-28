# React Native Starter Kit (Expo)

一个现代化的 React Native 起脚手架项目，基于 Expo 框架构建，集成了最新最佳实践和常用工具。

## ✨ 特性

- ⚡ **Expo SDK 54** - 最新的 Expo 框架，提供强大的原生功能支持
- 🚀 **Expo Router** - 文件系统路由，轻松管理应用导航
- 🎨 **NativeWind 4** - 使用 Tailwind CSS 编写 React Native 样式
- 🧩 **Gluestack UI** - 无头组件库，提供可定制的 UI 组件
- 🔧 **TypeScript** - 完整的类型安全支持
- 🎬 **React Native Reanimated** - 流畅的动画效果
- 📱 **跨平台支持** - 同时支持 iOS、Android 和 Web 平台
- 🎯 **图标库** - 集成 @expo/vector-icons 和 Lucide React Native

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm 或 yarn
- Expo Go 应用（用于真机调试）

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
# 启动开发服务器
npm start
# 或
yarn start
```

### 运行项目

```bash
# iOS 模拟器
npm run ios

# Android 模拟器
npm run android

# Web 浏览器
npm run web
```

## 📁 项目结构

```
├── app/                      # Expo Router 文件系统路由
│   ├── (tabs)/              # 标签页导航
│   │   ├── _layout.tsx      # 标签页布局
│   │   ├── index.tsx        # 首页
│   │   └── settings.tsx     # 设置页
│   ├── _layout.tsx          # 根布局
│   ├── +html.tsx            # Web 特定配置
│   ├── +not-found.tsx       # 404 页面
│   └── modal.tsx            # 模态框页面
├── components/              # 可复用组件
├── assets/                  # 静态资源（图片、字体等）
├── tailwind.config.js       # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖和脚本

```

## 🛠️ 可用脚本

```bash
npm start              # 启动开发服务器
npm run android        # 启动 Android 应用
npm run ios            # 启动 iOS 应用
npm run web            # 启动 Web 应用
npm run build          # 构建 Web 生产版本
npm run test           # 运行测试
```

## 🎨 样式系统

项目使用 NativeWind 4 + Tailwind CSS 进行样式管理：

```tsx
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <Text className="text-2xl font-bold text-gray-900">
        Hello World
      </Text>
    </View>
  );
}
```

## 🧭 路由导航

使用 Expo Router 的文件系统路由：

- `/` - 首页
- `/tabs/home` - 标签页首页
- `/tabs/settings` - 标签页设置页
- `/modal` - 模态框页面

### 添加新页面

在 `app/` 目录下创建新的 `.tsx` 文件，Expo Router 会自动创建对应的路由。

## 🔧 主要依赖

- **expo** (^54.0.7) - Expo 框架核心
- **expo-router** (~6.0.4) - 文件系统路由
- **react-native** (0.81.5) - React Native 核心
- **nativewind** (^4.2.1) - Tailwind CSS 支持
- **@gluestack-ui/core** (^3.0.12) - UI 组件库
- **@gorhom/bottom-sheet** (^5.0.0-alpha.11) - 底部面板组件
- **react-native-reanimated** (~4.1.0) - 动画库

## 📝 TypeScript 配置

项目已配置路径别名：

```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

可以直接使用 `@/` 别名导入模块：

```tsx
import MyComponent from '@/components/MyComponent';
```

## 🧪 测试

项目配置了 Jest 和 Expo 测试环境：

```bash
npm test
```

## 📚 学习资源

- [Expo 文档](https://docs.expo.dev/)
- [Expo Router 文档](https://docs.expo.dev/router/introduction/)
- [React Native 文档](https://reactnative.dev/)
- [NativeWind 文档](https://www.nativewind.dev/)
- [Gluestack UI 文档](https://gluestack.io/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

Made with ❤️ using Expo