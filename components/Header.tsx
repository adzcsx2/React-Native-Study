import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "./ui/box";

const Header = () => {
  const inset = useSafeAreaInsets();

  return <Box style={{ paddingTop: inset.top }}></Box>;
};
export default Header;
