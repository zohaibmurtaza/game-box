import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">{colorMode == "dark" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
