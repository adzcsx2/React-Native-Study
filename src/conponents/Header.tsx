import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../../components/ui/box";

const Header = () => {
  const inset = useSafeAreaInsets();

  return <Box style={{ paddingTop: inset.top }}></Box>;
};
export default Header;
