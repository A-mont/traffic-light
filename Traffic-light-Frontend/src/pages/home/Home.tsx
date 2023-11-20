import { HStack, VStack } from "@chakra-ui/react";
import { GreenColor } from "./Green-Color";
import { RedColor } from "./Red-Color";
import { YellowColor } from "./Yellow-Color";
import { ReadState } from "./ReadState";

function Home() {
  return (
    <HStack>
      <VStack>
        <GreenColor />
        <YellowColor />
        <RedColor />
      </VStack>
      <ReadState/>
    </HStack>
  );
}

export { Home };
